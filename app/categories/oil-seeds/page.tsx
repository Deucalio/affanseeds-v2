"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Heart, Eye, Shield, Droplets, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumb from "@/components/breadcrumb"

export default function OilSeedsPage() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const modalRef = useRef(null)

  // Products data
  const products = [
    {
      id: 1,
      name: "Titan Mustard Seeds",
      description:
        "High-oil content mustard seeds ideal for oil production and condiment manufacturing. Known for their robust flavor and excellent yield.",
      price: 550,
      unit: "500g packet",
      image: "/placeholder.svg?height=400&width=400&text=Titan+Mustard+Seeds",
      badge: "Premium",
      features: ["High oil content (35-42%)", "Disease resistant", "Drought tolerant", "Early maturing variety"],
    },
    {
      id: 2,
      name: "Sesame Seeds",
      description:
        "Premium quality sesame seeds with exceptional oil content and flavor. Perfect for oil extraction and culinary applications.",
      price: 650,
      unit: "500g packet",
      image: "/placeholder.svg?height=400&width=400&text=Sesame+Seeds",
      badge: "Organic",
      features: [
        "High oil yield (48-52%)",
        "Rich in antioxidants",
        "Heat and drought tolerant",
        "Non-shattering variety",
      ],
    },
    {
      id: 3,
      name: "Sunflower Seeds",
      description:
        "High-yielding sunflower seeds bred specifically for oil production. Features large heads with excellent seed-to-oil ratio.",
      price: 600,
      unit: "500g packet",
      image: "/placeholder.svg?height=400&width=400&text=Sunflower+Seeds",
      badge: "Bestseller",
      features: ["Oil content up to 45%", "Disease resistant", "Large seed heads", "Uniform maturity"],
    },
  ]

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Open product modal
  const openProductModal = (product) => {
    setActiveProduct(product)
    setShowModal(true)
    document.body.style.overflow = "hidden"
  }

  // Close product modal
  const closeProductModal = () => {
    setShowModal(false)
    document.body.style.overflow = "unset"
  }

  return (
    <main className="pt-16 bg-gray-950 text-gray-200 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative bg-amber-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Oil Seeds</h1>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              Premium quality oil seeds with high oil content and excellent yield potential. Our seeds are selected for
              optimal performance in various growing conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white hover:bg-gray-100 text-amber-800 rounded-full px-6 py-5 text-base shadow-lg shadow-amber-900/30 border-0">
                View All Products
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-5 text-base backdrop-blur-sm"
              >
                Growing Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-950">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Our Oil Seed Collection</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our premium selection of oil seeds, carefully selected for optimal oil content, yield, and
                adaptability to various growing conditions.
              </p>
            </div>

            <div className="space-y-24">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center`}
                >
                  <div className="w-full md:w-1/2 relative">
                    <div
                      className={`absolute -inset-4 rounded-full bg-gradient-to-br ${
                        index % 2 === 0 ? "from-amber-600/20 to-yellow-600/10" : "from-yellow-600/20 to-amber-600/10"
                      } opacity-70 blur-2xl`}
                    ></div>
                    <div className="relative aspect-square overflow-hidden rounded-full border-8 border-gray-800">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge
                          className={`absolute top-6 right-6 ${
                            product.badge === "Bestseller"
                              ? "bg-amber-600"
                              : product.badge === "Organic"
                                ? "bg-emerald-600"
                                : product.badge === "Premium"
                                  ? "bg-purple-600"
                                  : "bg-blue-600"
                          } text-white border-0 px-3 py-1.5 text-sm font-medium`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">{product.name}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <div className="flex items-center mb-6">
                      <div className="text-2xl font-bold text-white mr-2">Rs. {product.price}</div>
                      <div className="text-sm text-gray-400">per {product.unit}</div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-medium text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 bg-gray-800 rounded-full mr-3 mt-0.5">
                              <Droplets className="h-4 w-4 text-amber-400" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white rounded-full">
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:text-white rounded-full"
                        onClick={() => openProductModal(product)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oil Production Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Oil Production Benefits</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our oil seeds are specifically bred and selected to maximize oil production while maintaining
                sustainability and quality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Droplets className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">High Oil Content</h3>
                <p className="text-gray-300">
                  Our oil seed varieties are selected for their exceptional oil content, providing better extraction
                  efficiency and higher yields per hectare.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-gray-300">
                  Every batch of our oil seeds undergoes rigorous quality testing to ensure purity, viability, and
                  genetic integrity for consistent results.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Sun className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Climate Adaptability</h3>
                <p className="text-gray-300">
                  Our oil seed varieties are bred to thrive in Pakistan's diverse growing conditions, from arid regions
                  to irrigated farmlands.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">Oil Seed Farming Benefits</h3>
                  <p className="text-gray-300 mb-6">
                    Oil seed crops offer numerous advantages for farmers looking to diversify their production and
                    increase profitability. These crops can be integrated into existing rotation systems and provide
                    multiple revenue streams.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="p-1.5 bg-amber-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-amber-400" />
                      </div>
                      <span className="text-gray-300">
                        Multiple market opportunities including oil production, animal feed, and export
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1.5 bg-amber-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-amber-400" />
                      </div>
                      <span className="text-gray-300">
                        Excellent rotation crops that break disease cycles and improve soil health
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1.5 bg-amber-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-amber-400" />
                      </div>
                      <span className="text-gray-300">Lower water requirements compared to many traditional crops</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Oil+Seed+Farming"
                    alt="Oil Seed Farming"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Oil Seed Production Today
            </h2>
            <p className="text-lg text-amber-100 mb-8">
              Whether you're a commercial farmer or looking to diversify your crops, our premium oil seeds will help you
              maximize your yields and profits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white hover:bg-gray-100 text-amber-800 rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-900/30 border-0">
                Shop All Seeds
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
              >
                Request Bulk Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {showModal && activeProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center z-10">
              <h3 className="font-serif text-xl font-bold text-white">{activeProduct.name}</h3>
              <button
                onClick={closeProductModal}
                className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={activeProduct.image || "/placeholder.svg"}
                    alt={activeProduct.name}
                    fill
                    className="object-cover"
                  />
                  {activeProduct.badge && (
                    <Badge
                      className={`absolute top-4 left-4 ${
                        activeProduct.badge === "Bestseller"
                          ? "bg-amber-600"
                          : activeProduct.badge === "Organic"
                            ? "bg-emerald-600"
                            : activeProduct.badge === "Premium"
                              ? "bg-purple-600"
                              : "bg-blue-600"
                      } text-white border-0 px-3 py-1.5 text-sm font-medium`}
                    >
                      {activeProduct.badge}
                    </Badge>
                  )}
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-white mr-2">Rs. {activeProduct.price}</div>
                    <div className="text-sm text-gray-400">per {activeProduct.unit}</div>
                  </div>
                  <p className="text-gray-300 mb-6">{activeProduct.description}</p>

                  <Tabs defaultValue="specs" className="w-full mb-6">
                    <TabsList className="grid grid-cols-3 bg-gray-800">
                      <TabsTrigger
                        value="specs"
                        className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
                      >
                        Specifications
                      </TabsTrigger>
                      <TabsTrigger
                        value="growing"
                        className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
                      >
                        Growing Conditions
                      </TabsTrigger>
                      <TabsTrigger
                        value="features"
                        className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
                      >
                        Features
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="specs" className="mt-4 text-gray-300 space-y-2">
                      <p>
                        <strong>Package Size:</strong> {activeProduct.unit}
                      </p>
                      <p>
                        <strong>Seeds per Packet:</strong> Approximately 1000-1500 seeds
                      </p>
                      <p>
                        <strong>Germination Rate:</strong> 90-95%
                      </p>
                      <p>
                        <strong>Days to Maturity:</strong> 90-120 days (varies by variety)
                      </p>
                    </TabsContent>
                    <TabsContent value="growing" className="mt-4 text-gray-300 space-y-2">
                      <p>
                        <strong>Sunlight:</strong> Full sun (6-8 hours daily)
                      </p>
                      <p>
                        <strong>Soil:</strong> Well-draining, moderate fertility
                      </p>
                      <p>
                        <strong>Watering:</strong> Moderate, drought tolerant after establishment
                      </p>
                      <p>
                        <strong>Spacing:</strong> 30-45 cm between plants (varies by variety)
                      </p>
                    </TabsContent>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {activeProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 bg-gray-800 rounded-full mr-3 mt-0.5">
                              <Droplets className="h-4 w-4 text-amber-400" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white rounded-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-amber-600 text-white shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowRight className="h-5 w-5 rotate-270" />
      </button>
    </main>
  )
}
