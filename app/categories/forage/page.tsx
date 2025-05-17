"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
import { useRouter } from "next/navigation";

// Define TypeScript interfaces for our data
interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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
  badge: string;
  badgeColor: string;
  rating: number;
  reviews: number;
}

interface ProductItem {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  unit: string;
  minOrder: string;
  availability: string;
  image: string;
  features: string[];
  specifications: ProductSpecifications;
  growingConditions: GrowingConditions;
  color: string;
  badge: string;
}

export default function ForageCategoryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const router = useRouter();
  // Refs for scroll sections
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  // State for scroll position
  const [scrollY, setScrollY] = useState(0);

  // State for product interactions
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

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

  // Scroll to products section
  const scrollToContent = () => {
    const productsElement = document.getElementById("products");
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Modal functions
  const openProductModal = (product: ProductItem) => {
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

  // Forage products data
  const forageProducts: Product[] = [
    {
      id: 1,
      name: "Thai Grass Seeds",
      scientificName: "Brachiaria ruziziensis",
      description:
        "High-yielding tropical grass ideal for grazing and hay production in warm climates. Excellent drought tolerance and quick regrowth after cutting.",
      longDescription:
        "Thai Grass (Brachiaria ruziziensis) is a high-yielding tropical forage grass that thrives in warm climates. It produces abundant leafy growth, making it excellent for grazing, hay, and silage. With good drought tolerance and quick regrowth after cutting, it's an ideal choice for year-round forage production in warmer regions.",
      price: 18.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/products/forage/THAI GRASS MOCKUP POUCH.png",
      features: [
        "High leaf-to-stem ratio",
        "Excellent palatability",
        "Good drought tolerance",
        "Quick regrowth after cutting",
        "Suitable for grazing and hay",
        "Adapts to various soil types",
      ],
      specifications: {
        seedingRate: "1.7KG/hectare",
        germinationRate: "75-80%",
        daysToGermination: "7-14 days",
        harvestTime: "60-70 days after planting",
        yieldPotential: "15-20 tons/hectare/year (dry matter)",
      },
      growingConditions: {
        soilType: "Wide range, prefers well-drained",
        soilPH: "5.0-7.5",
        climate: "Tropical to subtropical",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Year-round in warm areas",
      },
      badge: "Popular",
      badgeColor: "amber",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Alfalfa Seeds",
      scientificName: "Medicago sativa",
      description:
        "Stamina Alfalfa Seeds from Affan Agro Seeds are your go-to solution for high-quality, nutrient-dense forage. Known as Lucerne (Medicago sativa), this deep-rooted legume thrives in various soil conditions, providing excellent nutrition for livestock such as cattle, horses, and sheep. Whether used for hay, fodder, grazing, or fresh green chop, Stamina offers exceptional yield, rapid regrowth, and superior feed quality. With a legacy of agricultural excellence, Affan Agro Seeds delivers the finest alfalfa variety to boost farm productivity and enhance economic returns.",
      longDescription:
        "Alfalfa (Medicago sativa) is known as the 'Queen of Forages' due to its exceptional protein content and nutritional value. This deep-rooted perennial legume produces high yields of nutritious forage for hay, silage, or grazing. It also improves soil fertility through nitrogen fixation, making it an excellent choice for sustainable farming systems.",
      price: 24.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/products/forage/STAMINA ALFALFA SEEDS POUCH.png",
      features: [
        "High protein content (18-22%)",
        "Deep root system",
        "Drought resistant",
        "Nitrogen fixation",
        "Multiple harvests per season",
        "Excellent nutritional value",
      ],
      specifications: {
        seedingRate: "15-20 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "7-10 days",
        harvestTime: "60-70 days after planting (first cutting)",
        yieldPotential: "12-15 tons/hectare/year",
      },
      growingConditions: {
        soilType: "Well-drained loamy soil",
        soilPH: "6.5-7.5",
        climate: "Temperate to arid",
        waterRequirements: "Medium to high",
        sunlight: "Full sun",
        growingSeason: "Spring through fall",
      },
      badge: "The Queen of Forage",
      badgeColor: "green",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 3,
      name: "Ryegrass Seeds",
      scientificName: "Lolium",
      description:
        "Our Annual Ryegrass offers farmers exceptional winter forage performance with rapid establishment and strong cool-season growth. Its late heading date extends the grazing period, delivering flexibility and multiple grazing or cutting opportunities. Ideal for high-output silage systems or intensive grazing, this variety ensures high feed quality and strong livestock performance. It thrives in medium fertility soils and performs well under both dryland and irrigated conditions.",
      longDescription:
        "Ryegrass (Lolium perenne) is a premium cool-season grass known for its exceptional digestibility and palatability. It establishes quickly and provides high-quality forage for grazing or hay production. With proper management, ryegrass delivers excellent animal performance and can be used in pure stands or in mixtures with legumes for balanced nutrition.",
      price: 14.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/products/forage/jivet annual ryegrass.jpg",
      features: [
        "Rapid establishment for quick ground cover",
        "Outstanding winter and early spring production",
        "Excellent forage quality for silage and grazing",
        "Late heading (+18 days) for extended grazing window",
        "Strong disease resistance",
        "Supports high animal performance and weight gain",
        "Maintains quality into spring",
      ],
      specifications: {
        seedingRate: "25-35 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "7-14 days",
        harvestTime: "Rotational grazing every 21-28 days",
        yieldPotential: "10-12 tons/hectare/year (dry matter)",
      },
      growingConditions: {
        soilType: "Moist, fertile soil",
        soilPH: "5.5-7.5",
        climate: "Temperate, cool",
        waterRequirements: "Medium to high",
        sunlight: "Full sun to partial shade",
        growingSeason: "Fall to spring in warmer regions",
      },
      badge: "High Quality",
      badgeColor: "blue",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 4,
      name: "Berseem Clover Seeds",
      scientificName: "Trifolium alexandrinum",
      description:
        "Berseem Clover (Trifolium alexandrinum) is a highly productive, cool-season annual forage legume widely cultivated for its exceptional green fodder quality. Well-known for its rapid regrowth and multiple cutting potential, Berseem is ideal for hay production and direct grazing. This variety establishes quickly and recovers strongly after mowing, providing consistent biomass throughout the season. Requiring moderate irrigation, Berseem Clover is a reliable choice for farmers looking to maximize forage yield with limited water input. Its tender, nutrient-rich foliage is highly palatable and well-suited for dairy and livestock feeding. A valuable addition to any forage rotation system, Berseem also contributes to soil fertility through natural nitrogen fixation",
      longDescription:
        "Berseem Clover (Trifolium alexandrinum) is a fast-growing winter annual legume that provides high-quality forage during cooler months. It's excellent for green manure, improving soil fertility through nitrogen fixation. With high protein content and exceptional digestibility, it makes an ideal livestock feed that can be cut multiple times during its growing season.",
      price: 19.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/products/forage/IMG-20241017-WA0004(2).jpg",
      features: [
        "Fast establishment",
        "Multiple cuttings",
        "Nitrogen fixation",
        "High protein content",
        "Excellent digestibility",
        "Winter growth",
      ],
      specifications: {
        seedingRate: "20-25 kg/hectare",
        germinationRate: "80-85%",
        daysToGermination: "5-8 days",
        harvestTime: "50-60 days after planting (first cutting)",
        yieldPotential: "40-60 tons/hectare (green fodder)",
      },
      growingConditions: {
        soilType: "Clay to loamy soils",
        soilPH: "6.0-8.0",
        climate: "Cool season crop",
        waterRequirements: "Medium to high",
        sunlight: "Full sun",
        growingSeason: "Winter to spring",
      },
      badge: "Winter Crop",
      badgeColor: "teal",
      rating: 4.6,
      reviews: 87,
    },
    {
      id: 5,
      name: "Fodder Beet Seeds",
      scientificName: "GERONIMO",
      description:
        "GERONIMO Fodderbeet delivers reliable, high-yielding forage with excellent energy value for livestock feeding. With strong disease tolerance and a clean root profile, it offers easy harvest and high-quality silage or fresh feed. The variety's high above-ground root height minimizes soil contamination, and its balanced dry matter content ensures optimal nutrition. GERONIMO is ideal for farmers focused on efficient, profitable, and high-performing animal systems.",
      longDescription:
        "Fodder Beet (Beta vulgaris) is a high-yielding root crop that provides exceptional energy content for livestock feeding. The large, nutritious roots can be harvested and fed directly to animals or stored for winter feeding. With proper management, fodder beet delivers some of the highest dry matter yields per hectare of any forage crop, making it extremely cost-effective.",
      price: 29.99,
      unit: "per kg",
      minOrder: "2kg",
      availability: "In Stock",
      image: "/products/forage/FODDER BEET IMAGE.jpg",
      features: [
        "High fresh matter yield for maximum biomass output",
        "Medium to high dry matter content (16-18%) for energy-dense feed",
        "Strong energy yield (MJ NEL/ha) supports high animal performance",
        "Roots grow well above ground - easier harvesting and lower soil tare",
        "Clean, ovoid, yellow-orange roots - ideal for silage and fresh feeding",

        "Excellent resistance to Rhizomania",
        "Medium resistance to Cercospora, Ramularia, Powdery Mildew, and Rhizoctonia",
        "Medium to high bolting tolerance for crop reliability",
      ],
      specifications: {
        seedingRate: "3-5 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "7-14 days",
        harvestTime: "180-200 days after planting",
        yieldPotential: "80-120 tons/hectare (fresh weight)",
      },
      growingConditions: {
        soilType: "Deep, well-drained soils",
        soilPH: "6.0-7.5",
        climate: "Temperate",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Spring to fall",
      },
      badge: "High Energy",
      badgeColor: "rose",
      rating: 4.8,
      reviews: 65,
    },
    {
      id: 6,
      name: "Rhodes Grass Seeds",
      scientificName: "FineCut",
      description:
        "FineCut Rhodes is a premium fine-leaf Rhodes grass selected for its excellent forage quality and versatility. Its upright growth and early flowering make it ideal for haymaking, while its soft, leafy texture ensures high animal acceptance and intake when grazed. With the added benefit of low oxalate content and stoloniferous spreading ability, FineCut Rhodes establishes quickly and maintains strong ground cover over multiple seasons",
      longDescription:
        "Rhodes Grass (Chloris gayana) is a hardy perennial grass known for its exceptional drought resistance and salt tolerance. It establishes quickly and provides high-quality forage for grazing and hay. Its deep root system makes it excellent for erosion control and soil improvement, while its ability to withstand heavy grazing makes it ideal for intensive livestock operations.",
      price: 16.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/products/forage/1-27.jpeg.jpg",
      features: [
        "Fine leaf, high-quality forage grass",
        "Early and uniform flowering",
        "Dense, upright growth for easier harvesting",
        "Excellent dry matter production potential (up to 20 t DM/ha+)",
        "Highly palatable for both hay and grazing use",
        "Stoloniferous growth promoting fast ground coverage",
        "Naturally low in oxalate levels - safe for livestock,",
      ],
      specifications: {
        seedingRate: "6-8 kg/hectare",
        germinationRate: "70-80%",
        daysToGermination: "7-14 days",
        harvestTime: "70-80 days after planting",
        yieldPotential: "10-15 tons/hectare/year (dry matter)",
      },
      growingConditions: {
        soilType: "Wide range, tolerates poor soils",
        soilPH: "5.5-8.0",
        climate: "Tropical to subtropical",
        waterRequirements: "Low to medium",
        sunlight: "Full sun",
        growingSeason: "Spring through fall",
      },
      badge: "Drought Resistant",
      badgeColor: "emerald",
      rating: 4.7,
      reviews: 112,
    },
  ];

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

  // Helper function for badge colors
  const getBadgeColor = (color: string) => {
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

  // Products data

  // Features data
  const features: ProductFeature[] = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Premium Quality",
      description:
        "Our forage seeds are carefully selected for optimal growth and nutrition.",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Disease Resistant",
      description:
        "Varieties chosen for their natural resistance to common diseases.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-green-600" />,
      title: "Drought Tolerant",
      description:
        "Selected for performance even in challenging water conditions.",
    },
    {
      icon: <Sprout className="h-6 w-6 text-green-600" />,
      title: "High Yield",
      description:
        "Maximize your harvest with our high-performing seed varieties.",
    },
  ];

  // Get color classes for products
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-600",
          hover: "hover:bg-green-700",
          text: "text-green-600",
          light: "bg-green-50",
          border: "border-green-200",
          badgeBg: "bg-green-100",
          badgeText: "text-green-800",
        };
      case "emerald":
        return {
          bg: "bg-emerald-600",
          hover: "hover:bg-emerald-700",
          text: "text-emerald-600",
          light: "bg-emerald-50",
          border: "border-emerald-200",
          badgeBg: "bg-emerald-100",
          badgeText: "text-emerald-800",
        };
      case "amber":
        return {
          bg: "bg-amber-600",
          hover: "hover:bg-amber-700",
          text: "text-amber-600",
          light: "bg-amber-50",
          border: "border-amber-200",
          badgeBg: "bg-amber-100",
          badgeText: "text-amber-800",
        };
      case "teal":
        return {
          bg: "bg-teal-600",
          hover: "hover:bg-teal-700",
          text: "text-teal-600",
          light: "bg-teal-50",
          border: "border-teal-200",
          badgeBg: "bg-teal-100",
          badgeText: "text-teal-800",
        };
      case "blue":
        return {
          bg: "bg-blue-600",
          hover: "hover:bg-blue-700",
          text: "text-blue-600",
          light: "bg-blue-50",
          border: "border-blue-200",
          badgeBg: "bg-blue-100",
          badgeText: "text-blue-800",
        };
      case "rose":
        return {
          bg: "bg-rose-600",
          hover: "hover:bg-rose-700",
          text: "text-rose-600",
          light: "bg-rose-50",
          border: "border-rose-200",
          badgeBg: "bg-rose-100",
          badgeText: "text-rose-800",
        };
      default:
        return {
          bg: "bg-green-600",
          hover: "hover:bg-green-700",
          text: "text-green-600",
          light: "bg-green-50",
          border: "border-green-200",
          badgeBg: "bg-green-100",
          badgeText: "text-green-800",
        };
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      {/* Breadcrumb */}
      {/* <Breadcrumb /> */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-24 overflow-hidden"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/forage/banner.avif"
            alt="Forage field"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/50 to-gray-950"></div>
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
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
            >
              Premium Forage Seeds for Optimal Yields
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-10"
            >
              High-quality seeds for pasture, hay, and silage production,
              carefully selected for optimal growth and nutrition. Our forage
              seeds are sourced from the best producers worldwide.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                {
                  icon: <Check className="h-5 w-5 text-emerald-400" />,
                  text: "100% Authentic Seeds",
                },
                {
                  icon: <Check className="h-5 w-5 text-emerald-400" />,
                  text: "High Germination Rate",
                },
                {
                  icon: <Check className="h-5 w-5 text-emerald-400" />,
                  text: "Disease Resistant Varieties",
                },
                {
                  icon: <Check className="h-5 w-5 text-emerald-400" />,
                  text: "Expert Growing Support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700"
                >
                  {item.icon}
                  <span className="ml-2 text-sm text-gray-200">
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
                onClick={() =>
                  productsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>Explore Products</span>
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>

              {/* <Button
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Download Catalog</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              Our <span className="text-emerald-400">Forage Seeds</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Discover our premium selection of forage seeds, perfect for
              farmers looking to maximize yield and nutritional value for their
              livestock.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {forageProducts.map((product, index) => (
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
                    <p className="text-emerald-400 italic mb-4">
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
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">Seeding Rate</h4>
                        <p className="text-white">{product.specifications.seedingRate}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">Germination</h4>
                        <p className="text-white">{product.specifications.germinationRate}</p>
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
              <span className="text-emerald-400">Farming Practices</span>
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
              <span className="text-emerald-400">Grow Better Forage?</span>
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
                variant="outline"
                size="lg"
                onClick={() => router.push("/contact")}
                // onClick={() => window.location.href = "/contact"}
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Contact us</span>
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
                  className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedProduct.color).badgeBg} ${getColorClasses(selectedProduct.color).badgeText} text-sm font-medium mb-2`}
                >
                  {selectedProduct.badge}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-white/80 text-lg">
                  {selectedProduct.subtitle}
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
                    <span
                      className={`text-3xl font-bold ${getColorClasses(selectedProduct.color).text}`}
                    >
                      {selectedProduct.price}
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
                          className={`h-5 w-5 ${getColorClasses(selectedProduct.color).text} mt-0.5 mr-2 flex-shrink-0`}
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
                    className={`${getColorClasses(selectedProduct.color).bg} ${getColorClasses(selectedProduct.color).hover} text-white`}
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
                  your region and farming conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
