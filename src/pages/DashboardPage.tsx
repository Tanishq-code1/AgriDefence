import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  Map, 
  Settings, 
  Bell, 
  Calendar, 
  Droplets, 
  Wind, 
  ThermometerSun, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Bug,
  RefreshCcw,
  Download,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const mockFieldData = [
  { id: 1, name: 'North Field', crop: 'Corn', size: '120 acres', status: 'Healthy', risk: 'Low' },
  { id: 2, name: 'South Field', crop: 'Soybeans', size: '85 acres', status: 'Warning', risk: 'Medium' },
  { id: 3, name: 'East Field', crop: 'Wheat', size: '95 acres', status: 'Healthy', risk: 'Low' },
  { id: 4, name: 'West Field', crop: 'Cotton', size: '110 acres', status: 'Alert', risk: 'High' },
];

const mockAlerts = [
  { id: 1, type: 'warning', message: 'Possible Fall Armyworm infestation in West Field', time: '2 hours ago' },
  { id: 2, type: 'info', message: 'Weather forecast: Rain expected in 3 days', time: '5 hours ago' },
  { id: 3, type: 'success', message: 'South Field treatment completed successfully', time: '1 day ago' },
  { id: 4, type: 'error', message: 'High risk of aphid outbreak in South Field', time: '1 day ago' },
];

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderWeatherWidget = () => (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-900">Weather Forecast</h3>
        <span className="text-sm text-gray-500">Farmington, CA</span>
      </div>
      <div className="flex items-center justify-around">
        <div className="text-center">
          <p className="text-sm text-gray-500">Today</p>
          <ThermometerSun size={28} className="mx-auto my-2 text-warning-500" />
          <p className="font-medium">78°F</p>
          <p className="text-xs text-success-600">Sunny</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Tomorrow</p>
          <Cloud size={28} className="mx-auto my-2 text-secondary-500" />
          <p className="font-medium">72°F</p>
          <p className="text-xs text-gray-600">Cloudy</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Wed</p>
          <Droplets size={28} className="mx-auto my-2 text-accent-500" />
          <p className="font-medium">68°F</p>
          <p className="text-xs text-accent-600">Rain</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Thu</p>
          <Wind size={28} className="mx-auto my-2 text-gray-500" />
          <p className="font-medium">70°F</p>
          <p className="text-xs text-gray-600">Windy</p>
        </div>
      </div>
    </div>
  );

  const renderSustainabilityScore = () => (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium text-gray-900 mb-2">Sustainability Score</h3>
      <div className="flex items-center">
        <div className="w-3/4 mr-4">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-success-500 to-primary-500 rounded-full" style={{width: '72%'}}></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">0</span>
            <span className="text-xs text-gray-500">50</span>
            <span className="text-xs text-gray-500">100</span>
          </div>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-2xl font-bold text-primary-600">72</p>
          <p className="text-xs text-gray-500">Good</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between text-xs">
        <div className="flex items-center">
          <TrendingUp size={14} className="text-success-500 mr-1" />
          <span className="text-success-600">+5 from last month</span>
        </div>
        <button className="text-primary-600 hover:underline">View Details</button>
      </div>
    </div>
  );

  const renderPestAlert = () => (
    <div className="bg-error-50 rounded-xl shadow-sm p-4">
      <div className="flex items-start">
        <AlertTriangle size={24} className="text-error-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-error-700 mb-1">High Alert: Pest Detected</h3>
          <p className="text-sm text-gray-700 mb-2">
            Fall Armyworm infestation detected in West Field (Section 3). Immediate action recommended.
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-white text-sm font-medium text-error-700 rounded border border-error-200 hover:bg-error-50">
              View Details
            </button>
            <button className="px-3 py-1 bg-error-600 text-sm font-medium text-white rounded hover:bg-error-700">
              Take Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Pesticide Reduction</p>
            <p className="text-2xl font-bold text-gray-900">-68%</p>
          </div>
          <div className="p-2 bg-success-100 rounded-lg">
            <TrendingDown size={20} className="text-success-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <TrendingDown size={14} className="text-success-500 mr-1" />
          <span className="text-xs text-success-600">12% more than last season</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Yield Forecast</p>
            <p className="text-2xl font-bold text-gray-900">+22%</p>
          </div>
          <div className="p-2 bg-primary-100 rounded-lg">
            <TrendingUp size={20} className="text-primary-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <TrendingUp size={14} className="text-primary-500 mr-1" />
          <span className="text-xs text-primary-600">8% increase projected</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Active Pest Alerts</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
          </div>
          <div className="p-2 bg-warning-100 rounded-lg">
            <Bug size={20} className="text-warning-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <TrendingDown size={14} className="text-success-500 mr-1" />
          <span className="text-xs text-success-600">2 fewer than last week</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Fields Monitored</p>
            <p className="text-2xl font-bold text-gray-900">4/4</p>
          </div>
          <div className="p-2 bg-accent-100 rounded-lg">
            <CheckCircle size={20} className="text-accent-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <RefreshCcw size={14} className="text-accent-500 mr-1" />
          <span className="text-xs text-accent-600">Last update: 2 hours ago</span>
        </div>
      </div>
    </div>
  );

  const renderFieldTable = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h3 className="font-medium text-gray-900">Field Status</h3>
        <div className="flex space-x-2">
          <button className="p-1 text-gray-500 hover:text-primary-600">
            <RefreshCcw size={16} />
          </button>
          <button className="p-1 text-gray-500 hover:text-primary-600">
            <Download size={16} />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockFieldData.map((field) => (
              <tr key={field.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{field.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {field.crop}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {field.size}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    field.status === 'Healthy' ? 'bg-success-100 text-success-800' :
                    field.status === 'Warning' ? 'bg-warning-100 text-warning-800' :
                    'bg-error-100 text-error-800'
                  }`}>
                    {field.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    field.risk === 'Low' ? 'bg-success-100 text-success-800' :
                    field.risk === 'Medium' ? 'bg-warning-100 text-warning-800' :
                    'bg-error-100 text-error-800'
                  }`}>
                    {field.risk}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary-600 hover:text-primary-900">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h3 className="font-medium text-gray-900">Recent Alerts</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="px-6 py-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {alert.type === 'warning' && <AlertTriangle size={18} className="text-warning-500" />}
                {alert.type === 'info' && <Bell size={18} className="text-accent-500" />}
                {alert.type === 'success' && <CheckCircle size={18} className="text-success-500" />}
                {alert.type === 'error' && <XCircle size={18} className="text-error-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-1">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
              <div className="ml-3">
                <button className="text-xs text-primary-600 hover:text-primary-800">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 bg-gray-50 text-center">
        <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
          View All Alerts
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Farmer Dashboard</h1>
            <p className="text-gray-600">Welcome back, John! Here's your farm overview.</p>
          </div>
          <div className="flex space-x-3">
            <button className="p-2 bg-white rounded-full text-gray-600 hover:text-primary-600 hover:bg-gray-50">
              <Bell size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-600 hover:text-primary-600 hover:bg-gray-50">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-1 bg-white rounded-lg shadow-sm mb-6 overflow-x-auto">
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${
              activeTab === 'overview' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={16} className="mr-2" />
            Overview
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${
              activeTab === 'fields' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('fields')}
          >
            <Map size={16} className="mr-2" />
            Fields
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${
              activeTab === 'analytics' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart2 size={16} className="mr-2" />
            Analytics
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${
              activeTab === 'calendar' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('calendar')}
          >
            <Calendar size={16} className="mr-2" />
            Calendar
          </button>
        </div>

        <div className="space-y-6">
          {/* Stats Row */}
          {renderStatCards()}

          {/* Alert Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {renderPestAlert()}
            </div>
            <div>
              {renderWeatherWidget()}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {renderFieldTable()}
            </div>
            <div>
              <div className="space-y-6">
                {renderSustainabilityScore()}
                {renderAlerts()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// This component is needed for the Weather widget
const Cloud = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

export default DashboardPage;