import React, { useState } from 'react';
import { Camera, Upload, RefreshCw } from 'lucide-react';

const mockPestAnalysis = {
  name: 'Fall Armyworm',
  scientificName: 'Spodoptera frugiperda',
  confidence: 95.7,
  severity: 'High',
  cropImpact: 'Severe leaf damage on corn, can lead to 30-60% yield loss',
  recommendations: [
    'Apply biological controls like Bacillus thuringiensis (Bt)',
    'Consider targeted insecticide application',
    'Implement regular monitoring schedule',
    'Plant trap crops around field perimeter'
  ]
};

export const DemoSection: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setShowResults(false);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 2000);
    }
  };

  const resetDemo = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setShowResults(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try Our AI Pest Detection
          </h2>
          <p className="text-lg text-gray-600">
            Upload an image of your crop to identify pests and get treatment recommendations.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload an Image</h3>
              
              <div className={`h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center mb-6 ${
                previewUrl ? 'border-accent-500 bg-accent-50' : 'border-gray-200 bg-gray-50'
              }`}>
                {!previewUrl ? (
                  <div className="text-center">
                    <Upload size={40} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Drag and drop an image or click to browse</p>
                  </div>
                ) : (
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="image-upload" className="w-full flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                    <Camera size={18} className="mr-2" />
                    Select Image
                  </label>
                  <input
                    id="image-upload"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleUpload}
                    disabled={!selectedFile || isAnalyzing}
                    className={`px-5 py-3 rounded-md text-white font-medium flex items-center justify-center ${
                      !selectedFile || isAnalyzing
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-accent-500 hover:bg-accent-600'
                    }`}
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw size={18} className="mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Image'
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={resetDemo}
                    className="px-5 py-3 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h3>
              
              {!showResults ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                  <img
                    src="https://images.pexels.com/photos/5764255/pexels-photo-5764255.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Farmer inspecting crop"
                    className="w-64 h-48 object-cover rounded-lg mb-4 opacity-50"
                  />
                  <p>Upload an image and click "Analyze Image" to see pest detection results</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Detection Confidence</h4>
                      <p className="text-green-700 font-semibold">{mockPestAnalysis.confidence}%</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-700 font-bold">{Math.round(mockPestAnalysis.confidence)}%</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Identified Pest</h4>
                    <p className="text-xl font-semibold text-accent-700">{mockPestAnalysis.name}</p>
                    <p className="text-sm text-gray-500 italic">{mockPestAnalysis.scientificName}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Infestation Severity</h4>
                    <div className="bg-red-50 text-red-700 py-1 px-3 rounded-full inline-block font-medium">
                      {mockPestAnalysis.severity}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Crop Impact</h4>
                    <p className="text-gray-700">{mockPestAnalysis.cropImpact}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
                    <ul className="space-y-1">
                      {mockPestAnalysis.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent-500 mr-2">•</span>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};