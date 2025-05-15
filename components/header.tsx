"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Leaf, Droplets, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "../hooks/use-media-query"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Categories for the tooltip
  const categories = [
    {
      id: "forage",
      name: "Forage Seeds",
      description: "High-quality seeds for pasture, hay, and silage production",
      href: "/categories/forage",
      icon: <Leaf className="h-5 w-5 text-emerald-400" />,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      id: "oil-seeds",
      name: "Oil Seeds",
      description: "Premium quality seeds for oil production",
      href: "/categories/oil-seeds",
      icon: <Droplets className="h-5 w-5 text-amber-400" />,
      color: "from-amber-600 to-amber-800",
    },
    {
      id: "vegetable-seeds",
      name: "Vegetable Seeds",
      description: "Fresh, high-yield vegetable seeds for commercial and home growers",
      href: "/categories/vegetable-seeds",
      icon: <Sun className="h-5 w-5 text-green-400" />,
      color: "from-green-600 to-green-800",
    },
  ]

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          <div className="relative h-10 w-40">
            <Image src="/logo.svg" alt="SeedVault Logo" width={160} height={40} className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="relative" ref={tooltipRef}>
            <button
              className={cn(
                "flex items-center text-base font-medium transition-colors hover:text-emerald-400 px-4 py-2 rounded-full",
                showTooltip ? "text-emerald-400 bg-gray-800" : "text-gray-200",
              )}
              onMouseEnter={() => setShowTooltip(true)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              Products
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", showTooltip ? "rotate-180" : "")}
              />
            </button>

            {/* Desktop Tooltip */}
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 mt-4 w-80 rounded-xl bg-gray-800 border border-gray-700 shadow-xl overflow-hidden transition-all duration-300 z-50",
                showTooltip
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none",
              )}
            >
              <div className="p-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="block p-3 hover:bg-gray-700 rounded-lg transition-colors mb-1 group"
                    onClick={() => setShowTooltip(false)}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} mr-3`}>{category.icon}</div>
                      <div>
                        <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                          {category.name}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="bg-gray-900 p-3 text-center">
                <Link
                  href="/products"
                  className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
                  onClick={() => setShowTooltip(false)}
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className={cn(
              "text-base font-medium transition-colors hover:text-emerald-400",
              pathname === "/about" ? "text-emerald-400" : "text-gray-200",
            )}
          >
            About Us
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full border-gray-700 hover:text-white hover:bg-gray-800 hover:border-gray-600",
                pathname === "/contact" ? "text-emerald-400 border-emerald-700" : "text-gray-200",
              )}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 text-gray-200 hover:text-emerald-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-gray-950/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 flex flex-col",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="h-20" aria-hidden="true"></div>
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 text-center">
              {/* Explore Products Accordion */}
              <div className="border-b border-gray-800 pb-6">
                <button
                  className="flex items-center justify-between w-full text-xl font-medium text-gray-200 hover:text-emerald-400 transition-colors py-2"
                  onClick={() => toggleCategory("explore")}
                >
                  <span>Explore Products</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      expandedCategory === "explore" ? "rotate-180" : "",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "mt-4 space-y-4 transition-all duration-300 overflow-hidden",
                    expandedCategory === "explore" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} mr-4`}>{category.icon}</div>
                      <div className="text-left">
                        <div className="font-medium text-white">{category.name}</div>
                        <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                      </div>
                    </Link>
                  ))}

                  <Link
                    href="/products"
                    className="block text-center py-3 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              <Link
                href="/about"
                className={cn(
                  "text-xl font-medium transition-colors hover:text-emerald-400 py-2",
                  pathname === "/about" ? "text-emerald-400" : "text-gray-200",
                )}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "text-xl font-medium transition-colors hover:text-emerald-400 py-2",
                  pathname === "/contact" ? "text-emerald-400" : "text-gray-200",
                )}
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-auto pt-8">
              <Button
                className="w-full py-6 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
