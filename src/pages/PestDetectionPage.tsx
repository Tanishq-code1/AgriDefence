import { useState, useRef, useEffect } from 'react';
import { Search, Upload, Leaf, Droplets, Sun, Thermometer, Calendar, Award, AlertTriangle, FileText, PlusCircle, ArrowRight, Flower, Bell, CheckCircle, Image, RefreshCw, Camera } from 'lucide-react';



export default function PlantApp() {
  const [currentTab, setCurrentTab] = useState('diagnosis');
  const [diagnosed, setDiagnosed] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [plantData, setPlantData] = useState(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [myPlants, setMyPlants] = useState([
    { 
      id: 1, 
      name: 'Monstera', 
      health: 'Good', 
      lastCheck: '2 weeks ago', 
      image: '/api/placeholder/120/120',
      nextCheckDue: '1 day',
      notifications: true
    },
    { 
      id: 2, 
      name: 'Peace Lily', 
      health: 'Needs attention', 
      lastCheck: '1 month ago', 
      image: '/api/placeholder/120/120',
      nextCheckDue: 'Overdue',
      notifications: true
    }
  ]);
  
  // Plant database for demo purposes
  const plantDatabase = [
    {
      id: 'snake-plant',
      name: 'Snake Plant',
      scientificName: 'Sansevieria trifasciata',
      health: 'Good',
      issues: ['Slight leaf discoloration'],
      careRecommendations: {
        light: 'Indirect light or partial shade. Avoid direct sunlight.',
        water: 'Water every 2-3 weeks. Allow soil to dry between waterings.',
        temperature: '65-85°F (18-29°C). Avoid cold drafts.',
      },
      treatment: [
        'Check soil moisture - ensure it\'s not overwatered',
        'Apply diluted balanced fertilizer (10-10-10) once a month',
        'Increase humidity if leaves are developing brown tips'
      ],
      fertilizers: ['Balanced 10-10-10', 'Slow-release 14-14-14'],
      pesticides: ['Neem oil for spider mites', 'Insecticidal soap for scale insects']
    },
    {
      id: 'pothos',
      name: 'Pothos',
      scientificName: 'Epipremnum aureum',
      health: 'Needs attention',
      issues: ['Yellowing leaves', 'Brown spots'],
      careRecommendations: {
        light: 'Medium to low light. No direct sunlight.',
        water: 'Water when top inch of soil is dry. Avoid overwatering.',
        temperature: '65-85°F (18-29°C). Keep away from cold drafts.',
      },
      treatment: [
        'Check for root rot and repot if necessary',
        'Reduce watering frequency',
        'Apply fungicide if spots continue to spread'
      ],
      fertilizers: ['Liquid houseplant fertilizer (diluted to half strength)', 'Organic fish emulsion'],
      pesticides: ['Neem oil for mealybugs', 'Horticultural oil for scale insects']
    },
    {
      id: 'peace-lily',
      name: 'Peace Lily',
      scientificName: 'Spathiphyllum',
      health: 'Critical',
      issues: ['Wilting', 'Brown leaf tips', 'No flowering'],
      careRecommendations: {
        light: 'Low to medium indirect light. No direct sun.',
        water: 'Keep soil moist but not soggy. Water when top soil feels dry.',
        temperature: '65-80°F (18-27°C). Protect from cold drafts.',
      },
      treatment: [
        'Increase watering frequency',
        'Mist leaves to increase humidity',
        'Move away from heating/cooling vents'
      ],
      fertilizers: ['Balanced liquid fertilizer monthly (spring/summer)', 'Low nitrogen fertilizer to encourage blooming'],
      pesticides: ['Insecticidal soap for aphids', 'Neem oil for spider mites']
    }
  ];
  
  // Camera functions
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      setShowCamera(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Camera access denied or not available. Please use the file upload option instead.");
    }
  };
  
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };
  
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas dimensions to match video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw current video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to data URL and set as selected image
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setSelectedImage(imageDataUrl);
      
      // Stop camera and process image
      stopCamera();
      setAnalyzing(true);
      setAnalysisProgress(0);
      
      // Start analysis after a short delay
      setTimeout(() => {
        identifyPlant();
      }, 500);
    }
  };
  
  // Simulate plant identification and analysis
  const identifyPlant = () => {
    // Progress simulation for UI feedback
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setAnalysisProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        // Randomly select a plant from our database
        const randomIndex = Math.floor(Math.random() * plantDatabase.length);
        setPlantData(plantDatabase[randomIndex]);
        setAnalyzing(false);
        setDiagnosed(true);
      }
    }, 300);
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setAnalyzing(true);
      setAnalysisProgress(0);
      
      // Start analysis after a short delay
      setTimeout(() => {
        identifyPlant();
      }, 500);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  const resetDiagnosis = () => {
    setDiagnosed(false);
    setAnalyzing(false);
    setSelectedImage(null);
    setPlantData(null);
  };
  
  const addToMyPlants = () => {
    if (!plantData) return;
    
    const healthStatus = plantData.issues.length > 2 ? 'Critical' : 
                         plantData.issues.length > 0 ? 'Needs attention' : 'Good';
    
    const newPlant = {
      id: myPlants.length + 1,
      name: plantData.name,
      health: healthStatus,
      lastCheck: 'Today',
      image: selectedImage || '/api/placeholder/120/120',
      nextCheckDue: '15 days',
      notifications: true
    };
    
    setMyPlants([...myPlants, newPlant]);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      resetDiagnosis();
      setCurrentTab('my-plants');
    }, 1500);
  };
  
  const toggleNotification = (id) => {
    setMyPlants(myPlants.map(plant => 
      plant.id === id ? {...plant, notifications: !plant.notifications} : plant
    ));
  };

  useEffect(() => {
    // Clean up function to stop camera when component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative px-4 sm:px-6 lg:px-8">


      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />
      
      {/* Hidden canvas for image capture */}
      <canvas ref={canvasRef} className="hidden"></canvas>
      
      {/* Notification Toast */}
      {showNotification && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-5/6 bg-green-100 border-l-4 border-green-500 text-green-700 p-3 rounded shadow-md z-50 flex items-center">
          <CheckCircle size={20} className="mr-2" />
          <div>
            <p className="font-medium">15-day health check reminder set!</p>
            <p className="text-sm">We'll remind you to check on {plantData?.name}</p>
          </div>
        </div>
      )}
    

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Camera View */}
        {showCamera && (
          <div className="absolute inset-0 bg-black z-50 flex flex-col">
            <div className="relative flex-1">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <button 
                    onClick={stopCamera}
                    className="bg-white bg-opacity-75 rounded-full p-2"
                  >
                    <span className="text-lg font-bold">✕</span>
                  </button>
                </div>
                
                <div className="bg-black bg-opacity-60 p-4 rounded-lg text-white text-center mb-16">
                  <p className="text-lg font-medium mb-1">Position your plant in frame</p>
                  <p className="text-sm">Stand 1 meter (3 feet) away from plant for best results</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-4 flex justify-center">
              <button 
                onClick={captureImage}
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center"
              >
                <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center">
                  <div className="bg-white rounded-full w-12 h-12"></div>
                </div>
              </button>
            </div>
          </div>
        )}

        {currentTab === 'diagnosis' && !diagnosed && !analyzing && !showCamera && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
              <h2 className="text-xl font-semibold text-center mb-4">Plant Diagnosis</h2>
              <p className="text-gray-600 mb-6 text-center">Upload or take a photo of your plant for instant analysis</p>
              
              <div className="flex flex-col space-y-4">
                <button 
                  className="flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={startCamera}
                >
                  <Camera size={20} className="mr-2" />
                  <span>Take a Photo</span>
                </button>
                
                <div className="flex items-center">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="px-3 text-sm text-gray-500">or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                
                <div 
                  className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center cursor-pointer hover:bg-green-50 transition-colors"
                  onClick={triggerFileInput}
                >
                  <Upload className="mx-auto text-green-500 mb-2" size={28} />
                  <p className="font-medium text-green-600">Upload Plant Photo</p>
                  <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'diagnosis' && analyzing && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
              <h2 className="text-xl font-semibold text-center mb-4">Analyzing Plant...</h2>
              
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img src={selectedImage || "/api/placeholder/400/320"} alt="Uploaded plant" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-4"></div>
                  <div className="text-lg font-medium mb-2">Processing image...</div>
                  <div className="w-3/4 bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${analysisProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600 text-center font-medium">Research in progress:</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${analysisProgress > 20 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className={analysisProgress > 20 ? 'text-gray-800' : ''}>Identifying plant species</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${analysisProgress > 40 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className={analysisProgress > 40 ? 'text-gray-800' : ''}>Analyzing leaf structure</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${analysisProgress > 60 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className={analysisProgress > 60 ? 'text-gray-800' : ''}>Detecting health issues</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${analysisProgress > 80 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className={analysisProgress > 80 ? 'text-gray-800' : ''}>Preparing care recommendations</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'diagnosis' && diagnosed && plantData && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 bg-gray-100">
              <img src={selectedImage || "/api/placeholder/400/320"} alt={plantData.name} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 rounded-br-lg">
                Identified
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">{plantData.name}</h2>
                  <p className="text-gray-500 text-sm italic">{plantData.scientificName}</p>
                </div>
                <button 
                  onClick={addToMyPlants}
                  className="bg-green-100 text-green-700 p-2 rounded-full"
                >
                  <PlusCircle size={20} />
                </button>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <Award className={`mr-2 ${
                    plantData.health === 'Good' ? 'text-green-600' : 
                    plantData.health === 'Needs attention' ? 'text-amber-500' : 'text-red-500'
                  }`} size={20} />
                  <span className="font-medium">Overall Health:</span>
                  <span className={`ml-2 font-medium ${
                    plantData.health === 'Good' ? 'text-green-600' : 
                    plantData.health === 'Needs attention' ? 'text-amber-500' : 'text-red-500'
                  }`}>{plantData.health}</span>
                </div>
                
                {plantData.issues.length > 0 && (
                  <div className="flex items-start mt-2">
                    <AlertTriangle className="mr-2 flex-shrink-0 mt-1 text-amber-600" size={20} />
                    <div>
                      <span className="font-medium">Issues detected:</span>
                      <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                        {plantData.issues.map((issue, index) => (
                          <li key={index}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">Care Recommendations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Sun className="text-amber-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Light</p>
                      <p className="text-sm text-gray-600">{plantData.careRecommendations.light}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Droplets className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Water</p>
                      <p className="text-sm text-gray-600">{plantData.careRecommendations.water}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Thermometer className="text-red-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Temperature</p>
                      <p className="text-sm text-gray-600">{plantData.careRecommendations.temperature}</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">Treatment Plan</h3>
                <p className="text-sm text-gray-700 mb-3">Recommended actions:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {plantData.treatment.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">Recommended Products</h3>
                
                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Fertilizers:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {plantData.fertilizers.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-sm mb-1">Pest Control (if needed):</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {plantData.pesticides.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <button 
                  onClick={resetDiagnosis}
                  className="flex items-center text-blue-600 font-medium"
                >
                  <RefreshCw size={16} className="mr-1" /> New diagnosis
                </button>
                <button className="flex items-center text-green-600 font-medium">
                  View detailed report <FileText size={16} className="ml-1" />
                </button>  
              </div>
            </div>
          </div>
        )}

        {currentTab === 'my-plants' && (
          <div>
            <h2 className="text-xl font-bold mb-4">My Plant Collection</h2>
            <div className="space-y-4">
              {myPlants.map(plant => (
                <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex">
                    <img src={plant.image} alt={plant.name} className="w-20 h-20 object-cover" />
                    <div className="p-3 flex-1">
                      <h3 className="font-medium">{plant.name}</h3>
                      <div className="flex items-center text-sm gap-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                            plant.health === 'Good' ? 'bg-green-500' : 
                            plant.health === 'Needs attention' ? 'bg-orange-500' : 'bg-red-500'
                          }`}></span>
                          <span>{plant.health}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1 text-gray-500" />
                          <span className="text-xs text-gray-500">Last check: {plant.lastCheck}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-3">
                      <button className="text-green-600">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Health Check Reminder Section */}
                  <div className="border-t border-gray-100 bg-gray-50 p-3 flex justify-between items-center">
                    <div>
                      <div className="flex items-center text-sm">
                        <Bell size={14} className={`mr-1 ${plant.nextCheckDue === 'Overdue' ? 'text-red-500' : 'text-blue-500'}`} />
                        <span className="font-medium">Health check:</span>
                        <span className={`ml-1 ${plant.nextCheckDue === 'Overdue' ? 'text-red-500 font-medium' : 'text-gray-600'}`}>
                          {plant.nextCheckDue}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">15-day check cycle</p>
                    </div>
                    <button 
                      className={`p-2 rounded-full ${plant.notifications ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}
                      onClick={() => toggleNotification(plant.id)}
                    >
                      <Bell size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      {/* Footer Navigation */}
      <nav className="bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <button 
            className={`flex flex-col items-center p-2 ${currentTab === 'diagnosis' ? 'text-green-600' : 'text-gray-600'}`}
            onClick={() => setCurrentTab('diagnosis')}
          >
            <Leaf size={20} />
            <span className="text-xs mt-1">Diagnose</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 ${currentTab === 'my-plants' ? 'text-green-600' : 'text-gray-600'}`}
            onClick={() => setCurrentTab('my-plants')}
          >
            <Flower size={20} />
            <span className="text-xs mt-1">My Plants</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-600">
            <Calendar size={20} />
            <span className="text-xs mt-1">Calendar</span>
          </button>
        </div>
      </nav>
      
    </div>
  );
}