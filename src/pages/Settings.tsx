"use client";

import { useState } from "react";
import { ArrowLeft, Bell, Lock, Globe, Palette, User, Shield, HelpCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  const settingsOptions = [
    { id: 1, title: "Notifications", icon: Bell, action: () => setNotifications(!notifications), hasSwitch: true, switchValue: notifications },
    { id: 2, title: "Dark Mode", icon: Palette, action: () => setDarkMode(!darkMode), hasSwitch: true, switchValue: darkMode },
    { id: 3, title: "Language", icon: Globe, action: () => console.log("Change language"), value: language },
    { id: 4, title: "Account", icon: User, action: () => console.log("Account settings") },
    { id: 5, title: "Privacy", icon: Shield, action: () => console.log("Privacy settings") },
    { id: 6, title: "Security", icon: Lock, action: () => console.log("Security settings") },
    { id: 7, title: "Help & Support", icon: HelpCircle, action: () => console.log("Help & Support") },
    { id: 8, title: "About", icon: Info, action: () => console.log("About") }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Settings</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* Settings Options */}
        <div className="p-4 space-y-3">
          {settingsOptions.map((option) => (
            <Card key={option.id} className="cursor-pointer" onClick={option.action}>
              <CardContent className="p-4 flex items-center">
                <option.icon className="h-5 w-5 text-gray-600" />
                <span className="ml-3 font-medium">{option.title}</span>
                {option.hasSwitch ? (
                  <Switch 
                    className="ml-auto" 
                    checked={option.switchValue} 
                    onCheckedChange={option.action}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <div className="ml-auto flex items-center">
                    {option.value && <span className="text-sm text-gray-500 mr-2">{option.value}</span>}
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <Button variant="destructive" className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;