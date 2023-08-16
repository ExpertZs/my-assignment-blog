"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Post = ({ params }) => {
  const [post, setPost] = useState(null);
  const id= params.id;
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`../../data/blogData.json`); // Path to the JSON file
        if (!response.ok) {
          throw new Error('Error fetching posts.');
        }
        const data = await response.json();
        const selectedPost = data.find(item => item.id === id);
        setPost(selectedPost);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading..</div>;
  }

  return (
    <div className="p-10">
      <h1 className="mb-10 fontbold text-lg inline-block bg-blue-700 text-white font-bold p-2">Post</h1>
      <h1 className="fontbold text-lg mb-5">{post.title}</h1>
      <p className='mb-5'>{post.content}</p>
      <p className='mb-5'>{post.date}</p>
    
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10"> <Link href="/blog">Return</Link></button></div>
  );
};

export default Post;
