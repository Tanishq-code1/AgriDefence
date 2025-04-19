import React, { useState } from "react";
import { MapPin, AlertTriangle, Droplets, Wheat, Bug } from "lucide-react";

export const MapSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: "1",
      name: "North America",
      pests: ["Fall Armyworm", "Corn Rootworm", "Soybean Aphid"],
      riskLevel: "High",
      affectedCrops: ["Corn", "Soybean", "Cotton"],
      outbreakSeverity: 85,
      status: "Increasing",
    },
    {
      id: "2",
      name: "South America",
      pests: ["Coffee Leaf Rust", "Whitefly", "Cassava Mealybug"],
      riskLevel: "Medium",
      affectedCrops: ["Coffee", "Cassava", "Tomato"],
      outbreakSeverity: 65,
      status: "Stable",
    },
    {
      id: "3",
      name: "Europe",
      pests: [
        "European Corn Borer",
        "Colorado Potato Beetle",
        "Grapevine Moth",
      ],
      riskLevel: "Low",
      affectedCrops: ["Grapes", "Potato", "Wheat"],
      outbreakSeverity: 45,
      status: "Decreasing",
    },
    {
      id: "4",
      name: "Africa",
      pests: ["Desert Locust", "Tuta Absoluta", "African Armyworm"],
      riskLevel: "Critical",
      affectedCrops: ["Maize", "Tomato", "Sorghum"],
      outbreakSeverity: 95,
      status: "Rapid Spread",
    },
    {
      id: "5",
      name: "Asia",
      pests: ["Rice Stem Borer", "Brown Planthopper", "Yellow Stem Borer"],
      riskLevel: "High",
      affectedCrops: ["Rice", "Wheat", "Vegetables"],
      outbreakSeverity: 78,
      status: "Increasing",
    },
    {
      id: "6",
      name: "Australia",
      pests: [
        "Queensland Fruit Fly",
        "Redlegged Earth Mite",
        "Diamondback Moth",
      ],
      riskLevel: "Medium",
      affectedCrops: ["Fruits", "Canola", "Vegetables"],
      outbreakSeverity: 55,
      status: "Stable",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Pest Outbreak Alerts
          </h2>
          <p className="text-lg text-gray-600">
            Real-time pest outbreak monitoring and threat analysis across major
            agricultural regions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Bug className="mr-2 h-6 w-6 text-accent-500" />
                Regional Pest Threat Analysis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className={`p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer
                      ${
                        selectedRegion === region.id
                          ? "border-accent-500 bg-accent-25 shadow-md"
                          : "border-gray-100 hover:border-accent-100 hover:bg-gray-50"
                      }
                    `}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <MapPin
                            className={`h-5 w-5 mr-2 ${
                              selectedRegion === region.id
                                ? "text-accent-600"
                                : "text-gray-500"
                            }`}
                          />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {region.name}
                          </h4>
                        </div>

                        {selectedRegion === region.id && (
                          <div className="animate-fade-in space-y-4">
                            <div className="flex gap-4">
                              <div className="flex items-center bg-red-50 px-3 py-1 rounded-full">
                                <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                                <span className="text-sm font-medium text-red-700">
                                  {region.riskLevel} Risk
                                </span>
                              </div>
                              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                <Droplets className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-700">
                                  {region.status}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-600">
                                  Outbreak Severity:
                                </span>
                                <span className="text-sm font-semibold text-accent-600">
                                  {region.outbreakSeverity}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-accent-500 h-2 rounded-full transition-all duration-300"
                                  style={{
                                    width: `${region.outbreakSeverity}%`,
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                                <Wheat className="h-4 w-4 mr-2 text-green-600" />
                                Affected Crops:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {region.affectedCrops.map((crop, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded-full"
                                  >
                                    {crop}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-600 mb-2">
                                Active Pests:
                              </p>
                              <ul className="space-y-1">
                                {region.pests.map((pest, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center text-sm text-gray-700 pl-2"
                                  >
                                    <span className="w-2 h-2 rounded-full bg-accent-500 mr-2"></span>
                                    {pest}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
