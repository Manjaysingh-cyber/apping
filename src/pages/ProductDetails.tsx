"use client";

import { useState } from "react";
import { Heart, Star, ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.5,
    reviewCount: 128,
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400"
    ],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.2",
      "Voice assistant support"
    ]
  };

  const handleBuyNow = () => {
    navigate("/address");
  };

  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log("Added to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Product Details</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* Product Images */}
        <div className="relative">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-80 object-cover"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
          </Button>
        </div>

        {/* Product Info */}
        <div className="p-4 bg-white">
          <h1 className="text-xl font-bold">{product.title}</h1>
          
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center mt-3">
            <span className="text-2xl font-bold">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
            <Badge className="ml-2 bg-green-500">{product.discount}% OFF</Badge>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">{product.description}</p>
          
          <div className="mt-4">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="mt-2 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quantity Selector */}
        <Card className="mt-4 mx-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 text-lg">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button 
              className="flex items-center justify-center"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;