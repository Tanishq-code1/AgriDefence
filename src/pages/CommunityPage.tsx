import React, { useState } from 'react';
import { MessageSquare, Users, Search, Send, User, Clock, ThumbsUp, MessageCircle, Filter } from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
  likes: number;
  replies: number;
  tags: string[];
  solved?: boolean;
}

const forumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Battling Fall Armyworm in organic corn - any natural solutions?',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: '2 days ago',
    content: 'I\'ve been noticing signs of Fall Armyworm in my organic corn field. Anyone had success with natural predators or organic treatments that won\'t compromise my certification?',
    likes: 24,
    replies: 15,
    tags: ['Organic', 'Corn', 'Pest Control'],
    solved: true,
  },
  {
    id: '2',
    title: 'Drone recommendations for small farms?',
    author: 'Miguel Rodriguez',
    authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: '3 days ago',
    content: 'Looking to invest in my first agricultural drone for a 50-acre farm. Any recommendations that won\'t break the bank but still provide good pest detection?',
    likes: 18,
    replies: 27,
    tags: ['Technology', 'Drones', 'Small Farms'],
  },
  {
    id: '3',
    title: 'Unexpected results with AgriGuard AI pest detection',
    author: 'Emily Chen',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: '5 days ago',
    content: 'The AI identified what it thinks is powdery mildew on my tomatoes, but I\'m not convinced. Attaching images for a second opinion from the community.',
    likes: 7,
    replies: 13,
    tags: ['AI Detection', 'Tomatoes', 'Disease'],
  },
  {
    id: '4',
    title: 'Integration with other farm management software?',
    author: 'David Williams',
    authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: '1 week ago',
    content: 'Has anyone successfully integrated AgriGuard AI with other farm management platforms? Looking specifically at compatibility with FarmLogs and Granular.',
    likes: 12,
    replies: 8,
    tags: ['Integration', 'Software', 'Farm Management'],
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Webinar: Sustainable Pest Management Strategies',
    date: 'May 15, 2025',
    time: '2:00 PM EST',
    presenter: 'Dr. Maria Gonzalez, Entomologist',
    attendees: 156,
  },
  {
    id: '2',
    title: 'Virtual Workshop: Getting Started with Agricultural Drones',
    date: 'May 22, 2025',
    time: '10:00 AM EST',
    presenter: 'James Wilson, Precision Ag Specialist',
    attendees: 89,
  },
  {
    id: '3',
    title: 'Expert Q&A: Climate Change and Pest Migration Patterns',
    date: 'June 5, 2025',
    time: '3:00 PM EST',
    presenter: 'Dr. Robert Chen, Climate Scientist',
    attendees: 124,
  },
];

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forum' | 'events'>('forum');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = forumPosts.filter((post) => {
    // Search filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'All Topics' || 
                            post.tags.some(tag => tag === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community & Support
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with other farmers, agronomists, and experts to share knowledge, ask questions, and stay updated on the latest sustainable farming practices.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'forum'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('forum')}
              >
                <MessageSquare size={18} className="inline-block mr-2" />
                Discussion Forum
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'events'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('events')}
              >
                <Users size={18} className="inline-block mr-2" />
                Upcoming Events
              </button>
            </div>
          </div>

          {activeTab === 'forum' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {['All Topics', 'Pest Control', 'Organic', 'Technology', 'Crop Management', 'Weather', 'Equipment'].map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                          selectedCategory === category
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Community Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Active Members</p>
                      <p className="text-xl font-bold text-gray-900">5,723</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Topics Discussed</p>
                      <p className="text-xl font-bold text-gray-900">1,482</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Solutions Shared</p>
                      <p className="text-xl font-bold text-gray-900">3,951</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <Filter size={18} className="text-gray-500" />
                      <span className="text-gray-700">Filter by:</span>
                      <select className="border-none bg-gray-100 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500">
                        <option>Most Recent</option>
                        <option>Most Popular</option>
                        <option>Most Replies</option>
                        <option>Solved Only</option>
                      </select>
                    </div>
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors">
                      New Discussion
                    </button>
                  </div>

                  <div className="space-y-4">
                    {filteredPosts.length > 0 ? (
                      filteredPosts.map((post) => (
                        <div key={post.id} className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                          <div className="flex items-start space-x-4">
                            <img
                              src={post.authorAvatar}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                  {post.title}
                                  {post.solved && (
                                    <span className="ml-2 bg-success-100 text-success-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                      Solved
                                    </span>
                                  )}
                                </h3>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span className="font-medium text-gray-700">{post.author}</span>
                                <span className="mx-2">•</span>
                                <Clock size={14} className="mr-1" />
                                <span>{post.date}</span>
                              </div>
                              <p className="text-gray-700 mb-3 line-clamp-2">{post.content}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                  <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <button className="flex items-center hover:text-primary-600 mr-4">
                                  <ThumbsUp size={14} className="mr-1" />
                                  <span>{post.likes}</span>
                                </button>
                                <button className="flex items-center hover:text-primary-600">
                                  <MessageCircle size={14} className="mr-1" />
                                  <span>{post.replies} replies</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">No discussions found matching your criteria.</p>
                        <button
                          className="mt-4 px-4 py-2 bg-primary-50 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-100 transition-colors"
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('All Topics');
                          }}
                        >
                          Reset Filters
                        </button>
                      </div>
                    )}
                  </div>

                  {filteredPosts.length > 0 && (
                    <div className="mt-6 flex justify-center">
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors">
                        Load More Discussions
                      </button>
                    </div>
                  )}
                </div>

                {/* Chatbot */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Ask AgriBot</h3>
                    <span className="bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded-full font-medium">
                      AI Powered
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Have a quick question about pest management? Our AI assistant can help with basic troubleshooting and advice.
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask a question about pest control..."
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-600 hover:text-primary-700">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-3 sm:space-x-4">
                            <div className="flex items-center mb-1 sm:mb-0">
                              <Clock size={14} className="mr-1" />
                              <span>{event.date}, {event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              <span>{event.presenter}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-primary-600">
                            <Users size={14} className="mr-1" />
                            <span>{event.attendees} attendees registered</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors">
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Featured Webinar</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="Webinar thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Pest Detection Techniques for Sustainable Farming</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Join Dr. Lisa Martinez as she explains cutting-edge approaches to early pest detection that minimize environmental impact.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <Clock size={14} className="inline-block mr-1" />
                      May 10, 2025 • 1:00 PM EST
                    </div>
                    <button className="px-3 py-1 bg-primary-50 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-100 transition-colors">
                      Watch Preview
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Expert Q&A Sessions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Expert avatar"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">Dr. James Wilson</h4>
                        <p className="text-sm text-gray-500 mb-1">Entomologist, Cornell University</p>
                        <p className="text-xs text-primary-600">June 1, 2025 • 3:00 PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                      <img 
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Expert avatar"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">Dr. Emily Rodriguez</h4>
                        <p className="text-sm text-gray-500 mb-1">Sustainable Agriculture Researcher</p>
                        <p className="text-xs text-primary-600">June 15, 2025 • 2:00 PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                      <img 
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Expert avatar"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                        <p className="text-sm text-gray-500 mb-1">Organic Farming Specialist</p>
                        <p className="text-xs text-primary-600">June 22, 2025 • 1:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      View All Upcoming Q&A Sessions
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-10 md:px-12 md:py-12 md:flex md:items-center md:justify-between">
                  <div className="mb-6 md:mb-0 md:max-w-lg">
                    <h2 className="text-2xl font-bold text-white mb-3">Propose a Webinar or Workshop</h2>
                    <p className="text-white/80">
                      Are you an expert in sustainable agriculture or pest management? Share your knowledge with our community by hosting a session.
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-white text-secondary-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Submit Proposal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;