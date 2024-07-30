import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Posts[]>([]);

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setFilteredPosts(response.data); // Initially set filteredPosts to all posts
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) || 
      post.id.toString() === query
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="App">
      <h1>Search list feature</h1>
      <input 
        type='search' 
        onChange={handleSearch} 
        value={searchQuery} 
        placeholder='search blog posts...'
      />
      <ul>
        {filteredPosts.map((post:Posts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
