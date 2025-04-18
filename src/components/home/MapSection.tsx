import React, { useState } from 'react';
import Map from 'react-map-gl';
import { MapPin, Info } from 'lucide-react';

export const MapSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const regions = [
    { id: '1', name: 'North America', pests: ['Fall Armyworm', 'Corn Rootworm', 'Soybean Aphid'] },
    { id: '2', name: 'South America', pests: ['Coffee Leaf Rust', 'Whitefly', 'Cassava Mealybug'] },
    { id: '3', name: 'Europe', pests: ['European Corn Borer', 'Colorado Potato Beetle', 'Grapevine Moth'] },
    { id: '4', name: 'Africa', pests: ['Desert Locust', 'Tuta Absoluta', 'African Armyworm'] },
    { id: '5', name: 'Asia', pests: ['Rice Stem Borer', 'Brown Planthopper', 'Yellow Stem Borer'] },
    { id: '6', name: 'Australia', pests: ['Queensland Fruit Fly', 'Redlegged Earth Mite', 'Diamondback Moth'] },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Pest Outbreak Map
          </h2>
          <p className="text-lg text-gray-600">
            Monitor real-time pest outbreaks across the globe with our interactive heatmap powered by satellite data and farmer reports.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2 h-[400px] md:h-[500px] relative">
              <Map
                mapboxAccessToken="pk.eyJ1IjoiYWdyaWd1YXJkYWkiLCJhIjoiY2xzcXk1ZTdtMGF1ZjJxcGdpenRqbHhkaCJ9.TxMJBUTtFWLRzELJBroWGA"
                initialViewState={{
                  longitude: 0,
                  latitude: 20,
                  zoom: 1.5
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v11"
              >
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm z-10 max-w-xs">
                  <div className="flex items-start">
                    <Info size={16} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-xs text-gray-700">
                      This map shows current pest hotspots globally. Select a region or click on the map to see detailed pest information.
                    </p>
                  </div>
                </div>
              </Map>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Pest Alerts</h3>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {regions.map((region) => (
                  <div 
                    key={region.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedRegion === region.id 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="flex items-start">
                      <MapPin size={18} className={`mt-0.5 mr-2 flex-shrink-0 ${
                        selectedRegion === region.id ? 'text-primary-500' : 'text-gray-400'
                      }`} />
                      <div>
                        <h4 className="font-medium text-gray-900">{region.name}</h4>
                        {selectedRegion === region.id && (
                          <div className="mt-2 animate-fade-in">
                            <p className="text-sm text-gray-500 mb-1">Common Pests:</p>
                            <ul className="space-y-1">
                              {region.pests.map((pest, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-center">
                                  <span className="w-2 h-2 rounded-full bg-accent-500 mr-2"></span>
                                  {pest}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-colors">
                  View Full Pest Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};