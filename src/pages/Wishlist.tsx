"use client";

import { useState } from "react";
import { ArrowLeft, Heart, ShoppingCart, Share2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      image: "/placeholder.svg?height=150&width=150",
      inStock: true
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 3499,
      originalPrice: 5999,
      discount: 42,
      image: "/placeholder.svg?height=150&width=150",
      inStock: true
    },
    {
      id: 3,
      title: "Gaming Laptop Ultra",
      price: 45999,
      originalPrice: 55999,
      discount: 18,
      image: "/placeholder.svg?height=150&width=150",
      inStock: false
    }
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const moveToCart = () => {
    // Move selected items to cart logic
    console.log("Moving to cart:", selectedItems);
    // Remove moved items from wishlist
    setWishlistItems(wishlistItems.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const shareWishlist = () => {
    // Share wishlist logic
    console.log("Sharing wishlist");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Wishlist</h1>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={shareWishlist}>
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-md mx-auto pb-24">
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Heart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">Your wishlist is empty</p>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </div>
        ) : (
          <>
            {/* Selected Items Bar */}
            {selectedItems.length > 0 && (
              <div className="sticky top-16 z-10 bg-white p-3 border-b border-gray-200 flex justify-between items-center">
                <span>{selectedItems.length} selected</span>
                <Button onClick={moveToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Move to Cart
                </Button>
              </div>
            )}

            {/* Wishlist Items */}
            <div className="p-4 space-y-4">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="relative">
                  <CardContent className="p-4 flex">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                      className="mr-3 mt-1"
                    />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="font-bold">₹{item.price}</span>
                        <span className="text-xs text-gray-500 line-through ml-2">₹{item.originalPrice}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-green-500 text-sm">{item.discount}% off</span>
                      </div>
                      {!item.inStock && (
                        <div className="flex items-center mt-2 text-orange-500">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Low stock</span>
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;