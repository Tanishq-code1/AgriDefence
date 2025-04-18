import React from 'react';
import { 
  Search, 
  BarChart2, 
  Camera, 
  Database, 
  LayoutDashboard, 
  MapPin, 
  Users, 
  Zap,
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Pest Detection',
    description: 'Upload images or use your camera to instantly identify pests and get treatment recommendations.',
    icon: <Camera size={24} className="text-accent-500" />,
  },
  {
    id: 2,
    title: 'Comprehensive Pest Library',
    description: 'Access our extensive database of agricultural pests with detailed information on lifecycle, treatment, and prevention.',
    icon: <Database size={24} className="text-accent-500" />,
  },
  {
    id: 3,
    title: 'Real-time Monitoring',
    description: 'Track pest outbreaks in real-time with our interactive global heatmap powered by satellite data.',
    icon: <MapPin size={24} className="text-accent-500" />,
  },
  {
    id: 4,
    title: 'Farmer Dashboard',
    description: 'Visualize field health, set alerts, and generate reports for sustainable farm management.',
    icon: <LayoutDashboard size={24} className="text-accent-500" />,
  },
  {
    id: 5,
    title: 'Precision Agriculture',
    description: 'Optimize resource usage with drone integration and predictive analytics for targeted pest control.',
    icon: <Zap size={24} className="text-accent-500" />,
  },
  {
    id: 6,
    title: 'Community & Support',
    description: 'Connect with other farmers, agronomists, and experts to share knowledge and best practices.',
    icon: <Users size={24} className="text-accent-500" />,
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Pest Management
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated platform combines AI technology, drone imaging, and expert knowledge to provide comprehensive pest management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};