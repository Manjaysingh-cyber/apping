"use client";

import { useState } from "react";
import { ArrowLeft, Package, Truck, CheckCircle, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock order data
  const order = {
    id: id || "ORD-789456123",
    date: "June 15, 2023",
    total: 5497,
    status: "delivered",
    items: [
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
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      phone: "9876543210"
    },
    paymentMethod: "Credit Card",
    tracking: [
      { status: "Order Placed", date: "June 15, 2023", time: "10:30 AM", completed: true },
      { status: "Processing", date: "June 15, 2023", time: "2:15 PM", completed: true },
      { status: "Shipped", date: "June 16, 2023", time: "9:00 AM", completed: true },
      { status: "Out for Delivery", date: "June 18, 2023", time: "8:30 AM", completed: true },
      { status: "Delivered", date: "June 18, 2023", time: "12:45 PM", completed: true }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Order Details</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* Order Status */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="flex items-center text-green-500">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span className="capitalize">{order.status}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Progress */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Tracking Progress</h3>
            <div className="space-y-4">
              {order.tracking.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {step.completed && <CheckCircle className="h-4 w-4 text-white" />}
                    </div>
                    {index < order.tracking.length - 1 && (
                      <div className={`w-0.5 h-10 my-1 ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>{step.status}</h4>
                    <p className="text-sm text-gray-600">{step.date} at {step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Items */}
        <div className="p-4">
          <h3 className="font-semibold mb-3">Order Items</h3>
          <div className="space-y-3">
            {order.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-3 flex">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    <p className="font-semibold mt-1">₹{item.price * item.quantity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{order.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-500">-₹500</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Shipping Address
            </h3>
            <div className="text-sm">
              <p className="font-medium">{order.shippingAddress.name}</p>
              <p className="text-gray-600">{order.shippingAddress.address}</p>
              <p className="text-gray-600">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.zip}</p>
              <p className="text-gray-600 mt-1">Phone: {order.shippingAddress.phone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment Method
            </h3>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              <div className="ml-3">
                <p className="font-medium">{order.paymentMethod}</p>
                <p className="text-sm text-gray-600">**** **** **** 1234</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">Download Invoice</Button>
            <Button>Buy Again</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;