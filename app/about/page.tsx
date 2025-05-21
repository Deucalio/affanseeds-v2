"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Leaf,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

export default function AboutPage() {
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

  // Core values
  const coreValues = [
    {
      icon: <Leaf className="h-6 w-6 text-emerald-400" />,
      title: "Sustainability",
      description:
        "We're committed to sustainable farming practices that protect our environment.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
      title: "Quality",
      description:
        "We never compromise on the quality of our seeds and agricultural products.",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      title: "Community",
      description:
        "Supporting local farmers and agricultural communities is at the heart of what we do.",
    },
    {
      icon: <Globe className="h-6 w-6 text-emerald-400" />,
      title: "Innovation",
      description:
        "We continuously research and develop better agricultural solutions.",
    },
  ];

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
              About Us
            </h1>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 opacity-0 reveal">
              Dedicated to providing high-quality agricultural seeds and
              solutions to farmers across Pakistan.
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

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">
                  Our Story
                </h2>
                <div className="w-16 h-1 bg-emerald-500 mb-8 opacity-0 reveal rounded-full"></div>
                <div className="prose prose-lg text-gray-300">
                  <p
                    className="opacity-0 reveal"
                    style={{ animationDelay: "100ms" }}
                  >
                    Founded in 2019, Affan Agro Seeds is a trusted name in the
                    agricultural industry, dedicated to empowering farmers with
                    high-quality seeds and sustainable farming solutions. From
                    humble beginnings, we have grown into a leading supplier of
                    premium seeds across oil seeds, forage seeds, vegetable
                    seeds, spices, and herbs, serving farmers, growers, and
                    agri-businesses throughout the region.
                  </p>
                  <p
                    className="opacity-0 reveal my-3"
                    style={{ animationDelay: "200ms" }}
                  >
                    At Affan Agro Seeds, our vision is to support modern
                    agriculture with reliable seed varieties that deliver high
                    yield, disease resistance, and adaptability to different
                    climates. We take pride in our research-driven approach and
                    carefully selected seed lines that meet the evolving needs
                    of today's agriculture.
                  </p>
                  <p
                    className="opacity-0 reveal my-2"
                    style={{ animationDelay: "300ms" }}
                  >
                    Whether it's high-yielding mustard, protein-rich alfalfa,
                    hybrid vegetables, or aromatic herbs and spices, our diverse
                    product range is developed to ensure quality harvests and
                    consistent results. We work closely with farmers, listening
                    to their needs, offering guidance, and providing dependable
                    seed solutions that lead to real success in the field.Driven
                    by innovation, integrity, and a passion for growth, Affan
                    Agro Seeds continues to contribute to the progress of
                    agriculture—one seed at a time
                  </p>
                </div>
              </div>
              <div
                className="relative opacity-0 reveal"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute -inset-4 rounded-2xl bg-emerald-500/10 opacity-20 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    // src="/ourstory.jpeg"
                    src="/aboutus.jpg"
                    alt="Our Story"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">
                Our Core Values
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto opacity-0 reveal">
                These principles guide everything we do, from seed development
                to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:border-emerald-500 transition-colors duration-300 opacity-0 reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-700 rounded-full mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}

      {/* Team Section */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 reveal">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-green-100 mb-8 opacity-0 reveal">
              Explore our range of premium agricultural seeds or contact us to
              learn more about our products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 reveal">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
