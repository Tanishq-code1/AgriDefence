import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "AgriGuard  has revolutionized how we manage pests on our 500-acre corn farm. We've reduced pesticide use by 60% while maintaining yields.",
    author: "Sarah Johnson",
    role: "Corn Farmer, Iowa",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
  },
  {
    id: 2,
    quote: "The pest predictions have been incredibly accurate. It's like having a crystal ball for pest management! We can now prepare in advance for potential outbreaks.",
    author: "Miguel Rodriguez",
    role: "Vineyard Owner, California",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
  },
  {
    id: 3,
    quote: "As an agronomist working with multiple farms, AgriGuard  has become an essential tool. The pest library and AI detection have saved countless crops.",
    author: "Emily Chen",
    role: "Agricultural Consultant",
    image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 4,
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-earth-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Real Farmers
          </h2>
          <p className="text-lg text-gray-600">
            See how farmers around the world are transforming their pest management practices with AgriGuard .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <Quote size={36} className="text-primary-200" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.stars ? 'text-warning-500 fill-warning-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-8">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-earth-600 hover:bg-earth-500 text-white rounded-md font-medium transition-colors">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};