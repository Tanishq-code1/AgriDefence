import React from 'react';
import { Calendar, MapPin, BarChart2, Lock, Cpu, Database, Globe, Users, Check, ArrowRight } from 'lucide-react';

const RoadmapPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Future Aspect
            </h1>
            <p className="text-lg text-gray-600">
              Discover our vision for the future of AgriGuard AI and how we're expanding our capabilities to revolutionize sustainable agriculture.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                At AgriGuard AI, we're on a mission to create a more sustainable future for agriculture. Our roadmap is guided by three core principles:
              </p>
              <ol className="space-y-4 mt-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full w-6 h-6 flex items-center justify-center text-primary-700 font-medium mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <strong className="text-gray-900">Environmental Sustainability</strong> - Reducing pesticide use through precision application and promoting eco-friendly alternatives.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full w-6 h-6 flex items-center justify-center text-primary-700 font-medium mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <strong className="text-gray-900">Economic Viability</strong> - Ensuring our tools help farmers reduce costs and increase yields to maintain profitable operations.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full w-6 h-6 flex items-center justify-center text-primary-700 font-medium mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <strong className="text-gray-900">Global Accessibility</strong> - Making advanced agricultural technology accessible to farms of all sizes around the world.
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Timeline</h2>
            
            <div className="space-y-12">
              {/* Current Phase */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-accent-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Check size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-accent-500">Current Phase (2025)</h3>
                </div>
                <div className="pl-[52px] border-l-2 border-accent-200 pb-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start">
                        <div className="bg-accent-100 rounded-full w-8 h-8 flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">AI Pest Detection</h4>
                          <p className="text-sm text-gray-600">Image-based identification with treatment recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-accent-100 rounded-full w-8 h-8 flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Pest Library</h4>
                          <p className="text-sm text-gray-600">Comprehensive database with detailed information</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-accent-100 rounded-full w-8 h-8 flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Connect with Experts</h4>
                          <p className="text-sm text-gray-600">Get personalized advice and insights from professionals</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-accent-100 rounded-full w-8 h-8 flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Farmer Dashboard</h4>
                          <p className="text-sm text-gray-600">Field monitoring and sustainability metrics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Short-Term Phase */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Short-Term (2025-2026)</h3>
                </div>
                <div className="pl-[52px] border-l-2 border-gray-200 pb-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <Cpu size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">IoT Sensor Integration</h4>
                          <p className="text-sm text-gray-600">Real-time soil and climate data collection</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <Globe size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Multi-Language Support</h4>
                          <p className="text-sm text-gray-600">Expanding access to global farming communities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Enhanced Mapping</h4>
                          <p className="text-sm text-gray-600">Higher resolution field mapping with zone management</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <BarChart2 size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Advanced Analytics</h4>
                          <p className="text-sm text-gray-600">Predictive models for pest outbreak forecasting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Medium-Term Phase */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Medium-Term (2026-2027)</h3>
                </div>
                <div className="pl-[52px] border-l-2 border-gray-200 pb-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <Lock size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Blockchain Integration</h4>
                          <p className="text-sm text-gray-600">Secure data sharing and transparent supply chain</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <Database size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Open Data Platform</h4>
                          <p className="text-sm text-gray-600">Collaborative research and knowledge sharing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <Users size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Expert Network</h4>
                          <p className="text-sm text-gray-600">On-demand consultation with specialists</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-700 mr-3 flex-shrink-0">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Autonomous Treatment</h4>
                          <p className="text-sm text-gray-600">Drone and robot integration for targeted application</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Long-Term Vision */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Long-Term Vision (2027+)</h3>
                </div>
                <div className="pl-[52px]">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="prose max-w-none text-gray-700">
                      <p>
                        Our long-term vision is to create a fully integrated agricultural ecosystem that leverages AI, IoT, robotics, and human expertise to revolutionize how we grow food sustainably.
                      </p>
                      <p>
                        We aim to expand beyond pest management to provide comprehensive solutions for all aspects of sustainable farming, including:
                      </p>
                      <ul className="space-y-2">
                        <li>Complete crop health management system</li>
                        <li>Climate adaptation strategies personalized to each farm</li>
                        <li>Full integration with autonomous farm equipment</li>
                        <li>Global knowledge network connecting farmers worldwide</li>
                        <li>AI-driven decision support for all farming operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Partners */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Collaboration</h2>
            <p className="text-gray-700 mb-8">
              We're actively seeking research partners to help accelerate our development roadmap and improve agricultural sustainability worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-3">Academic Partnerships</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Collaborate with our R&D team on joint research projects to advance pest detection and sustainable farming practices.
                </p>
                <button className="text-primary-600 font-medium flex items-center text-sm hover:text-primary-700">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-3">Data Contribution Program</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our global network of farms contributing field data to improve AI models and pest prediction accuracy.
                </p>
                <button className="text-primary-600 font-medium flex items-center text-sm hover:text-primary-700">
                  Join Program <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          {/* <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-md overflow-hidden">
            <div className="px-8 py-10 md:px-10 md:py-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Join the Revolution in Sustainable Farming</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Be part of our journey to transform agriculture through AI and innovative technology. Whether you're a farmer, researcher, or investor, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                <button className="px-6 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
                  Request Investor Deck
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;