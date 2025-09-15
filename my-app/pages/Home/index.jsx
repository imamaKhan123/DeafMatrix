import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import NewsList from '../../components/Home/NewsList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

const Home = () => {
  const [news, setNews] = useState([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const cachedNews = localStorage.getItem('cachedNews');
        if (cachedNews) {
          setNews(JSON.parse(cachedNews));
        } else {
          const res = await fetch('https://deafmatrix.com/api/News/');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          console.log(data);
          setNews(data);
          // Cache the news data
          localStorage.setItem('cachedNews', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        // Optional: show fallback message or empty array
        setNews([]);
      }
    };
  
    fetchNews();
  }, []);
  

  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allNews = JSON.parse(localStorage.getItem('cachedNews'));
    const filteredBlogs = allNews.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setNews(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    // Reset to the original news data from cache
    setNews(JSON.parse(localStorage.getItem('cachedNews')));
  };

  const heading1 = " News";
  const heading2 = "What's Up In The Deaf World?";

  return (
    <div className="app-container">
      <div className='container-box'>
        {/* Page Header */}
        <Header H1={heading1} H2={heading2} />
  
        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
  
        {/* Blog List & Empty View */}
        {!news.length ? <EmptyList /> : <NewsList News={news} />}
      </div>
  
     
    </div>
  );
  
};

export default Home;
