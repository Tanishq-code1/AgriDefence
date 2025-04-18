import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Bug, Leaf, BarChart2 } from 'lucide-react';

const stats = [
  { id: 1, value: '70%', label: 'Pesticide Reduction' },
  { id: 2, value: '35%', label: 'Yield Increase' },
  { id: 3, value: '90%', label: 'Detection Accuracy' },
  { id: 4, value: '50%', label: 'Cost Savings' },
];

export const HeroSection: React.FC = () => {
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 mix-blend-multiply"></div>
        <img 
          src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Aerial view of agricultural fields" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-8 animate-fade-in">
            Smart Farming,<br />Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 md:mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            Revolutionize your farm with our AI-powered pest detection system. 
            Reduce pesticide use, increase yields, and protect the environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/pest-detection" 
              className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Try Our Demo <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link 
              to="/pest-library" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md font-medium transition-colors duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Pest Library
            </Link>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 max-w-2xl mx-auto md:mx-0">
              {stats.map((stat, index) => (
                <div 
                  key={stat.id} 
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-300 ${
                    index === activeStatIndex ? 'transform scale-105 bg-white/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-center h-10 mb-2">
                    {index === 0 && <Bug className="text-white" />}
                    {index === 1 && <BarChart2 className="text-white" />}
                    {index === 2 && <Leaf className="text-white" />}
                    {index === 3 && <Leaf className="text-white" />}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};