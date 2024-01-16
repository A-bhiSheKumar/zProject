"use client"
import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import ListPage from '@/components/ListPage';
import { getPosts } from '@/app/api/axios';

// Assuming your post object has properties like id, title, and body
type Post = {
  id: number;
  title: string;
  body: string;
};

function MainDisplay() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((json: Post[]) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <>
    <SearchBar posts={posts} setSearchResults={setSearchResults} />
    <div className='flex items-center justify-center'>
      
      <ListPage searchResults={searchResults} />
    </div>
    </>
   
  );
}

export default MainDisplay;
