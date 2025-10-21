"use client";

import { useState } from "react";
import { ArrowLeft, Tag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Mock order data
  const orderItems = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 2999,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 3499,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscountApplied(true);
      setDiscountAmount(500);
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Order Summary</h1>
      </div>

      <div className="max-w-md mx-auto pb-24">
        {/* Order Items */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Order Items</h2>
          <div className="space-y-3">
            {orderItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-3 flex">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-3 flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    <p className="font-semibold mt-1">₹{item.price * item.quantity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coupon Section */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              Apply Coupon
            </h3>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter coupon code" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button onClick={handleApplyCoupon}>Apply</Button>
            </div>
            {discountApplied && (
              <div className="mt-3 p-2 bg-green-50 text-green-700 rounded text-sm flex items-center">
                <Info className="h-4 w-4 mr-1" />
                Coupon applied! You saved ₹{discountAmount}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h2 className="font-semibold mb-3">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-500">-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proceed to Payment Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <Button 
              className="w-full py-6"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;