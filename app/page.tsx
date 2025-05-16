"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  ShoppingCart,
  Heart,
  ChevronRight,
  Star,
  Leaf,
  Droplets,
  Sun,
  Wind,
  ArrowRight,
  Plus,
  Sparkles,
  Globe,
  BookOpen,
  Calendar,
  Award,
  MapPin,
  Phone,
  Mail,
  Building,
  Clock,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const floatingAnimation = `
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`



const SectionHeading = ({
  title,
  highlight,
  description,
}: {
  title: string
  highlight?: string
  description?: string
}) => {
  return (
    <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-24 mb-16">
      <div className="bg-gradient-to-r from-emerald-900/40 via-gray-900/60 to-emerald-900/40 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              {title} {highlight && <span className="text-emerald-400">{highlight}</span>}
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            {description && <p className="text-lg text-gray-300 max-w-2xl mx-auto">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const router=  useRouter()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const sustainabilityRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const certificatesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Add this useEffect for auto-advancing the testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Stamina Alfalfa Seeds",
      category: "herbs",
      description: "Aromatic purple leaves with a sweet, spicy flavor",
      price: 4.99,
      image: "/products/forage/STAMINA ALFALFA SEEDS POUCH.png",
      rating: 4.8,
      reviews: 124,
      tags: ["Culinary", "Aromatic", "Ornamental"],
      badge: "Bestseller",
      badgeColor: "amber",
    },
    {
      id: 2,
      name: "Fodder Beet",
      category: "vegetables",
      description: "One of the world's hottest peppers, extreme heat",
      price: 6.99,
      image: "/products/forage/FODDER BEET IMAGE.jpg",
      rating: 4.9,
      reviews: 89,
      tags: ["Spicy", "Rare", "Extreme Heat"],
      badge: "Hot",
      badgeColor: "red",
    },
    {
      id: 3,
      name: "Titan Mustard Seeds",
      category: "vegetables",
      description: "Deep purple-black carrots with cosmic appearance",
      price: 5.49,
      image: "/products/seeds/TITAN MUSTRAD SEEDS POUCH.png",
      rating: 4.7,
      reviews: 56,
      tags: ["Rare", "Heirloom", "Colorful"],
      badge: "Unique",
      badgeColor: "purple",
    },
    {
      id: 4,
      name: "Sunflower Seeds",
      category: "vegetables",
      description: "Extremely hot pepper, not for the faint of heart",
      price: 8.99,
      image: "/products/seeds/sunflowerseeds.jpg",
      rating: 4.9,
      reviews: 42,
      tags: ["Super Hot", "Rare", "Collector's Item"],
      badge: "Extreme",
      badgeColor: "red",
    },
  ]

  // Categories
  const categories = [
    {
      id: "forage",
      name: "Forage Field Crop Seeds",
      description: "High-quality seeds for pasture, hay, and silage production",
      icon: <Leaf className="h-6 w-6" />,
      image: "/products/forage/STAMINA ALFALFA SEEDS POUCH.png",
      color: "from-emerald-500 to-green-700",
      count: 6,
    },
    {
      id: "oil-seeds",
      name: "Oil Seeds",
      description: "Premium quality seeds for oil production",
      icon: <Sun className="h-6 w-6" />,
      image: "/products/seeds/TITAN MUSTRAD SEEDS POUCH.png",
      color: "from-amber-500 to-orange-700",
      count: 3,
    },
    {
      id: "vegetable-seeds",
      name: "Vegetable Seeds",
      description: "Fresh, high-yield vegetable seeds for commercial and home growers",
      icon: <Droplets className="h-6 w-6" />,
      image: "/products/seeds/sunflowerseeds.jpg",
      color: "from-rose-500 to-red-700",
      count: 5,
    },
    
  ]

  // Sustainability practices
  const sustainabilityPractices = [
    {
      icon: <Globe className="h-10 w-10 text-emerald-400" />,
      title: "Global Seed Conservation",
      description:
        "We partner with seed banks worldwide to preserve rare and endangered plant varieties for future generations.",
      image: "/slideshow-2.avif",
    },
    {
      icon: <Leaf className="h-10 w-10 text-emerald-400" />,
      title: "Organic Growing Methods",
      description:
        "All our seeds are grown using sustainable, organic practices without synthetic pesticides or fertilizers.",
      image: "/slideshow-3.jpg",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-emerald-400" />,
      title: "Educational Initiatives",
      description: "We provide resources and workshops to help gardeners learn sustainable growing practices.",
      image: "/ss3.avif",
    },
    {
      icon: <Calendar className="h-10 w-10 text-emerald-400" />,
      title: "Seasonal Seed Selection",
      description: "Our seed offerings follow natural growing cycles to promote biodiversity and ecological balance.",
      image: "/livestock.jpg",
    },
  ]

  // Certificates
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/placeholder.svg?height=200&width=200&text=ISO+9001",
    },
    {
      name: "Organic Certification",
      description: "Certified Organic Producer",
      image: "/placeholder.svg?height=200&width=200&text=Organic+Certified",
    },
    {
      name: "Non-GMO Project",
      description: "Verified Non-GMO Products",
      image: "/placeholder.svg?height=200&width=200&text=Non-GMO",
    },
    {
      name: "Fair Trade Certified",
      description: "Ethical Trading Practices",
      image: "/placeholder.svg?height=200&width=200&text=Fair+Trade",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Urban Gardener",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The rare herb seeds I purchased have transformed my urban garden into a fragrant paradise. The germination rate was impressive, and the flavors are unlike anything from the store.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chef & Grower",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a chef, I'm always looking for unique ingredients. The exotic vegetable seeds have allowed me to grow specialty produce that impresses my restaurant guests and can't be found elsewhere.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Botanical Enthusiast",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The collection of rare flower seeds exceeded my expectations. Not only was shipping fast, but the detailed growing instructions helped me successfully cultivate varieties I'd never grown before.",
      rating: 4,
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  // Helper function for badge colors
  const getBadgeColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-900/80 text-red-100 border-red-700"
      case "amber":
        return "bg-amber-900/80 text-amber-100 border-amber-700"
      case "green":
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700"
      case "blue":
        return "bg-blue-900/80 text-blue-100 border-blue-700"
      case "purple":
        return "bg-purple-900/80 text-purple-100 border-purple-700"
      case "violet":
        return "bg-violet-900/80 text-violet-100 border-violet-700"
      case "lime":
        return "bg-lime-900/80 text-lime-100 border-lime-700"
      default:
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700"
    }
  }

  // Add to cart function
  const addToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    setCartCount((prev) => prev + 1)
    // Here you would add actual cart functionality
  }

  // Add to wishlist function
  const addToWishlist = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    setWishlistCount((prev) => prev + 1)
    // Here you would add actual wishlist functionality
  }

  return (
    <>
      <style jsx global>{`
        ${floatingAnimation}
      `}</style>
      <main className="min-h-screen bg-gray-950 text-gray-100">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/slideshow-2.avif"
              alt="Dark garden background"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/8 0 via-gray-900/50 to-gray-950"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-emerald-500/30 blur-sm"
                  style={{
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Discover Rare & Exotic Seeds</span>
              </motion.div> */}

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mt-4 sm:mt-0 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
              >
                Grow Something Extraordinary
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10">
                Rare, exotic, and heirloom seeds for the adventurous gardener
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                // onClick={() => router.push("/products")}
                  onClick={() => {
// Scroll to categoriesRef
                    if (categoriesRef.current) {
                      categoriesRef.current.scrollIntoView({ behavior: "smooth" })
                    }


                  }}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
                >
                  <span>View Categories</span>
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
                >
                  Explore Categories
                </Button> */}
              </motion.div>

        
            </motion.div>
          </div>

          {/* Scroll indicator */}
       
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

          <div className="container mx-auto px-4 relative">
            <SectionHeading
              title="About"
              highlight="Us"
              description="Dedicated to providing high-quality agricultural seeds and solutions to farmers across Pakistan."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded with a vision to revolutionize agriculture in Pakistan, Affan Agro Seeds has been at the
                    forefront of providing premium quality seeds to farmers for over a decade.
                  </p>
                  <p>
                    We specialize in sourcing and developing high-yield, disease-resistant seed varieties that thrive in
                    local growing conditions, helping farmers maximize their productivity and profitability.
                  </p>
                  <p>
                    Our team of agricultural experts works closely with farmers, providing not just seeds but
                    comprehensive growing guidance and support throughout the cultivation process.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <h4 className="text-3xl font-bold text-emerald-400 mb-2">10+</h4>
                    <p className="text-gray-300">Years of Experience</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <h4 className="text-3xl font-bold text-emerald-400 mb-2">1000+</h4>
                    <p className="text-gray-300">Satisfied Farmers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-emerald-600/10 opacity-20 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Our+Team"
                    alt="Our Team"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-6"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Section */}
      

        {/* Categories Section */}
        <section ref={categoriesRef} className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

          <div className="container mx-auto px-4 relative">
            <SectionHeading
              title="Explore"
              highlight="Categories"
              description="Browse our extensive collection of specialty seeds organized by category to find exactly what you're looking for."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category, index) => (
                <motion.div key={category.id} variants={scaleIn} className="group">
                  <Link href={`/categories/${category.id}`} className="block">
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      {/* Background Image */}
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                      ></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="p-3 bg-black/30 backdrop-blur-sm rounded-full w-fit">{category.icon}</div>

                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                          <p className="text-white/80 mb-4 line-clamp-2">{category.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-black/30 text-white hover:bg-black/40">
                              {category.count} varieties
                            </Badge>
                            <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                              <ChevronRight className="h-5 w-5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      

        {/* Certificates Section */}
        <section ref={certificatesRef} className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
                Our <span className="text-emerald-400">Certifications</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
                We maintain the highest standards in the industry, backed by internationally recognized certifications.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-4 gap-8"
            >
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{certificate.name}</h3>
                  <p className="text-gray-400 text-sm">{certificate.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section style={{
          // Add bg image https://kohenoorint.com/wp-content/uploads/2017/12/colored-corrected.png
          backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/888/200/919/earth-black-background-world-map-the-continent-wallpaper-preview.jpg')",

        }} ref={locationRef} className="py-24 bg-gray-900 relative bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
                Our <span className="text-emerald-400">Location</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
              <motion.p variants={fadeInUp} className="text-lg text-gray-100 max-w-2xl mx-auto">
                Visit our office or get in touch with us. We're always ready to assist you with your agricultural needs.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                    <Building className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                    <p className="text-gray-300">
                      Affan Agro Seeds LLP
                      <br />
                      Office # 522-B, 10th Floor
                      <br />
                      Dawood Center, Auto Bhan Road
                      <br />
                      Hyderabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">0223411135</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@affanagroseeds.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                 
                
                </div>
              </motion.div>
{/* 
              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-emerald-600/10 opacity-20 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Find Us on the Map</h3>
                      <p className="text-gray-300 mb-6">
                        Located in the heart of Hyderabad, our office is easily accessible from all major routes.
                      </p>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-gray-900/20 to-gray-950/30"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-700/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-700/20 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4 relative">
            <SectionHeading
              title="What Our"
              highlight="Customers Say"
              description="Read what gardeners and plant enthusiasts have to say about their experience with our seeds."
            />

            <div className="max-w-4xl mx-auto relative">
              {/* Testimonial Slider */}
              <div className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-emerald-700/30 shadow-xl shadow-emerald-900/20">
                <div className="absolute -top-6 -left-6 text-emerald-400 opacity-60 text-8xl font-serif">"</div>

                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="mb-8 text-center">
                    <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
                      {testimonials[currentTestimonial].content}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < testimonials[currentTestimonial].rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-emerald-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </motion.div>

                <div className="absolute -bottom-6 -right-6 text-emerald-400 opacity-60 text-8xl font-serif">"</div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-emerald-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-gray-800/80 hover:bg-emerald-800/80 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-gray-800/80 hover:bg-emerald-800/80 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
       

        {/* Floating Cart Button */}
     
      </main>
    </>
  )
}





