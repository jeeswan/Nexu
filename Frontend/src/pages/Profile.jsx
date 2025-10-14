import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts")
  const user = {
    name: 'Jeeswan Bajracharya',
    handle: '@jeeswanbajracharya',
    bio: 'Fullstack developer | CSIT student | Building cool things one bug at a time',
    profile: assets.profile,      // make sure assets.profile is imported
    coverImg: assets.coverimage,  // make sure assets.coverimage is imported
    posts: 24,
    followers: 1200,
    following: 300
  };

  const posts = [
    {id: 1,
      user: "Jeeswan Bajracharya",
      handle: "@jeeswanbajracharya",
      profile: assets.profile,
      content: "Hello world! This is my first post.",
      timestamp: "2h ago",
      likes: 0,
      comments: 0,
      share : 0
    },
    {id: 2,
      user: "Jeeswan Bajracharya",
      handle: "@jeeswanbajracharya",
      profile: assets.profile,
      content: "Just had a great day coding!",
      timestamp: "1h ago",
      likes: 0,
      comments: 0,
      share : 0
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cover Section */}
      <div className="relative w-full h-48 sm:h-60">
        <img
          src={user.coverImg}
          alt="Cover"
          className="w-full h-full object-cover rounded-b-md"
        />

        {/* Profile Image and Details */}
        <div className="absolute -bottom-16 left-6 right-6 flex items-end justify-between">
          <div className="flex items-center gap-4">
            <img
              src={user.profile}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />  
          </div>
          {/* Edit Profile Button */}
          <button className="absolute -bottom-1 right-3 flex items-center gap-2 bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            <FaUserEdit />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-20 px-6 sm:px-12">
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.handle}</p>
        </div>
        <p className="text-gray-700 text-sm mb-4">{user.bio}</p>

        <div className="flex justify-between items-center mb-4">
          {/* Stats */}
          <div className="flex gap-8 text-gray-800 font-medium">
            <div>
              <span className="font-semibold">{user.posts}</span> Posts
            </div>
            <div>
              <span className="font-semibold">{user.followers}</span> Followers
            </div>
            <div>
              <span className="font-semibold">{user.following}</span> Following
            </div>
          </div>
        </div>
      </div>
      {/* Posts and Likes */}
      <div className='flex justify-center mb-6'>
        <div className='flex bg-gray-100 rounded-md p-1 w-full sm:w-3/4'>
          <button
          onClick={() => setActiveTab('posts')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'posts'
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('likes')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'likes'
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Likes
          </button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="w-full sm:w-3/4 mx-auto text-left">
        {activeTab === "posts" ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={post.profile}
                    alt={post.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{post.user}</h4>
                    <p className="text-xs text-gray-500">{post.handle}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{post.content}</p>
                <p className="text-gray-400 text-xs mt-2">{post.timestamp}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No liked posts yet.</p>
        )}
      </div>
    </div>

  )
}

export default Profile
