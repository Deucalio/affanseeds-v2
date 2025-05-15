"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Heart, Eye, Leaf, Shield, Droplets, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"

export default function VegetableSeedsPage() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const modalRef = useRef(null)

  // Products data
  const products = [
    {
      id: 1,
      name: "Vegetables Seeds",
      description:
        "A premium mix of vegetable seeds for home gardens, including a variety of popular vegetables for a balanced harvest.",
      price: 450,
      unit: "100g packet",
      image: "/placeholder.svg?height=400&width=400&text=Vegetables+Seeds",
      badge: "Bestseller",
      features: [
        "Contains 10+ vegetable varieties",
        "High germination rate",
        "Disease resistant",
        "Suitable for all growing zones",
      ],
    },
    {
      id: 2,
      name: "Okra Seeds",
      description:
        "High-yield okra seeds that produce tender, flavorful pods. Ideal for hot climates and resistant to common pests.",
      price: 350,
      unit: "50g packet",
      image: "/placeholder.svg?height=400&width=400&text=Okra+Seeds",
      badge: "Organic",
      features: ["Early maturing variety", "Heat tolerant", "High yielding", "Spineless pods for easy harvesting"],
    },
    {
      id: 3,
      name: "Tomato Seeds",
      description:
        "Premium tomato seeds that produce juicy, flavorful fruits. Varieties selected for disease resistance and productivity.",
      price: 400,
      unit: "25g packet",
      image: "/placeholder.svg?height=400&width=400&text=Tomato+Seeds",
      badge: "Premium",
      features: [
        "Disease resistant varieties",
        "High yielding",
        "Extended harvest period",
        "Suitable for container growing",
      ],
    },
    {
      id: 4,
      name: "Hot Pepper Seeds",
      description:
        "Spicy hot pepper seeds for growing various heat levels of peppers. Perfect for adding flavor to your dishes.",
      price: 380,
      unit: "20g packet",
      image: "/placeholder.svg?height=400&width=400&text=Hot+Pepper+Seeds",
      badge: "Spicy",
      features: [
        "Multiple heat levels available",
        "High vitamin content",
        "Compact growing habit",
        "Suitable for containers and gardens",
      ],
    },
    {
      id: 5,
      name: "Onion Seeds",
      description:
        "Quality onion seeds for growing flavorful bulbs. Selected for storage quality and disease resistance.",
      price: 320,
      unit: "30g packet",
      image: "/placeholder.svg?height=400&width=400&text=Onion+Seeds",
      badge: "Long-storing",
      features: ["Long storage life", "Disease resistant", "High yield potential", "Adaptable to various soils"],
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
      <section className="relative bg-green-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Vegetable Seeds</h1>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-emerald-100 mb-8">
              Premium quality vegetable seeds for commercial farmers and home gardeners. Our seeds are selected for
              flavor, yield, and disease resistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white hover:bg-gray-100 text-green-800 rounded-full px-6 py-5 text-base shadow-lg shadow-green-900/30 border-0">
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
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Our Vegetable Seed Collection</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our premium selection of vegetable seeds, carefully selected for optimal growth, flavor, and
                yield in various growing conditions.
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
                        index % 2 === 0 ? "from-emerald-600/20 to-green-600/10" : "from-amber-600/20 to-yellow-600/10"
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
                                  : product.badge === "Spicy"
                                    ? "bg-red-600"
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
                              <Leaf className="h-4 w-4 text-emerald-400" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
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

      {/* Sustainable Vegetable Growing Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Sustainable Vegetable Growing</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're committed to sustainable farming practices that protect our environment while producing
                high-quality vegetable seeds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Leaf className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Organic Cultivation</h3>
                <p className="text-gray-300">
                  Our vegetable seeds are grown using organic farming methods, free from synthetic pesticides and
                  fertilizers, ensuring healthier plants and soil.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Non-GMO Promise</h3>
                <p className="text-gray-300">
                  We're committed to providing only non-GMO vegetable seeds, preserving natural biodiversity and
                  supporting traditional farming practices.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Sun className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Heirloom Preservation</h3>
                <p className="text-gray-300">
                  We work to preserve heirloom vegetable varieties, maintaining genetic diversity and protecting
                  traditional flavors for future generations.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">Our Sustainable Practices</h3>
                  <p className="text-gray-300 mb-6">
                    At Affan Agro Seeds, sustainability isn't just a buzzword—it's at the core of everything we do. Our
                    vegetable seeds are produced using methods that respect the environment and support local
                    communities.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="p-1.5 bg-emerald-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-gray-300">
                        Water conservation through drip irrigation and rainwater harvesting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1.5 bg-emerald-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-gray-300">
                        Natural pest management using beneficial insects and companion planting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1.5 bg-emerald-900 rounded-full mr-3 mt-0.5">
                        <Droplets className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-gray-300">
                        Soil health maintenance through crop rotation and organic matter addition
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Sustainable+Farming"
                    alt="Sustainable Farming Practices"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Guide Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Vegetable Growing Guide</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Follow our expert tips to get the most from your vegetable seeds and enjoy a bountiful harvest.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <Tabs defaultValue="planting" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8 bg-gray-900">
                  <TabsTrigger
                    value="planting"
                    className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                  >
                    Planting
                  </TabsTrigger>
                  <TabsTrigger
                    value="care"
                    className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                  >
                    Plant Care
                  </TabsTrigger>
                  <TabsTrigger
                    value="harvesting"
                    className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                  >
                    Harvesting
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="planting" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-6">Planting Your Vegetable Seeds</h3>
                      <p className="text-gray-300 mb-6">
                        Proper planting is the foundation for a successful vegetable garden. Follow these guidelines to
                        give your seeds the best start.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Soil Preparation
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Prepare well-draining soil rich in organic matter. Most vegetables prefer a slightly acidic
                            to neutral pH (6.0-7.0). Add compost or well-rotted manure to improve soil structure and
                            fertility.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Planting Depth and Spacing
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Follow the recommended planting depth on the seed packet, generally 2-3 times the diameter
                            of the seed. Proper spacing ensures adequate airflow and reduces competition for nutrients
                            and water.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Watering Techniques
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Keep soil consistently moist but not waterlogged during germination. Water gently to avoid
                            displacing seeds. Consider using a fine mist sprayer for delicate seedlings.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Planting+Guide"
                        alt="Vegetable Planting Guide"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="care" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-6">Caring for Your Vegetables</h3>
                      <p className="text-gray-300 mb-6">
                        Proper care throughout the growing season ensures healthy plants and maximum yields. Follow
                        these essential care tips.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Watering Schedule
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Most vegetables need 1-1.5 inches of water per week. Water deeply and less frequently to
                            encourage deep root growth. Water early in the morning to reduce evaporation and fungal
                            issues.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">Fertilizing</AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Apply balanced organic fertilizer according to plant needs. Heavy feeders like tomatoes and
                            peppers benefit from regular feeding, while root vegetables need less nitrogen to prevent
                            excessive leaf growth.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Pest Management
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Monitor plants regularly for signs of pests. Use organic methods like neem oil, insecticidal
                            soap, or beneficial insects before resorting to chemical controls. Maintain biodiversity in
                            your garden to keep pest populations in check.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Plant+Care"
                        alt="Vegetable Plant Care"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="harvesting" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-6">Harvesting and Storage</h3>
                      <p className="text-gray-300 mb-6">
                        Proper harvesting techniques and storage methods help preserve flavor and extend the life of
                        your vegetables.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            When to Harvest
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Harvest most vegetables when they reach their peak size but are still tender. Morning
                            harvesting is ideal when plants are hydrated and temperatures are cool. Regular harvesting
                            encourages continued production.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Harvesting Techniques
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Use clean, sharp tools to minimize damage to plants. Cut rather than pull when appropriate.
                            Handle produce gently to prevent bruising and damage that can lead to spoilage.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-emerald-400">
                            Storage Methods
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            Different vegetables require different storage conditions. Root vegetables prefer cool,
                            humid conditions, while tomatoes store best at room temperature. Leafy greens need cold,
                            humid storage to maintain freshness.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Harvesting+Guide"
                        alt="Vegetable Harvesting Guide"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Vegetable Garden Today
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Whether you're a commercial farmer or home gardener, our premium vegetable seeds will help you grow a
              bountiful, flavorful harvest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white hover:bg-gray-100 text-green-800 rounded-full px-8 py-6 text-lg shadow-lg shadow-green-900/30 border-0">
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
                              : activeProduct.badge === "Spicy"
                                ? "bg-red-600"
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
                        className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                      >
                        Specifications
                      </TabsTrigger>
                      <TabsTrigger
                        value="growing"
                        className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                      >
                        Growing Conditions
                      </TabsTrigger>
                      <TabsTrigger
                        value="features"
                        className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white"
                      >
                        Features
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="specs" className="mt-4 text-gray-300 space-y-2">
                      <p>
                        <strong>Package Size:</strong> {activeProduct.unit}
                      </p>
                      <p>
                        <strong>Seeds per Packet:</strong> Approximately 100-150 seeds
                      </p>
                      <p>
                        <strong>Germination Rate:</strong> 85-95%
                      </p>
                      <p>
                        <strong>Days to Maturity:</strong> 60-90 days (varies by variety)
                      </p>
                    </TabsContent>
                    <TabsContent value="growing" className="mt-4 text-gray-300 space-y-2">
                      <p>
                        <strong>Sunlight:</strong> Full sun (6-8 hours daily)
                      </p>
                      <p>
                        <strong>Soil:</strong> Well-draining, rich in organic matter
                      </p>
                      <p>
                        <strong>Watering:</strong> Consistent moisture, avoid waterlogging
                      </p>
                      <p>
                        <strong>Spacing:</strong> 12-24 inches between plants (varies by variety)
                      </p>
                    </TabsContent>
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {activeProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-1 bg-gray-800 rounded-full mr-3 mt-0.5">
                              <Leaf className="h-4 w-4 text-emerald-400" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
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
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowRight className="h-5 w-5 rotate-270" />
      </button>
    </main>
  )
}
