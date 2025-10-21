"use client";

import { useState } from "react";
import { ArrowLeft, Filter, Grid, List, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  // Mock product data
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 3499,
      originalPrice: 5999,
      discount: 42,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true
    },
    {
      id: 3,
      title: "Latest Smartphone Pro",
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true
    },
    {
      id: 4,
      title: "Gaming Laptop Ultra",
      price: 45999,
      originalPrice: 55999,
      discount: 18,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      inStock: false
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true
    },
    {
      id: 6,
      title: "Wireless Earbuds",
      price: 1499,
      originalPrice: 2499,
      discount: 40,
      rating: 4.0,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true
    }
  ];

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Electronics Collection</h1>
        <div className="ml-auto flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
            {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Sort Options */}
      <div className="max-w-md mx-auto px-4 py-3 bg-white">
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {["Featured", "Price: Low to High", "Price: High to Low", "Top Rated", "Newest"].map((option) => (
            <Button
              key={option}
              variant={sortBy === option.toLowerCase().split(":")[0] ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
              onClick={() => setSortBy(option.toLowerCase().split(":")[0])}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* Product List */}
        <div className={`p-4 ${viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}`}>
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`cursor-pointer ${viewMode === "list" ? "flex" : ""}`}
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className={`p-4 ${viewMode === "list" ? "flex" : ""}`}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className={`${viewMode === "grid" ? "w-full h-40 object-cover rounded-lg mb-2" : "w-24 h-24 object-cover rounded-lg mr-4"}`}
                />
                <div className={`${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className={`font-semibold ${viewMode === "list" ? "text-sm" : "text-sm mb-1"}`}>{product.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="font-bold">₹{product.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                  </div>
                  <Badge className="mt-1 bg-green-500 text-xs">{product.discount}% off</Badge>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  {!product.inStock && (
                    <Badge variant="destructive" className="mt-2">Out of Stock</Badge>
                  )}
                </div>
                <div className="flex flex-col ml-auto">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="mt-2">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;