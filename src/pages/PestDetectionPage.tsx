import React, { useState } from 'react';
import { Camera, Upload, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

const PestDetectionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'camera'>('upload');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAnalysisComplete(false);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile || activeTab === 'camera') {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
    }
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setAnalysisComplete(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Pest Detection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload an image or use your camera to instantly identify crop pests and get detailed treatment recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'upload'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('upload')}
              >
                <Upload size={18} className="inline-block mr-2" />
                Upload Image
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'camera'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('camera')}
              >
                <Camera size={18} className="inline-block mr-2" />
                Use Camera
              </button>
            </div>

            <div className="p-6 md:p-8">
              {activeTab === 'upload' && (
                <div>
                  <div 
                    className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center h-64 mb-6 ${
                      previewUrl ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    {!previewUrl ? (
                      <div className="text-center p-6">
                        <Upload size={40} className="mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-500 mb-2">Drag and drop an image or click to browse</p>
                        <p className="text-xs text-gray-400">Supported formats: JPG, PNG, GIF (Max 10MB)</p>
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
                        <Upload size={18} className="mr-2" />
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
                        onClick={handleAnalyze}
                        disabled={!selectedFile || isAnalyzing}
                        className={`px-5 py-3 rounded-md text-white font-medium flex items-center justify-center ${
                          !selectedFile || isAnalyzing
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-primary-600 hover:bg-primary-700'
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
                        onClick={resetAnalysis}
                        className="px-5 py-3 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'camera' && (
                <div className="text-center py-16">
                  <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-6">Camera access is simulated in this demo.</p>
                  <button
                    type="button"
                    className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium inline-flex items-center"
                  >
                    <Camera size={18} className="mr-2" />
                    Launch Camera
                  </button>
                </div>
              )}
            </div>
          </div>

          {analysisComplete && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden animate-scale-in">
              <div className="border-b px-6 py-4 bg-gray-50">
                <h3 className="font-semibold text-gray-900">Analysis Results</h3>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <CheckCircle size={20} className="text-success-500 mr-2" />
                      <h4 className="font-medium text-lg">Detected Pest: Fall Armyworm</h4>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Scientific Name</h5>
                        <p className="text-gray-900">Spodoptera frugiperda</p>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Detection Confidence</h5>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div className="bg-success-500 h-2.5 rounded-full" style={{width: "96%"}}></div>
                        </div>
                        <p className="text-sm text-gray-700">96% confident</p>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Infestation Severity</h5>
                        <div className="flex items-center">
                          <span className="bg-warning-100 text-warning-700 text-sm px-3 py-1 rounded-full font-medium mr-2">
                            Moderate
                          </span>
                          <AlertTriangle size={16} className="text-warning-500" />
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Affected Crops</h5>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Corn</span>
                          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Sorghum</span>
                          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Cotton</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-lg mb-4">Treatment Recommendations</h4>
                    <ul className="space-y-3">
                      <li className="bg-success-50 p-3 rounded-lg">
                        <p className="font-medium text-success-700 mb-1">Biological Control</p>
                        <p className="text-sm text-gray-700">Release natural predators like Trichogramma wasps to control egg populations.</p>
                      </li>
                      <li className="bg-primary-50 p-3 rounded-lg">
                        <p className="font-medium text-primary-700 mb-1">Crop Management</p>
                        <p className="text-sm text-gray-700">Implement crop rotation with non-host plants to break the pest lifecycle.</p>
                      </li>
                      <li className="bg-warning-50 p-3 rounded-lg">
                        <p className="font-medium text-warning-700 mb-1">Chemical Control (if necessary)</p>
                        <p className="text-sm text-gray-700">Apply targeted insecticides containing Spinosad or Bt formulations. Follow recommended rates.</p>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button className="w-full px-4 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-colors">
                        View Detailed Pest Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PestDetectionPage;