"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Star,
  Leaf,
  Droplets,
  Sun,
  ArrowRight,
  Check,
  Info,
  Award,
  Truck,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Shield,
  Sprout,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumb from "@/components/breadcrumb";

// Define types
interface ProductSpecifications {
  seedingRate: string;
  germinationRate: string;
  daysToGermination: string;
  harvestTime: string;
  yieldPotential: string;
}

interface GrowingConditions {
  soilType: string;
  soilPH: string;
  climate: string;
  waterRequirements: string;
  sunlight: string;
  growingSeason: string;
}

interface Product {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  longDescription: string;
  price: number;
  unit: string;
  minOrder: string;
  availability: string;
  image: string;
  features: string[];
  specifications: ProductSpecifications;
  growingConditions: GrowingConditions;
  badge?: string;
  badgeColor?: string;
  rating: number;
  reviews: number;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const VegetablesHeroSection = ({ productsRef }: { productsRef: React.RefObject<HTMLElement | null> }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderImages = [
    "/bannerimages/vegetables1.jpg",
    "/bannerimages/vegetables2.jpg",
    "/bannerimages/vegetables3.jpg",
  ];
  
  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
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
    <section
      id="home"
      className="relative flex flex-col pt-16 md:min-h-screen md:flex-row"
    >
      {/* Slideshow */}
      <div
        id="slideshow"
        className="relative w-full h-[30vh] mt-16 md:mt-0 md:h-auto md:absolute md:inset-0 z-0"
      >
        {sliderImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full opacity-80"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/70 to-dark-900"></div>
          </div>
        ))}

        {/* Content for the hero section */}
        <div className="container mx-auto px-4 relative z-10 mt-8 md:mt-24">
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
              <span>Vegetable Seeds</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
            >
              Premium Vegetable Seeds for Your Garden
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10"
            >
              High-quality seeds for growing delicious, nutritious vegetables.
              Our seeds are carefully selected for flavor, yield, and disease
              resistance to ensure your gardening success.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
            >
              {[
                {
                  icon: <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />,
                  text: "Non-GMO Seeds",
                },
                {
                  icon: <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />,
                  text: "High Germination Rate",
                },
                {
                  icon: <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />,
                  text: "Disease Resistant Varieties",
                },
                {
                  icon: <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />,
                  text: "Expert Growing Support",
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

        {/* Slideshow Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-green-400 scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default function VegetableSeedsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs for scroll sections
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  // State for scroll position
  const [scrollY, setScrollY] = useState(0);

  // State for product interactions
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);


  const [activeSection, setActiveSection] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
  
    // Auto-advance slides
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
      }, 8000);
  
      return () => clearInterval(slideInterval);
    }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  // Scroll to products section
  const scrollToContent = () => {
    const productsElement = document.getElementById("products");
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Modal functions
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation on scroll
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
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Vegetable Seeds products data
  const vegetableProducts: Product[] = [
    {
      id: 1,
      name: "Okra / Bhindi Anmol F1 Hybrid Seeds",
      scientificName: "Abelmoschus esculentus",
      description: `Early Harvest. Rich Color. Reliable Yield.
ANMOL F1 is a productive hybrid okra variety featuring medium-tall plants with strong branching, making it ideal for repeated harvesting. It performs well in various climates and can be sown year-round depending on local conditions.`,
      longDescription:
        "Hybrid Cucumber Seeds (Cucumis sativus) are bred for exceptional productivity, disease resistance, and fruit quality. These seeds produce plants with vigorous growth, multiple fruiting nodes, and extended harvest periods. Our cucumber varieties have been selected for their crisp texture, excellent flavor, and uniform appearance, making them ideal for both market growers and home gardeners.",
      price: 14.99,
      unit: "per 25g",
      minOrder: "25g",
      availability: "In Stock",
      image: "/products/vegetable/Okra.svg",
      features: [
        "Medium-tall, well-branched plant structure",
        "Suitable for year-round sowing (climate-dependent)",
        "Attractive dark green pods, slightly thick and 7-ridged",
        "Average pod size: ~5 inches",
        "Harvest starts approximately 45 days after sowing",
      ],
      specifications: {
        seedingRate: "10 kg/hectare",
        germinationRate: "90-95%",
        daysToGermination: "3-7 days",
        harvestTime: "45-55 days after planting",
        yieldPotential: "25-35 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained, fertile loam",
        soilPH: "6.0-7.0",
        climate: "Warm, temperate to subtropical",
        waterRequirements: "Medium to high, consistent moisture",
        sunlight: "Full sun (6-8 hours daily)",
        growingSeason: "Spring through summer",
      },
      badge: "High Yield",
      badgeColor: "green",
      rating: 4.7,
      reviews: 124,
    },
    {
      id: 2,
      name: "Tomato Roma F1 Hybrid Seeds",
      scientificName: "Solanum lycopersicum",
      description: `Strong Plant. Early Harvest. Market-Ready Quality. ROMA F1 is a semi-determinate hybrid tomato with excellent fruit set and reliable performance in various conditions. Its early maturity and disease tolerance make it a top choice for commercial growers.`,
      longDescription:
        "Premium Tomato Seeds (Solanum lycopersicum) are specially selected for their exceptional flavor, disease resistance, and productivity. These seeds produce plants with vigorous growth, excellent fruit set, and extended harvest periods. Our tomato varieties have been bred to resist common diseases like early blight, late blight, and fusarium wilt, ensuring a successful growing experience.",
      price: 12.99,
      unit: "per 50g",
      minOrder: "50g",
      availability: "In Stock",
      image: "/products/vegetable/TOMATO.svg",
      features: [
        "Plant Type: Semi-determinate with excellent bearing habit",
        "Fruit Shape & Color: Oval fruits with a bright, attractive red color",
        "Fruit Weight: 130-160 grams",
        "Maturity: First harvest in just 65 days after transplanting",
        "Production Potential: 110,000 to 130,000 kg per hectare (under ideal conditions)",
        "Resistance: Good tolerance to TYLCV, BW, and FW",
        "Shelf Life: Firm fruits that handle long-distance transport without damage",
      ],
      specifications: {
        // seedingRate: "110,000 to 130,000 kg/hectare (under ideal conditions)",
        seedingRate: "125gm/hectare",
        germinationRate: "85-90%",
        daysToGermination: "5-10 days",
        harvestTime: "70-85 days after transplanting",
        yieldPotential: "40-60 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained, fertile loam",
        soilPH: "6.0-6.8",
        climate: "Warm, temperate to subtropical",
        waterRequirements: "Medium to high, consistent moisture",
        sunlight: "Full sun (6-8 hours daily)",
        growingSeason: "Spring through summer",
      },
      badge: "High Yield",
      badgeColor: "amber",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 3,
      name: "Hot Pepper Hot Queen F1 Hybrid Seeds",
      scientificName: "Capsicum annuum",
      description:
        "Hot Queen F1 is a high-performing hybrid with a strong, medium-tall plant structure and a spreading growth habit. It matures early—ready for first picking around 65 days after transplant—and keeps producing for up to a year under the right care. Expect eye-catching, green chili peppers measuring 5–7 cm in length and 1–1.5 cm in width. The fruits are consistent in size and ideal for both fresh use and commercial sales. This hybrid shows solid resistance to powdery mildew and delivers dependable performance season after season. Designed for versatility—great for fresh markets or processing. Yields average between 40–50 tons per acre, even under standard conditions.",
      longDescription:
        "Premium Okra Seeds (Abelmoschus esculentus) are specially selected for their productivity, pod quality, and heat tolerance. These seeds produce plants with vigorous growth, extended harvest periods, and resistance to common pests. Our okra varieties have been bred to produce tender, flavorful pods that maintain their quality even in challenging growing conditions.",
      price: 10.99,
      unit: "per 50g",
      minOrder: "50g",
      availability: "In Stock",
      image: "/products/vegetable/Hot Queen F2.svg",
      features: [
        "Early maturity: Ready for harvest ~65 days after transplant.",
        "High yield: Produces 40-50 tons per acre under normal conditions.",
        "Fruit size: 5-7 cm long, 1-1.5 cm wide; uniform and market-ready.",
        "Plant traits: Medium-tall, spreading habit, productive up to 1 year.",
        "Disease resistance: Strong tolerance to powdery mildew.",
      ],
      specifications: {
        seedingRate: "250 gm/hectare",
        germinationRate: "70-85%",
        daysToGermination: "5-10 days",
        harvestTime: "50-60 days after planting",
        yieldPotential: "10-15 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained, fertile soil",
        soilPH: "6.0-7.0",
        climate: "Warm, tropical to subtropical",
        waterRequirements: "Medium, drought tolerant once established",
        sunlight: "Full sun",
        growingSeason: "Summer to early fall",
      },
      badge: "Heat Tolerant",
      badgeColor: "blue",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 4,
      name: "Onion Nasarpuri Seeds",
      scientificName: "Allium cepa var. aggregatum",
      description: `Bold Bulbs. Brilliant Color. Reliable Performance.
Nasarpuri is a trusted variety known for its well-shaped, large-sized bulbs that stand out in the market. The bulbs have a light red hue and an attractive appearance that draws attention.`,
      longDescription:
        "Bell Pepper Seeds (Capsicum annuum) are carefully selected for their fruit quality, productivity, and disease resistance. These seeds produce plants with strong growth, multiple fruiting nodes, and extended harvest periods. Our bell pepper varieties have been bred to produce sweet, thick-walled fruits that mature from green to vibrant colors like red, yellow, and orange.",
      price: 13.99,
      unit: "per 25g",
      minOrder: "25g",
      availability: "In Stock",
      image: "/products/vegetable/NASARPURI ONION.svg",
      features: [
        "Uniform bulb shape with smooth skin",
        "Average bulb weight: 120-150 grams",
        "Matures in approximately 120 days after transplanting",
        "Strong yield performance: 22,500 to 30,000 kg per hectare",
      ],
      specifications: {
        seedingRate: "5 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "7-14 days",
        harvestTime: "60-90 days after transplanting",
        yieldPotential: "25-35 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained, fertile loam",
        soilPH: "5.8-6.8",
        climate: "Warm, temperate to subtropical",
        waterRequirements: "Medium, consistent moisture",
        sunlight: "Full sun (6-8 hours daily)",
        growingSeason: "Spring through fall",
      },
      badge: "Colorful",
      badgeColor: "teal",
      rating: 4.8,
      reviews: 112,
    },
  ];

  // Features data
  const features: Feature[] = [
    {
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      title: "Premium Quality",
      description:
        "Our vegetable seeds are carefully selected for optimal flavor, yield, and disease resistance.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      title: "Disease Resistant",
      description:
        "Varieties chosen for their natural resistance to common diseases.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-emerald-600" />,
      title: "Water Efficient",
      description:
        "Selected for performance even in challenging water conditions.",
    },
    {
      icon: <Sprout className="h-6 w-6 text-emerald-600" />,
      title: "High Yield",
      description:
        "Maximize your harvest with our high-performing seed varieties.",
    },
  ];

  // Helper function for badge colors
  const getBadgeColor = (color?: string) => {
    switch (color) {
      case "red":
        return "bg-red-900/80 text-red-100 border-red-700";
      case "amber":
        return "bg-amber-900/80 text-amber-100 border-amber-700";
      case "green":
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700";
      case "blue":
        return "bg-blue-900/80 text-blue-100 border-blue-700";
      case "purple":
        return "bg-purple-900/80 text-purple-100 border-purple-700";
      case "violet":
        return "bg-violet-900/80 text-violet-100 border-violet-700";
      case "lime":
        return "bg-lime-900/80 text-lime-100 border-lime-700";
      case "teal":
        return "bg-teal-900/80 text-teal-100 border-teal-700";
      case "emerald":
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700";
      case "rose":
        return "bg-rose-900/80 text-rose-100 border-rose-700";
      default:
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700";
    }
  };

  // Add to cart function
  const addToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    setCartCount((prev) => prev + 1);
    // Here you would add actual cart functionality
  };

  // Add to wishlist function
  const addToWishlist = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    setWishlistCount((prev) => prev + 1);
    // Here you would add actual wishlist functionality
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      {/* Breadcrumb */}
      {/* <Breadcrumb /> */}

      {/* Hero Section */}
      {/* <VegetablesHeroSection productsRef={productsRef} /> */}
      <section ref={heroRef} className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bannerimages/vegetable1.jpg"
            alt="Vegetable garden"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/50 to-gray-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={staggerContainer}>
            {/* <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Leaf className="h-4 w-4 mr-2" />
              <span>Vegetable Seeds</span>
            </motion.div> */}

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
            >
              Premium Vegetable Seeds for Your Garden
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10">
              High-quality seeds for growing delicious, nutritious vegetables. Our seeds are carefully selected for
              flavor, yield, and disease resistance to ensure your gardening success.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Non-GMO Seeds" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "High Germination Rate" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Disease Resistant Varieties" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Expert Growing Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700"
                >
                  {item.icon}
                  <span className="ml-2 text-sm text-gray-200">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
                onClick={() => productsRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Explore Products</span>
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>

      
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Products Section */}


      {/* Products Section */}
      <section ref={productsRef} className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-900/5 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4 inline-block"
            >
              Our <span className="text-emerald-400">Vegetable Seeds</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Discover our premium selection of vegetable seeds, perfect for
              home gardeners and commercial growers looking to maximize flavor
              and yield.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {vegetableProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`relative ${index % 2 === 0 ? "" : "bg-gray-900/30 rounded-3xl py-12 px-4 md:px-8"}`}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Product Image - Always on left for mobile, alternating for desktop */}
                  <motion.div
                    variants={scaleIn}
                    className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="relative mx-auto">
                      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-gray-800 group-hover:border-emerald-900 transition-all duration-300">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Badge */}
                      {product.badge && (
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(product.badgeColor)}`}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Product Content */}
                  <motion.div
                    variants={fadeInUp}
                    className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-emerald-400 italic mb-4 hidden">
                      {product.scientificName}
                    </p>
                    <p className="text-gray-300 mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Specifications Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">
                          Seeding Rate
                        </h4>
                        <p className="text-white">
                          {product.specifications.seedingRate}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">
                          Germination
                        </h4>
                        <p className="text-white">
                          {product.specifications.germinationRate}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}

                    {/* Price and Actions */}
                    <div className="flex scale-0 flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-3xl font-bold text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-gray-400 ml-2">
                          {product.unit}
                        </span>
                        <p className="text-sm text-gray-500">
                          Min. Order: {product.minOrder}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
                          onClick={(e) => addToWishlist(e, product.id)}
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button
                          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
                          onClick={(e) => addToCart(e, product.id)}
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </div>

                    {/* View Details Button */}
                  </motion.div>
                </div>

                {/* Expanded Details Section */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTI4MjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Award className="h-4 w-4 mr-2" />
              <span>Our Commitment</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4 inline-block"
            >
              Sustainable{" "}
              <span className="text-emerald-400">Vegetable Growing</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              We're dedicated to promoting sustainable agriculture through our
              ethical seed sourcing and growing practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf className="h-10 w-10 text-emerald-400" />,
                title: "Organic Growing Methods",
                description:
                  "All our seeds are grown using sustainable, organic practices without synthetic pesticides or fertilizers.",
              },
              {
                icon: <Droplets className="h-10 w-10 text-emerald-400" />,
                title: "Water Conservation",
                description:
                  "We select and develop varieties that require less water, helping farmers conserve this precious resource.",
              },
              {
                icon: <Sun className="h-10 w-10 text-emerald-400" />,
                title: "Climate Resilience",
                description:
                  "Our seeds are tested for resilience to changing climate conditions, ensuring long-term farming success.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="p-3 bg-emerald-900/30 rounded-full w-fit mb-6 border border-emerald-700/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-gray-900/20 to-gray-950 opacity-70"></div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to{" "}
              <span className="text-emerald-400">Grow Better Vegetables?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 mb-8"
            >
              Contact our team of agricultural experts for personalized
              recommendations and bulk order inquiries.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button> */}

              <Button
                onClick={() => router.push("/contact")}
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
      >
        <Button
          onClick={scrollToTop}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-12 w-12 p-0 shadow-lg shadow-emerald-900/50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>

      {/* Product Detail Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeProductModal}
          ></div>

          <div className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white"
              onClick={closeProductModal}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Modal Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span
                  className={`inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-2`}
                >
                  {selectedProduct.badge}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-white/80 text-lg">
                  {selectedProduct.scientificName}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Overview
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.longDescription}
                  </p>

                  <div className="flex items-baseline mb-4">
                    <span className={`text-3xl font-bold text-emerald-600`}>
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {selectedProduct.unit}
                    </span>
                    <Badge variant="outline" className="ml-4">
                      Min. Order: {selectedProduct.minOrder}
                    </Badge>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Availability
                    </h4>
                    <p
                      className={`flex items-center ${selectedProduct.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}
                    >
                      {selectedProduct.availability === "In Stock" ? (
                        <Check className="h-4 w-4 mr-1" />
                      ) : (
                        <X className="h-4 w-4 mr-1" />
                      )}
                      {selectedProduct.availability}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          className={`h-5 w-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">
                      Seed Specifications
                    </h4>
                    <ul className="space-y-3">
                      {Object.entries(selectedProduct.specifications).map(
                        ([key, value]) => (
                          <li
                            key={key}
                            className="flex justify-between border-b border-gray-100 pb-2"
                          >
                            <span className="text-gray-600">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </span>
                            <span className="font-medium text-gray-900">
                              {value}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">
                      Growing Conditions
                    </h4>
                    <ul className="space-y-3">
                      {Object.entries(selectedProduct.growingConditions).map(
                        ([key, value]) => (
                          <li
                            key={key}
                            className="flex justify-between border-b border-gray-100 pb-2"
                          >
                            <span className="text-gray-600">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </span>
                            <span className="font-medium text-gray-900">
                              {value}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    Planting Tips
                  </h3>
                  <Button
                    className={`bg-emerald-600 hover:bg-emerald-700 text-white`}
                    onClick={closeProductModal}
                  >
                    Contact For More Info
                  </Button>
                </div>
                <p className="text-gray-700 mt-4">
                  For best results, plant {selectedProduct.name.toLowerCase()}{" "}
                  during the recommended planting season. Ensure proper soil
                  preparation and follow the recommended seeding rate. Contact
                  our agricultural experts for personalized advice specific to
                  your region and growing conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
