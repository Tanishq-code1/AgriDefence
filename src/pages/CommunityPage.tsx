import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  MessageSquare,
  Search,
  Clock,
  ThumbsUp,
  MessageCircle,
  Filter,
  X,
} from "lucide-react";

interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: Date;
  content: string;
  likes: number;
  replies: number;
  tags: string[];
  solved?: boolean;
}

const initialForumPosts: ForumPost[] = [
  {
    id: "1",
    title: "Battling Fall Armyworm in organic corn - any natural solutions?",
    author: "Sarah Johnson",
    authorAvatar:
      "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1600",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    content:
      "I've been noticing signs of Fall Armyworm in my organic corn field. Anyone had success with natural predators or organic treatments that won't compromise my certification?",
    likes: 24,
    replies: 15,
    tags: ["Organic", "Corn", "Pest Control"],
    solved: true,
  },
  {
    id: "2",
    title: "Drone recommendations for small farms?",
    author: "Miguel Rodriguez",
    authorAvatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    content:
      "Looking to invest in my first agricultural drone for a 50-acre farm. Any recommendations that won't break the bank but still provide good pest detection?",
    likes: 18,
    replies: 27,
    tags: ["Technology", "Drones", "Small Farms"],
  },
];

const CommunityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [posts, setPosts] = useState<ForumPost[]>(() => {
    const savedPosts = localStorage.getItem("forumPosts");
    return savedPosts
      ? JSON.parse(savedPosts, (key, value) => {
          if (key === "date") return new Date(value);
          return value;
        })
      : initialForumPosts;
  });
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    tags: [] as string[],
    tagInput: "",
  });
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem("forumCurrentUser") || "";
  });

  useEffect(() => {
    localStorage.setItem("forumPosts", JSON.stringify(posts));
    localStorage.setItem("forumCurrentUser", currentUser);
  }, [posts, currentUser]);

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPostData: ForumPost = {
      id: Date.now().toString(),
      title: newPost.title,
      author: newPost.author,
      authorAvatar: "https://www.gravatar.com/avatar/000?d=mp&f=y",
      date: new Date(),
      content: newPost.content,
      likes: 0,
      replies: 0,
      tags: newPost.tags,
    };
    setPosts([newPostData, ...posts]);
    setCurrentUser(newPost.author);
    setShowNewPostForm(false);
    setNewPost({ title: "", content: "", author: "", tags: [], tagInput: "" });
  };

  const handleTagInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newPost.tagInput.trim()) {
      e.preventDefault();
      setNewPost({
        ...newPost,
        tags: [...newPost.tags, newPost.tagInput.trim()],
        tagInput: "",
      });
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Topics" ||
      post.tags.some((tag) => tag === selectedCategory);

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
              Connect with other farmers, agronomists, and experts to share
              knowledge, ask questions, and stay updated on the latest
              sustainable farming practices.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium text-primary-600 border-b-2 border-primary-600`}
              >
                <MessageSquare size={18} className="inline-block mr-2" />
                Discussion Forum
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {[
                    "All Topics",
                    "Pest Control",
                    "Organic",
                    "Technology",
                    "Crop Management",
                    "Weather",
                    "Equipment",
                  ].map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedCategory === category
                          ? "bg-primary-50 text-primary-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
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
                  <button
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
                    onClick={() => setShowNewPostForm(true)}
                  >
                    New Discussion
                  </button>
                </div>

                {showNewPostForm && (
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">New Discussion</h3>
                      <button
                        onClick={() => setShowNewPostForm(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <form onSubmit={handleAddPost}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Title
                        </label>
                        <input
                          required
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          required
                          value={newPost.author}
                          onChange={(e) =>
                            setNewPost({ ...newPost, author: e.target.value })
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Content
                        </label>
                        <textarea
                          required
                          value={newPost.content}
                          onChange={(e) =>
                            setNewPost({
                              ...newPost,
                              content: e.target.value,
                            })
                          }
                          className="w-full p-2 border rounded-md h-32"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Tags (Press Enter to add)
                        </label>
                        <input
                          value={newPost.tagInput}
                          onChange={(e) =>
                            setNewPost({
                              ...newPost,
                              tagInput: e.target.value,
                            })
                          }
                          onKeyDown={handleTagInput}
                          className="w-full p-2 border rounded-md"
                        />
                        <div className="mt-2 flex flex-wrap gap-2">
                          {newPost.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center"
                            >
                              {tag}
                              <button
                                type="button"
                                onClick={() =>
                                  setNewPost({
                                    ...newPost,
                                    tags: newPost.tags.filter(
                                      (_, i) => i !== index
                                    ),
                                  })
                                }
                                className="ml-1 hover:text-red-600"
                              >
                                <X size={14} />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowNewPostForm(false)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                        >
                          Post Discussion
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {post.title}
                              {post.solved && (
                                <span className="ml-2 bg-success-100 text-success-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                  Solved
                                </span>
                              )}
                            </h3>
                            {post.author === currentUser && (
                              <button
                                onClick={() => handleDeletePost(post.id)}
                                className="text-gray-400 hover:text-red-600"
                              >
                                <X size={18} />
                              </button>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span className="font-medium text-gray-700">
                              {post.author}
                            </span>
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{formatDistanceToNow(post.date)} ago</span>
                          </div>
                          <p className="text-gray-700 mb-3 line-clamp-2">
                            {post.content}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                              >
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
