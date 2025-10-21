"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleViewOrders = () => {
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        
        <div className="bg-white rounded-lg p-4 mb-6 text-left">
          <h2 className="font-semibold mb-2">Order Details</h2>
          <p className="text-sm text-gray-600">Order ID: #ORD-789456123</p>
          <p className="text-sm text-gray-600">Date: June 15, 2023</p>
          <p className="text-sm text-gray-600">Total: ₹5,497</p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Button 
            className="w-full py-6"
            onClick={handleViewOrders}
          >
            View Order Status
          </Button>
          <Button 
            variant="outline" 
            className="w-full py-6"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;