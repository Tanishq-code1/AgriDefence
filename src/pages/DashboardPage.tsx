import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart2,
  Map,
  Settings,
  Bell,
  Calendar as CalendarIcon, // Renamed import
  AlertTriangle,
  RefreshCcw,
  Download,
  CheckCircle,
  XCircle,
  Plus,
  Filter,
  Search,
} from "lucide-react";
import {
  BarChart,
  LineChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Calendar from "react-calendar"; // Separate calendar component
import "react-calendar/dist/Calendar.css";

type Field = {
  id: number;
  name: string;
  crop: string;
  size: string;
  status: "Healthy" | "Warning" | "Alert";
  risk: "Low" | "Medium" | "High";
  lastInspection: string;
};

type Alert = {
  id: number;
  type: "warning" | "info" | "success" | "error";
  message: string;
  time: string;
  resolved: boolean;
};

const mockFieldData: Field[] = [
  {
    id: 1,
    name: "North Field",
    crop: "Corn",
    size: "120 acres",
    status: "Healthy",
    risk: "Low",
    lastInspection: "2024-03-15",
  },
  {
    id: 2,
    name: "South Field",
    crop: "Soybeans",
    size: "85 acres",
    status: "Warning",
    risk: "Medium",
    lastInspection: "2024-03-14",
  },
  {
    id: 3,
    name: "East Field",
    crop: "Wheat",
    size: "95 acres",
    status: "Healthy",
    risk: "Low",
    lastInspection: "2024-03-13",
  },
  {
    id: 4,
    name: "West Field",
    crop: "Cotton",
    size: "110 acres",
    status: "Alert",
    risk: "High",
    lastInspection: "2024-03-12",
  },
  {
    id: 5,
    name: "Central Field",
    crop: "Rice",
    size: "75 acres",
    status: "Healthy",
    risk: "Low",
    lastInspection: "2024-03-11",
  },
  {
    id: 6,
    name: "Hilltop Field",
    crop: "Barley",
    size: "65 acres",
    status: "Warning",
    risk: "Medium",
    lastInspection: "2024-03-10",
  },
];

const mockAlerts: Alert[] = [
  {
    id: 1,
    type: "warning",
    message: "Possible Fall Armyworm infestation in West Field",
    time: "2 hours ago",
    resolved: false,
  },
  {
    id: 2,
    type: "info",
    message: "Weather forecast: Rain expected in 3 days",
    time: "5 hours ago",
    resolved: false,
  },
  {
    id: 3,
    type: "success",
    message: "South Field treatment completed successfully",
    time: "1 day ago",
    resolved: true,
  },
  {
    id: 4,
    type: "error",
    message: "High risk of aphid outbreak in South Field",
    time: "1 day ago",
    resolved: false,
  },
];

// Chart Data
const pesticideData = [
  { month: "Jan", usage: 45 },
  { month: "Feb", usage: 38 },
  { month: "Mar", usage: 29 },
  { month: "Apr", usage: 22 },
  { month: "May", usage: 18 },
  { month: "Jun", usage: 12 },
];

const yieldData = [
  { week: "W1", forecast: 80, actual: 78 },
  { week: "W2", forecast: 82, actual: 85 },
  { week: "W3", forecast: 85, actual: 82 },
  { week: "W4", forecast: 88, actual: 90 },
];

const pestData = [
  { region: "North", alerts: 2 },
  { region: "South", alerts: 5 },
  { region: "East", alerts: 1 },
  { region: "West", alerts: 4 },
];

const fieldStatusData = [
  { name: "Healthy", value: 65, color: "#10b981" },
  { name: "At Risk", value: 20, color: "#f59e0b" },
  { name: "Infected", value: 15, color: "#ef4444" },
];

const CalendarView = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm">
      <h3 className="font-medium text-gray-900 mb-4">Farming Calendar</h3>
      <Calendar
        onChange={onChange}
        value={value}
        className="react-calendar border-0 rounded-lg"
      />
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<Field | null>(null);
  const [showNewFieldForm, setShowNewFieldForm] = useState(false);
  const [newField, setNewField] = useState<Partial<Field>>({
    name: "",
    crop: "",
    size: "",
    status: "Healthy",
    risk: "Low",
  });

  const handleViewDetails = (field: Field) => {
    setSelectedField(field);
  };

  const handleResolveAlert = (alertId: number) => {
    console.log("Resolved alert:", alertId);
  };

  const handleAddField = () => {
    console.log("Adding new field:", newField);
    setShowNewFieldForm(false);
    setNewField({
      name: "",
      crop: "",
      size: "",
      status: "Healthy",
      risk: "Low",
    });
  };

  const filteredFields = mockFieldData.filter(
    (field) =>
      field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      field.crop.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-sm text-gray-500 mb-2">Total Fields</h3>
                <div className="text-2xl font-bold text-gray-900">6</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-sm text-gray-500 mb-2">Active Alerts</h3>
                <div className="text-2xl font-bold text-error-600">3</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-sm text-gray-500 mb-2">Crops Growing</h3>
                <div className="text-2xl font-bold text-success-600">5</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-sm text-gray-500 mb-2">Avg. Yield</h3>
                <div className="text-2xl font-bold text-primary-600">82%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PesticideReductionChart />
              <YieldComparisonChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FieldStatusChart />
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-medium text-gray-900 mb-4">
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {mockAlerts.slice(0, 3).map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {alert.time}
                        </p>
                      </div>
                      {!alert.resolved && (
                        <button
                          onClick={() => handleResolveAlert(alert.id)}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200"
                        >
                          Mark Resolved
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case "fields":
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search fields..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  <Filter size={16} /> Filter
                </button>
                <button
                  onClick={() => setShowNewFieldForm(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700"
                >
                  <Plus size={16} /> Add Field
                </button>
              </div>
            </div>

            {showNewFieldForm && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-4">Add New Field</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Field Name"
                    className="p-2 border rounded"
                    value={newField.name}
                    onChange={(e) =>
                      setNewField({ ...newField, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Crop Type"
                    className="p-2 border rounded"
                    value={newField.crop}
                    onChange={(e) =>
                      setNewField({ ...newField, crop: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Size (acres)"
                    className="p-2 border rounded"
                    value={newField.size}
                    onChange={(e) =>
                      setNewField({ ...newField, size: e.target.value })
                    }
                  />
                  <select
                    className="p-2 border rounded"
                    value={newField.status}
                    onChange={(e) =>
                      setNewField({
                        ...newField,
                        status: e.target.value as Field["status"],
                      })
                    }
                  >
                    <option value="Healthy">Healthy</option>
                    <option value="Warning">Warning</option>
                    <option value="Alert">Alert</option>
                  </select>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => setShowNewFieldForm(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddField}
                    className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
                  >
                    Save Field
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Field
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Crop
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredFields.map((field) => (
                        <tr key={field.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {field.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {field.crop}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                field.status === "Healthy"
                                  ? "bg-success-100 text-success-800"
                                  : field.status === "Warning"
                                  ? "bg-warning-100 text-warning-800"
                                  : "bg-error-100 text-error-800"
                              }`}
                            >
                              {field.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleViewDetails(field)}
                              className="text-primary-600 hover:text-primary-900 text-sm"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {selectedField && (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    {selectedField.name} Details
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <span className="font-medium">Crop:</span>{" "}
                      {selectedField.crop}
                    </p>
                    <p>
                      <span className="font-medium">Size:</span>{" "}
                      {selectedField.size}
                    </p>
                    <p>
                      <span className="font-medium">Last Inspection:</span>{" "}
                      {selectedField.lastInspection}
                    </p>
                    <p>
                      <span className="font-medium">Risk Level:</span>
                      <span
                        className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedField.risk === "Low"
                            ? "bg-success-100 text-success-800"
                            : selectedField.risk === "Medium"
                            ? "bg-warning-100 text-warning-800"
                            : "bg-error-100 text-error-800"
                        }`}
                      >
                        {selectedField.risk}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <YieldComparisonChart />
            <PestAlertChart />
            <FieldStatusChart />
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-4">
                Crop Distribution
              </h3>
              <div className="flex flex-wrap gap-4">
                {Array.from(new Set(mockFieldData.map((f) => f.crop))).map(
                  (crop) => (
                    <div key={crop} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary-600"></div>
                      <span className="text-sm text-gray-700">{crop}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );

      case "calendar":
        return <CalendarView />;

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Smart Farm Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, Farmer! Here's your farm overview.
            </p>
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
          {["overview", "fields", "analytics", "calendar"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "overview" && (
                <LayoutDashboard size={16} className="mr-2" />
              )}
              {tab === "fields" && <Map size={16} className="mr-2" />}
              {tab === "analytics" && <BarChart2 size={16} className="mr-2" />}
              {tab === "calendar" && (
                <CalendarIcon size={16} className="mr-2" />
              )}{" "}
              {/* Updated icon name */}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

// Reused chart components with fixed names
const PesticideReductionChart = () => (
  <div className="p-4 bg-white rounded-xl shadow-sm h-64">
    <h3 className="font-medium text-gray-900 mb-2">
      Pesticide Reduction Over Time
    </h3>
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={pesticideData}>
        <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <Line
          type="monotone"
          dataKey="usage"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: "#3b82f6", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const YieldComparisonChart = () => (
  <div className="p-4 bg-white rounded-xl shadow-sm h-64">
    <h3 className="font-medium text-gray-900 mb-2">Yield Forecast vs Actual</h3>
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={yieldData}>
        <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
        <XAxis dataKey="week" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="#8b5cf6"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ fill: "#10b981", strokeWidth: 2 }}
        />
        <Legend
          wrapperStyle={{ paddingTop: "10px" }}
          formatter={(value) => (
            <span className="text-gray-600 text-sm">{value}</span>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const PestAlertChart = () => (
  <div className="p-4 bg-white rounded-xl shadow-sm h-64">
    <h3 className="font-medium text-gray-900 mb-2">
      Active Pest Alerts by Region
    </h3>
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={pestData}>
        <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
        <XAxis dataKey="region" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <Bar dataKey="alerts" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const FieldStatusChart = () => (
  <div className="p-4 bg-white rounded-xl shadow-sm h-96">
    <h3 className="font-medium text-gray-900 mb-2">Field Status Overview</h3>
    <ResponsiveContainer width="100%" height="80%">
      <PieChart>
        <Pie
          data={fieldStatusData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {fieldStatusData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          formatter={(value) => {
            const entry = fieldStatusData.find((d) => d.name === value);
            return (
              <span className="text-sm flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: entry?.color }}
                />
                {value}
              </span>
            );
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          formatter={(value) => `${value}%`}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default DashboardPage;
