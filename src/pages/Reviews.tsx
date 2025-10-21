"use client";

import { useState } from "react";
import { ArrowLeft, Star, Plus, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: "",
    comment: "",
    recommend: true
  });

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      title: "Excellent Product!",
      comment: "This product exceeded my expectations. The quality is outstanding and it arrived earlier than expected.",
      date: "June 10, 2023",
      helpful: 24,
      recommend: true,
      verified: true
    },
    {
      id: 2,
      user: "Sarah Johnson",
      rating: 4,
      title: "Great value for money",
      comment: "Really satisfied with this purchase. The build quality is good and it works as advertised.",
      date: "June 5, 2023",
      helpful: 18,
      recommend: true,
      verified: true
    },
    {
      id: 3,
      user: "Mike Chen",
      rating: 3,
      title: "Good but could be better",
      comment: "It's an okay product. Works fine but I've seen better quality in similar products.",
      date: "May 28, 2023",
      helpful: 5,
      recommend: false,
      verified: true
    }
  ];

  const handleRatingChange = (rating: number) => {
    setNewReview({...newReview, rating});
  };

  const handleSubmitReview = () => {
    // Submit review logic would go here
    console.log("Submitting review:", newReview);
    setShowReviewForm(false);
    setNewReview({
      rating: 0,
      title: "",
      comment: "",
      recommend: true
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Customer Reviews</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        {/* Product Info */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h2 className="font-semibold">Premium Wireless Headphones</h2>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.5 (128 reviews)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Summary */}
        <Card className="mx-4 mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Rating Overview</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center">
                  <span className="text-sm w-4">{stars}</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                  <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                    <div 
                      className="h-2 bg-yellow-400 rounded-full" 
                      style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8 text-right">
                    {stars === 5 ? 89 : stars === 4 ? 25 : stars === 3 ? 7 : stars === 2 ? 4 : 3}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add Review Button */}
        <div className="p-4">
          <Button className="w-full" onClick={() => setShowReviewForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Write a Review
          </Button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <Card className="mx-4 mt-4">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Write Your Review</h3>
              
              {/* Rating */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className="mr-1"
                    >
                      <Star 
                        className={`h-8 w-8 ${star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Review Title</label>
                <input
                  type="text"
                  placeholder="Summarize your experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={newReview.title}
                  onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                />
              </div>
              
              {/* Comment */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea
                  placeholder="Share details of your experience"
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                />
              </div>
              
              {/* Recommend */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={newReview.recommend}
                    onChange={(e) => setNewReview({...newReview, recommend: e.target.checked})}
                  />
                  <span className="text-sm">I recommend this product</span>
                </label>
              </div>
              
              {/* Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowReviewForm(false)}>
                  Cancel
                </Button>
                <Button 
                  className="flex-1" 
                  onClick={handleSubmitReview}
                  disabled={newReview.rating === 0 || !newReview.title || !newReview.comment}
                >
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reviews List */}
        <div className="p-4">
          <h3 className="font-semibold mb-3">Customer Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{review.user}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">{review.date}</span>
                        {review.verified && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-2">Verified</span>
                        )}
                      </div>
                    </div>
                    {review.recommend && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Recommended</span>
                    )}
                  </div>
                  
                  <h5 className="font-medium mt-3">{review.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  
                  <div className="flex items-center mt-3 text-sm">
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{review.helpful}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto ml-3">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>Reply</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;