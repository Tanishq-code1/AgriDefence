import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf size={24} className="text-primary-400" />
              <h3 className="text-xl font-bold">AgriGuard AI</h3>
            </div>
            <p className="text-gray-400 max-w-xs">
              Revolutionizing sustainable agriculture through AI-powered pest
              detection and management solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pest-detection"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pest Detection
                </Link>
              </li>
              <li>
                <Link
                  to="/pest-library"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pest Library
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Farmer Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/precision-agriculture"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Precision Agriculture
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              {/* <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} AgriGuard AI. All rights reserved.
              </p> */}
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
