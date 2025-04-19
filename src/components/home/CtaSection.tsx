import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="10"
              cy="10"
              r="2"
              fill="#FFF"
            ></circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of farmers worldwide who are reducing pesticide use,
            increasing yields, and practicing sustainable agriculture with
            AgriGuard .
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            <div className="flex items-center text-white">
              <Check size={18} className="mr-2 text-accent-300" />
              <span>Real-time pest alerts</span>
            </div>
            <div className="flex items-center text-white">
              <Check size={18} className="mr-2 text-accent-300" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center text-white">
              <Check size={18} className="mr-2 text-accent-300" />
              <span>95% detection accuracy</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="px-6 py-3 bg-white hover:bg-gray-100 text-primary-600 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/pest-detection"
              className="px-6 py-3 bg-transparent hover:bg-primary-500 text-white border border-white/30 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
