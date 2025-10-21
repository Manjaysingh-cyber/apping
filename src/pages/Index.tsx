"use client";

import { useState } from "react";
import { Search, Home, ShoppingCart, Package, User, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock data for carousel
  const carouselSlides = [
    { id: 1, title: "New Arrivals", image: "/placeholder.svg?height=200&width=400" },
    { id: 2, title: "Summer Collection", image: "/placeholder.svg?height=200&width=400" },
    { id: 3, title: "Exclusive Deals", image: "/placeholder.svg?height=200&width=400" }
  ];

  // Mock data for products
  const weekendOffers = [
    { id: 1, title: "Casual Wear", subtitle: "Starting ₹999", discount: "30% OFF", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Footwear", subtitle: "Starting ₹1499", discount: "25% OFF", image: "/placeholder.svg?height=150&width=150" },
    { id: 3, title: "Electronics", subtitle: "Starting ₹2999", discount: "20% OFF", image: "/placeholder.svg?height=150&width=150" }
  ];

  const specialOffers = [
    { id: 1, title: "Home & Decor", subtitle: "Up to 50% off", tag: "SALE", tagColor: "bg-green-500", image: "/placeholder.svg?height=200&width=200" },
    { id: 2, title: "Beauty & Care", subtitle: "Starting ₹299", tag: "NEW", tagColor: "bg-purple-500", image: "/placeholder.svg?height=200&width=200" }
  ];

  const topProducts = [
    { id: 1, title: "Premium Wireless Headphones", price: "₹2,999", originalPrice: "₹4,999", discount: "40% off", rating: 4.2, image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Smart Fitness Watch", price: "₹3,499", originalPrice: "₹5,999", discount: "42% off", rating: 4.8, image: "/placeholder.svg?height=150&width=150" }
  ];

  const productsForYou = [
    { id: 1, title: "Latest Smartphone Pro", price: "₹24,999", originalPrice: "₹29,999", discount: "17% off", rating: 4.5, image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Gaming Laptop Ultra", price: "₹45,999", originalPrice: "₹55,999", discount: "18% off", rating: 4.7, image: "/placeholder.svg?height=150&width=150" }
  ];

  const newProducts = [
    { id: 1, title: "Earbuds", price: "₹1,999", originalPrice: "₹2,999", discount: "33% off", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Max", price: "₹1,499", originalPrice: "₹2,499", discount: "40% off", image: "/placeholder.svg?height=150&width=150" }
  ];

  const under500 = [
    { id: 1, title: "Phone Case Premium", price: "₹299", originalPrice: "₹499", discount: "40% off", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, title: "Fast Charging Cable", price: "₹199", originalPrice: "₹399", discount: "50% off", image: "/placeholder.svg?height=100&width=100" }
  ];

  const upTo50Off = [
    { id: 1, title: "Gaming Mouse Pro", price: "₹1,249", originalPrice: "₹2,499", discount: "50% off", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Mechanical Keyboard", price: "₹2,199", originalPrice: "₹3,999", discount: "45% off", image: "/placeholder.svg?height=150&width=150" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top Search Bar */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="relative max-w-md mx-auto px-4 py-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselSlides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 relative">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-3 space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Weekend Offers */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Weekend Offers</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {weekendOffers.map((offer) => (
            <Card key={offer.id} className="flex-shrink-0 w-64 relative">
              <Badge className="absolute top-2 left-2 bg-red-500">{offer.discount}</Badge>
              <CardContent className="p-4">
                <img src={offer.image} alt={offer.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold">{offer.title}</h3>
                <p className="text-sm text-gray-500">{offer.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Special Offers</h2>
        <div className="grid grid-cols-2 gap-4">
          {specialOffers.map((offer) => (
            <Card key={offer.id} className="relative">
              <Badge className={`absolute top-2 right-2 ${offer.tagColor}`}>{offer.tag}</Badge>
              <CardContent className="p-4">
                <img src={offer.image} alt={offer.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold">{offer.title}</h3>
                <p className="text-sm text-gray-500">{offer.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Top Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {topProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                <Badge className="mt-1 bg-green-500 text-xs">{product.discount}</Badge>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products For You */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Products For You</h2>
        <div className="grid grid-cols-2 gap-4">
          {productsForYou.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                <Badge className="mt-1 bg-green-500 text-xs">{product.discount}</Badge>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* New Products */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">New Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {newProducts.map((product) => (
            <Card key={product.id} className="relative">
              <Badge className="absolute top-2 left-2 bg-blue-500">NEW</Badge>
              <CardContent className="p-4">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                <Badge className="mt-1 bg-green-500 text-xs">{product.discount}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Under ₹500 */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Under ₹500</h2>
        <div className="grid grid-cols-2 gap-4">
          {under500.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img src={product.image} alt={product.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                <Badge className="mt-1 bg-green-500 text-xs">{product.discount}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Up to 50% Off */}
      <section className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Up to 50% Off</h2>
        <div className="grid grid-cols-2 gap-4">
          {upTo50Off.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                <Badge className="mt-1 bg-green-500 text-xs">{product.discount}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto grid grid-cols-4 py-3">
          <Button variant="ghost" className="flex flex-col items-center justify-center h-full">
            <Home className="h-5 w-5 text-blue-500" />
            <span className="text-xs mt-1 text-blue-500">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-5 w-5 text-gray-500" />
            <span className="text-xs mt-1 text-gray-500">Collection</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center h-full">
            <Package className="h-5 w-5 text-gray-500" />
            <span className="text-xs mt-1 text-gray-500">Order</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center h-full">
            <User className="h-5 w-5 text-gray-500" />
            <span className="text-xs mt-1 text-gray-500">Profile</span>
          </Button>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;