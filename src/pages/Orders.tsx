"use client";

import { useState } from "react";
import { ArrowLeft, Package, Truck, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      id: "ORD-789456123",
      date: "June 15, 2023",
      total: 5497,
      status: "delivered",
      items: 2,
      statusText: "Delivered on June 18, 2023"
    },
    {
      id: "ORD-789456124",
      date: "June 10, 2023",
      total: 2999,
      status: "shipped",
      items: 1,
      statusText: "Shipped on June 12, 2023"
    },
    {
      id: "ORD-789456125",
      date: "June 5, 2023",
      total: 8999,
      status: "processing",
      items: 3,
      statusText: "Processing"
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "shipped":
        return <Truck className="h-5 w-5 text-blue-500" />;
      case "processing":
        return <Package className="h-5 w-5 text-yellow-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-500";
      case "shipped":
        return "text-blue-500";
      case "processing":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  const handleOrderAction = (orderId: string, action: string) => {
    if (action === "cancel") {
      // Handle cancel order
      console.log("Cancel order:", orderId);
    } else if (action === "return") {
      // Handle return order
      console.log("Return order:", orderId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">My Orders</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Package className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">No orders yet</p>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className={`flex items-center ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 text-sm capitalize">{order.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm text-gray-600">{order.items} items</p>
                    <p className="font-semibold">₹{order.total}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{order.statusText}</p>
                  
                  <div className="flex space-x-2">
                    {order.status === "delivered" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleOrderAction(order.id, "return")}
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Return
                      </Button>
                    )}
                    {(order.status === "processing" || order.status === "shipped") && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleOrderAction(order.id, "cancel")}
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Cancel
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/order-details/${order.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;