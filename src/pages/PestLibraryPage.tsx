import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface Pest {
  id: string;
  name: string;
  scientificName: string;
  crops: string[];
  regions: string[];
  image: string;
  severity: 'Low' | 'Medium' | 'High';
  category: 'Insect' | 'Disease' | 'Weed';
}

const pestData: Pest[] = [
  {
    id: '1',
    name: 'Fall Armyworm',
    scientificName: 'Spodoptera frugiperda',
    crops: ['Corn', 'Sorghum', 'Rice'],
    regions: ['North America', 'South America', 'Africa'],
    image: 'https://images.pexels.com/photos/7692897/pexels-photo-7692897.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'High',
    category: 'Insect',
  },
  {
    id: '2',
    name: 'Corn Rootworm',
    scientificName: 'Diabrotica spp.',
    crops: ['Corn', 'Soybeans'],
    regions: ['North America', 'Europe'],
    image: 'https://images.pexels.com/photos/5501096/pexels-photo-5501096.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'High',
    category: 'Insect',
  },
  {
    id: '3',
    name: 'Powdery Mildew',
    scientificName: 'Erysiphe graminis',
    crops: ['Wheat', 'Barley', 'Grapes'],
    regions: ['Europe', 'Asia', 'North America'],
    image: 'https://images.pexels.com/photos/7728637/pexels-photo-7728637.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'Medium',
    category: 'Disease',
  },
  {
    id: '4',
    name: 'Coffee Leaf Rust',
    scientificName: 'Hemileia vastatrix',
    crops: ['Coffee'],
    regions: ['South America', 'Central America', 'Africa'],
    image: 'https://images.pexels.com/photos/37540/cucumber-salad-food-healthy-37540.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'High',
    category: 'Disease',
  },
  {
    id: '5',
    name: 'Palmer Amaranth',
    scientificName: 'Amaranthus palmeri',
    crops: ['Soybeans', 'Cotton', 'Corn'],
    regions: ['North America'],
    image: 'https://images.pexels.com/photos/5472527/pexels-photo-5472527.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'Medium',
    category: 'Weed',
  },
  {
    id: '6',
    name: 'Citrus Greening',
    scientificName: 'Candidatus Liberibacter asiaticus',
    crops: ['Citrus'],
    regions: ['North America', 'Asia', 'Africa'],
    image: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1600',
    severity: 'High',
    category: 'Disease',
  },
];

const PestLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPest, setSelectedPest] = useState<Pest | null>(null);
  const [filters, setFilters] = useState({
    category: 'All',
    severity: 'All',
    region: 'All',
    crop: 'All',
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPests = pestData.filter((pest) => {
    // Search filter
    const matchesSearch = pest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = filters.category === 'All' || pest.category === filters.category;
    
    // Severity filter
    const matchesSeverity = filters.severity === 'All' || pest.severity === filters.severity;
    
    // Region filter
    const matchesRegion = filters.region === 'All' || pest.regions.includes(filters.region);
    
    // Crop filter
    const matchesCrop = filters.crop === 'All' || pest.crops.includes(filters.crop);
    
    return matchesSearch && matchesCategory && matchesSeverity && matchesRegion && matchesCrop;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low':
        return 'bg-success-100 text-success-700';
      case 'Medium':
        return 'bg-warning-100 text-warning-700';
      case 'High':
        return 'bg-error-100 text-error-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Pest Library
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our extensive database of agricultural pests with detailed information on lifecycle, treatment options, and prevention strategies.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search pests..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Filter size={16} className="mr-2" /> Filters
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                          value={filters.category}
                          onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                          <option value="All">All Categories</option>
                          <option value="Insect">Insect</option>
                          <option value="Disease">Disease</option>
                          <option value="Weed">Weed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                          value={filters.severity}
                          onChange={(e) => handleFilterChange('severity', e.target.value)}
                        >
                          <option value="All">All Levels</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                          value={filters.region}
                          onChange={(e) => handleFilterChange('region', e.target.value)}
                        >
                          <option value="All">All Regions</option>
                          <option value="North America">North America</option>
                          <option value="South America">South America</option>
                          <option value="Europe">Europe</option>
                          <option value="Asia">Asia</option>
                          <option value="Africa">Africa</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Crop</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                          value={filters.crop}
                          onChange={(e) => handleFilterChange('crop', e.target.value)}
                        >
                          <option value="All">All Crops</option>
                          <option value="Corn">Corn</option>
                          <option value="Soybeans">Soybeans</option>
                          <option value="Wheat">Wheat</option>
                          <option value="Rice">Rice</option>
                          <option value="Cotton">Cotton</option>
                          <option value="Coffee">Coffee</option>
                          <option value="Citrus">Citrus</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="w-full px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors flex items-center justify-center"
                    onClick={() => setFilters({
                      category: 'All',
                      severity: 'All',
                      region: 'All',
                      crop: 'All',
                    })}
                  >
                    <SlidersHorizontal size={14} className="mr-2" />
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {selectedPest ? (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={selectedPest.image} 
                        alt={selectedPest.name} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedPest.name}</h2>
                          <p className="text-gray-500 italic mb-3">{selectedPest.scientificName}</p>
                        </div>
                        <button
                          onClick={() => setSelectedPest(null)}
                          className="text-sm text-primary-600 hover:text-primary-700"
                        >
                          Back to list
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getSeverityColor(selectedPest.severity)}`}>
                          {selectedPest.severity} Severity
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                          {selectedPest.category}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Affected Crops</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPest.crops.map((crop) => (
                              <span key={crop} className="text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700">
                                {crop}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Geographic Distribution</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPest.regions.map((region) => (
                              <span key={region} className="text-sm px-3 py-1 rounded-full bg-secondary-50 text-secondary-700">
                                {region}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
                          <p className="text-gray-700">
                            {selectedPest.name} ({selectedPest.scientificName}) is a {selectedPest.severity.toLowerCase()} severity {selectedPest.category.toLowerCase()} pest that affects {selectedPest.crops.join(', ')} in {selectedPest.regions.join(', ')}. 
                            This pest is known for causing significant damage to crops if left untreated.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Management Strategies</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span>Implement crop rotation with non-host plants</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span>Use resistant or tolerant crop varieties when available</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span>Apply biological controls such as natural predators</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span>Targeted application of approved pesticides when necessary</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 flex space-x-4">
                        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors">
                          Download Fact Sheet
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                          Report Sighting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500">
                      Showing {filteredPests.length} of {pestData.length} pests
                    </p>
                  </div>

                  {filteredPests.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredPests.map((pest) => (
                        <div
                          key={pest.id}
                          className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
                          onClick={() => setSelectedPest(pest)}
                        >
                          <div className="relative h-48">
                            <img 
                              src={pest.image} 
                              alt={pest.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 right-0 m-3">
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getSeverityColor(pest.severity)}`}>
                                {pest.severity}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-1">{pest.name}</h3>
                            <p className="text-sm text-gray-500 italic mb-3">{pest.scientificName}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {pest.crops.slice(0, 3).map((crop) => (
                                <span key={crop} className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700">
                                  {crop}
                                </span>
                              ))}
                              {pest.crops.length > 3 && (
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                  +{pest.crops.length - 3}
                                </span>
                              )}
                            </div>
                            
                            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <p className="text-gray-500">No pests match your search criteria. Try adjusting your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestLibraryPage;