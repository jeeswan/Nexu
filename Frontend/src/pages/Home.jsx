import React, { useState } from 'react'
import assets from '../assets/assets'
import { FaHeart, FaShare, FaComment } from 'react-icons/fa';

const Home = () => {
    const [posts, setPosts] = useState([
        {
        id: 1,
        username: "Sarah Chen",
        handle: "@sarahchen",
        profilePic: assets.profile1,
        content: "Just launched my new project! Really excited to share this with everyone. Building in public has been such an amazing journey. 🚀",
        timestamp: "2h ago",
        likes: 0,
        comments: 0,
        },
        {
        id: 2,
        username: "Sarah Chen",
        handle: "@sarahchen",
        profilePic: assets.profile2,
        content: "hi",
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        },
    ]);

    const [newPost, setNewPost] = useState("");
    const handlePost = () => {
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            username: "You",
            handle: "@you",
            profilePic: assets.profile,
            content: newPost,
            timestamp: "Just now",
            likes: 0,
            comments: 0,
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };
  return (
    <div>
      {/* New Post Box */}
      <div className='flex gap-3 p-4 bg-gray-100 rounded-lg shadow mb-5'>
        <img src={assets.profile} alt="Profile" className='w-10 h-10 rounded-full'/>
        <div className='flex-1 flex flex-col gap-2'>
            <textarea className='w-full p-2 rounded-lg bg-white resize-none focus:outline-none'
                placeholder="Say Something..."
                value={newPost}
                onClick={(e) => setNewPost(e.target.value)}
                rows={3}/>
            <div className='flex justify-end'>
                <button onClick={handlePost}
                className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>Post</button>
            </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className='space-y-4'>
        {posts.map((post) => (
            <div key={post.id} className='bg-gray-100 p-4 rounded-lg shadow'>
                {/* Post Header */}
                <div className='flex items-center gap-3 mb-2'>
                    <img src={post.profilePic} alt={post.username} className='w-10 h-10 rounded-full' />
                    <div>
                        <p className='font-semibold'>{post.username}<span className="text-gray-500 ">{post.handle} · {post.timestamp}</span></p>
                    </div>
                </div>
                {/* Post Content */}
                <p className='mb-3'>{post.content}</p>
                {/* Post Actions */}
                <div className='flex gap-6 text-gray-500 dark:text-gray-400'>
                    <div className='flex items-center gap-1'><FaHeart /> {post.likes}</div>
                    <div className='flex items-center gap-1'><FaComment /> {post.comments}</div>
                    <div className='flex items-center gap-1'><FaShare /></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}


export default Home
