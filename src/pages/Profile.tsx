"use client";

import { useState } from "react";
import { ArrowLeft, User, Package, Heart, Star, Settings, LogOut, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    memberSince: "January 2022"
  });

  const menuItems = [
    { id: 1, title: "My Orders", icon: Package, action: () => navigate("/orders") },
    { id: 2, title: "Wishlist", icon: Heart, action: () => navigate("/wishlist") },
    { id: 3, title: "Reviews", icon: Star, action: () => console.log("Reviews") },
    { id: 4, title: "Settings", icon: Settings, action: () => console.log("Settings") },
    { id: 5, title: "Logout", icon: LogOut, action: () => console.log("Logout") }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Profile</h1>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Edit className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* User Info */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600 text-sm">{user.phone}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Member since {user.memberSince}</p>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="p-4 space-y-3">
          {menuItems.map((item) => (
            <Card key={item.id} className="cursor-pointer" onClick={item.action}>
              <CardContent className="p-4 flex items-center">
                <item.icon className="h-5 w-5 text-gray-600" />
                <span className="ml-3 font-medium">{item.title}</span>
                <div className="ml-auto">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;