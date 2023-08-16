"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('../../data/blogData.json'); 
        if (!response.ok) {
          throw new Error('Error fetching posts.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="p-5">
     
        <h1 className="mb-10 fontbold text-lg inline-block bg-blue-700 text-white font-bold p-2">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li className="underline mb-5 underline-offset-4" key={post.id}>
              <Link href={`/blog/${post.id}`}><h2>{post.id} .  {post.title}</h2></Link>
            </li>
          ))}
        </ul>
     
    </div>
  );
};

export default Blog;
