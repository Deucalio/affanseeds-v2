"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/breadcrumb";
import { toast } from "sonner";

export default function ContactPage() {
  const router = useRouter();
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    product: "",
    destinationPort: "",
    comment: "",
  });

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this data to your server
      // which would then email it to info@affanagroseeds.com
      // For demo purposes, we'll simulate a successful submission

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status !== 200) {
        toast.error("Error sending message");
        return;
      }
      console.log("Data:", data);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormSubmitted(true);
      toast("Message sent successfully!");
    } catch (error) {
      toast("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16 bg-gray-950 text-gray-200">
      {/* Breadcrumb */}
      {/* <Breadcrumb /> */}

      {/* Hero Section */}
      <section className="relative bg-green-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 reveal">
              Get In Touch
            </h1>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 opacity-0 reveal">
              We're here to help with any questions about our products or
              services. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto fill-gray-950"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">
                Contact Information
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mb-8 opacity-0 reveal rounded-full"></div>

              <div className="space-y-8">
                <div
                  className="flex items-start opacity-0 reveal"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="p-3 bg-gray-800 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      Office Address
                    </h3>
                    <address className="not-italic text-gray-300">
                      Affan Agro Seeds LLP
                      <br />
                      Office # 522-B, 10th Floor
                      <br />
                      Dawood Center, Auto Bhan Road
                      <br />
                      Hyderabad
                    </address>
                  </div>
                </div>

                <div
                  className="flex items-start opacity-0 reveal"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="p-3 bg-gray-800 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-300">+92223411135</p>
                  </div>


                  
                </div>

                <div
                  className="flex items-start opacity-0 reveal"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="p-3 bg-gray-800 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300">info@affanagroseeds.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 opacity-0 reveal"
              style={{ animationDelay: "200ms" }}
            >
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="p-4 bg-gray-700 rounded-full mb-6">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for reaching out to us. We've received your
                    message and will get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-200">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-gray-200">
                          Company Name
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Company Name"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-200">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-200">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="product" className="text-gray-200">
                          Product
                        </Label>
                        <Input
                          id="product"
                          name="product"
                          placeholder="Product Name"
                          value={formData.product}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>{" "}
                      <div className="space-y-2">
                        <Label
                          htmlFor="destinationPort"
                          className="text-gray-200"
                        >
                          Destination Port
                        </Label>
                        <Input
                          id="destinationPort"
                          name="destinationPort"
                          placeholder="Destination Port"
                          value={formData.destinationPort}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment" className="text-gray-200">
                        Your Message
                      </Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        value={formData.comment}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}

      {/* FAQ Section */}

      {/* CTA Section */}
    </main>
  );
}
