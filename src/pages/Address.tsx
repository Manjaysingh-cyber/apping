"use client";

import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      phone: "9876543210",
      isDefault: true
    }
  ]);
  
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  });

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.address && newAddress.city && newAddress.state && newAddress.zip && newAddress.phone) {
      const address = {
        ...newAddress,
        id: addresses.length + 1,
        isDefault: false
      };
      setAddresses([...addresses, address]);
      setNewAddress({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
      });
      setShowAddForm(false);
    }
  };

  const handleContinue = () => {
    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Delivery Address</h1>
      </div>

      <div className="max-w-md mx-auto pb-24">
        {showAddForm ? (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Add New Address</h2>
            <div className="space-y-4">
              <Input 
                placeholder="Full Name" 
                value={newAddress.name}
                onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
              />
              <Textarea 
                placeholder="Address" 
                value={newAddress.address}
                onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
              />
              <Input 
                placeholder="City" 
                value={newAddress.city}
                onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
              />
              <Input 
                placeholder="State" 
                value={newAddress.state}
                onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
              />
              <Input 
                placeholder="ZIP Code" 
                value={newAddress.zip}
                onChange={(e) => setNewAddress({...newAddress, zip: e.target.value})}
              />
              <Input 
                placeholder="Phone Number" 
                value={newAddress.phone}
                onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
              />
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleAddAddress}
                >
                  Save Address
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="p-4">
              <Button 
                variant="outline" 
                className="w-full mb-6"
                onClick={() => setShowAddForm(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Address
              </Button>

              <h2 className="text-lg font-semibold mb-4">Select Delivery Address</h2>
              
              <div className="space-y-4">
                {addresses.map((address) => (
                  <Card 
                    key={address.id} 
                    className={`cursor-pointer ${selectedAddress === address.id ? "border-blue-500 border-2" : ""}`}
                    onClick={() => setSelectedAddress(address.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{address.name}</h3>
                        {address.isDefault && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Default</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{address.address}</p>
                      <p className="text-sm text-gray-600">{address.city}, {address.state} - {address.zip}</p>
                      <p className="text-sm text-gray-600 mt-1">Phone: {address.phone}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
              <div className="max-w-md mx-auto">
                <Button 
                  className="w-full py-6"
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Address;