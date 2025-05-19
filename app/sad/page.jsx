"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ForageHeroSection = ({ productsRef }) => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slider images
  const sliderImages = [
    "/bannerimages/seed1.jpg",
    "/bannerimages/seed2.jpg", // Replace with your actual image paths
    "/bannerimages/seed3.jpg", // Replace with your actual image paths
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={heroRef} className="relative py-12 md:py-24 overflow-hidden">
      {/* Slider with background images */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Forage field ${index + 1}`}
              fill
              className="object-cover md:object-cover sm:object-fixed"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/50 to-gray-950"></div>
      </div>

      {/* Slider dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-emerald-400" : "bg-gray-400/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Leaf className="h-4 w-4 mr-2" />
            <span>Forage Field Crop Seeds</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
          >
            Premium Forage Seeds for Optimal Yields
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10"
          >
            High-quality seeds for pasture, hay, and silage production,
            carefully selected for optimal growth and nutrition. Our forage
            seeds are sourced from the best producers worldwide.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
          >
            {[
              {
                icon: (
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                ),
                text: "100% Authentic Seeds",
              },
              {
                icon: (
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                ),
                text: "High Germination Rate",
              },
              {
                icon: (
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                ),
                text: "Disease Resistant",
              },
              {
                icon: (
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                ),
                text: "Expert Support",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700"
              >
                {item.icon}
                <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-200">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg shadow-lg shadow-emerald-900/50 group"
              onClick={() =>
                productsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Explore Products</span>
              <ChevronDown className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <>
      <ForageHeroSection />
    </>
  );
};

export default Page;
