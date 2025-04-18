import React, { useState } from 'react';
import { Bone as Drone, Leaf, Droplets, LineChart, ArrowUpRight, BarChart2, Map, Settings, LayoutGrid } from 'lucide-react';

const PrecisionAgPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'map' | 'grid'>('map');
  const [selectedField, setSelectedField] = useState<string | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Precision Agriculture Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Optimize your farming operations with advanced drone technology, predictive analytics, and precision resource management.
            </p>
          </div>

          {/* Field Selection Header */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-900">Field Analysis</h2>
                <p className="text-gray-600">Select a field to view detailed insights</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div>
                  <select 
                    className="form-select rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    value={selectedField || ''}
                    onChange={(e) => setSelectedField(e.target.value)}
                  >
                    <option value="">Select a field</option>
                    <option value="north">North Field (Corn)</option>
                    <option value="south">South Field (Soybeans)</option>
                    <option value="east">East Field (Wheat)</option>
                    <option value="west">West Field (Cotton)</option>
                  </select>
                </div>
                
                <div className="border-l border-gray-200 pl-3 flex items-center space-x-2">
                  <button 
                    className={`p-2 rounded-md ${activeView === 'map' ? 'bg-gray-100 text-primary-600' : 'text-gray-500 hover:text-primary-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveView('map')}
                    aria-label="Map View"
                  >
                    <Map size={20} />
                  </button>
                  <button 
                    className={`p-2 rounded-md ${activeView === 'grid' ? 'bg-gray-100 text-primary-600' : 'text-gray-500 hover:text-primary-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveView('grid')}
                    aria-label="Grid View"
                  >
                    <LayoutGrid size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map View */}
          {activeView === 'map' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="relative h-[500px] bg-gray-100">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Satellite view of agricultural fields"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Field Health Map</h3>
                      <p className="text-white/80 max-w-lg">
                        AI-annotated view showing pest hotspots, plant health indicators, and recommended treatment zones.
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-white text-primary-600 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">
                        Download Report
                      </button>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md font-medium text-sm hover:bg-primary-700 transition-colors">
                        Launch Drone
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Map Legend</h4>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-success-500 mr-2"></div>
                      <span>Healthy Crops</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-warning-500 mr-2"></div>
                      <span>Potential Issues</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-error-500 mr-2"></div>
                      <span>Confirmed Pests</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-accent-500 mr-2"></div>
                      <span>Treatment Zones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {activeView === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Drone Footage</h3>
                </div>
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src="https://images.pexels.com/photos/2164608/pexels-photo-2164608.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Drone view of a field"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Pest Prediction Analytics</h3>
                </div>
                <div className="p-4 aspect-video flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Analytics chart"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Drone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Drone Integration</h3>
              <p className="text-gray-600 mb-4">
                Schedule automated drone flights to monitor your fields and identify pest hotspots with precision.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Real-time aerial imagery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">AI-enhanced visual analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Automatic flight planning</span>
                </li>
              </ul>
              <button className="text-primary-600 font-medium flex items-center text-sm hover:text-primary-700">
                Schedule Flight <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-accent-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <LineChart size={24} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Leverage AI models to predict pest outbreaks before they occur based on weather patterns and historical data.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">7-day pest forecast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Risk assessment modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Weather-based recommendations</span>
                </li>
              </ul>
              <button className="text-accent-600 font-medium flex items-center text-sm hover:text-accent-700">
                View Predictions <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-secondary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Droplets size={24} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resource Optimizer</h3>
              <p className="text-gray-600 mb-4">
                Calculate optimal pesticide and water usage to minimize waste while maximizing effectiveness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Precision spray mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Resource usage calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">Cost reduction analysis</span>
                </li>
              </ul>
              <button className="text-secondary-600 font-medium flex items-center text-sm hover:text-secondary-700">
                Optimize Resources <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Treatment Recommendation */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">Smart Treatment Recommendations</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">Biological Control</h4>
                    <div className="bg-success-100 text-success-700 text-xs px-2 py-1 rounded-full font-medium">
                      Recommended
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Release predatory insects to naturally control pest populations without chemicals.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Effectiveness:</span>
                      <span className="font-medium text-gray-700">High</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Eco-impact:</span>
                      <span className="font-medium text-success-600">Excellent</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">Organic Sprays</h4>
                    <div className="bg-warning-100 text-warning-700 text-xs px-2 py-1 rounded-full font-medium">
                      Alternative
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Apply certified organic pesticides derived from natural sources like neem oil.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Effectiveness:</span>
                      <span className="font-medium text-gray-700">Medium</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Eco-impact:</span>
                      <span className="font-medium text-success-600">Good</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">Companion Planting</h4>
                    <div className="bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full font-medium">
                      Preventative
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Plant pest-repelling species alongside crops to naturally deter common pests.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Effectiveness:</span>
                      <span className="font-medium text-gray-700">Medium</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Eco-impact:</span>
                      <span className="font-medium text-success-600">Excellent</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">Targeted Chemicals</h4>
                    <div className="bg-error-100 text-error-700 text-xs px-2 py-1 rounded-full font-medium">
                      Last Resort
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Precision application of chemical pesticides only where absolutely necessary.
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Effectiveness:</span>
                      <span className="font-medium text-gray-700">High</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Eco-impact:</span>
                      <span className="font-medium text-warning-600">Moderate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors">
                  Generate Custom Treatment Plan
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-12 md:px-12 md:py-16 md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to optimize your farm operations?</h2>
                <p className="text-white/80">
                  Upgrade to AgriGuard AI Premium for full access to our precision agriculture tools, unlimited drone flights, and personalized support.
                </p>
              </div>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <button className="px-6 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  View Pricing
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecisionAgPage;