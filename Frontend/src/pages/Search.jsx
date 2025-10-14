import React from 'react'
import { useState } from 'react'
import { FaSearch, FaUserPlus } from 'react-icons/fa'
import assets from '../assets/assets'

const Search = () => {
  const [search, setSearch] = React.useState("")
  const [activeTab, setActiveTab] = useState("users")

  const users = [
    {
      id: 1,
      name: 'John Doe',
      handle: '@johndoe',
      bio: 'Fullstack dev exploring the digital wilderness.',
      photo: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      handle: '@janesmith',
      bio: 'UI/UX designer who drinks too much coffee.',
      photo: 'https://i.pravatar.cc/40?img=2',
    },
    {
      id: 3,
      name: 'Alex Carter',
      handle: '@alexcarter',
      bio: '',
      photo: 'https://i.pravatar.cc/40?img=3',
    },
  ];

  const posts = [
    { id: 1, user: "John Doe", content: "Hello world!", timestamp: "2h ago" },
    { id: 2, user: "Jane Smith", content: "Just had a great day!", timestamp: "1h ago" },
    { id: 3, user: "Alice Johnson", content: "Loving this new app!", timestamp: "30m ago" },
  ]

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.handle.toLowerCase().includes(search.toLowerCase())
  )

  const filteredPosts = posts.filter(
    (post) => post.user.toLowerCase().includes(search.toLowerCase()) || 
    post.content.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div className='bg-white py-4'>
      {/* Search Bar */}
      <div className='text-center mb-6'>
        <div className='inline-flex text-center justify-center border border-gray-400 px-5 p-2 rounded-md w-full sm:w-3/4'>
          <FaSearch size={18} className='mr-2 text-gray-500'/>
          <input value={search} className='flex-1 outline-none bg-transparent text-sm text-gray-700' type='text' placeholder='Search users...' onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
      
      {/* Tab Bar */}
      <div className='flex justify-center mb-6'>
        <div className='flex bg-gray-100 rounded-md p-1 w-full sm:w-3/4'>
          <button
          onClick={() => setActiveTab('users')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'users'
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Users
          </button>
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
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-3/4 mx-auto text-left">
        {activeTab === 'users' ? (
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id} 
                className="flex items-center justify-between border p-2 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.handle}</p>
                    {user.bio && (
                      <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                        {user.bio}
                      </p>
                    )}
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-sm text-sm font-medium hover:bg-blue-600 transition">
                  <FaUserPlus className="mr-1" />
                  Follow
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border p-3 rounded-md hover:bg-gray-50 transition"
              >
                <p className="font-semibold text-gray-800">{post.user}</p>
                <p className="text-gray-600 text-sm mt-1">{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
