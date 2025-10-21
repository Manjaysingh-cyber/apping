"use client";

import { useState } from "react";
import { ArrowLeft, CreditCard, Wallet, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate("/order-success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Payment</h1>
      </div>

      <div className="max-w-md mx-auto pb-24">
        {/* Payment Methods */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
          <div className="grid grid-cols-3 gap-3">
            <Card 
              className={`cursor-pointer ${paymentMethod === "card" ? "border-blue-500 border-2" : ""}`}
              onClick={() => setPaymentMethod("card")}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <CreditCard className="h-6 w-6 mb-2" />
                <span className="text-sm text-center">Credit/Debit Card</span>
              </CardContent>
            </Card>
            <Card 
              className={`cursor-pointer ${paymentMethod === "wallet" ? "border-blue-500 border-2" : ""}`}
              onClick={() => setPaymentMethod("wallet")}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <Wallet className="h-6 w-6 mb-2" />
                <span className="text-sm text-center">Wallet</span>
              </CardContent>
            </Card>
            <Card 
              className={`cursor-pointer ${paymentMethod === "upi" ? "border-blue-500 border-2" : ""}`}
              onClick={() => setPaymentMethod("upi")}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <Smartphone className="h-6 w-6 mb-2" />
                <span className="text-sm text-center">UPI</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Form */}
        <div className="p-4">
          {paymentMethod === "card" && (
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Card Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input 
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456" 
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input 
                      id="cardName"
                      placeholder="John Doe" 
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input 
                        id="expiry"
                        placeholder="MM/YY" 
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv"
                        placeholder="123" 
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "wallet" && (
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Select Wallet</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="h-5 w-5 mr-2" />
                    Paytm
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="h-5 w-5 mr-2" />
                    PhonePe
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="h-5 w-5 mr-2" />
                    Google Pay
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "upi" && (
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">UPI Payment</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input 
                      id="upiId"
                      placeholder="yourname@upi" 
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    You will be redirected to your UPI app to complete the payment
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Pay Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <Button 
              className="w-full py-6"
              onClick={handlePayment}
            >
              Pay ₹5,497
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;