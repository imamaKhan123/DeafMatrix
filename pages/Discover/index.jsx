import React, { useState, useEffect } from 'react';
import './styles.css';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import Nav from 'react-bootstrap/Nav';

function Discover() {
  const [blogs, setBlogs] = useState(() => {
    // Retrieve blogs from localStorage on component mount
    const storedBlogs = localStorage.getItem('storedBlogs');
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  useEffect(() => {
    // Fetch data only if there are no blogs stored in localStorage
    if (!blogs.length) {
      fetch('https://deafmatrix.com/api/Courses/')
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          // Store blogs in localStorage
          localStorage.setItem('storedBlogs', JSON.stringify(data));
        })
        .catch((error) => console.error('Error fetching blogs:', error));
    }
  }, [blogs]); // Only fetch data if blogs state is empty

  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = JSON.parse(localStorage.getItem('storedBlogs'));
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.text.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    const allBlogs = JSON.parse(localStorage.getItem('storedBlogs'));
    setBlogs(allBlogs);
  };

  const heading1 = "Discover";
  const heading2 = "What's Up In The Deaf World?";
 
  return (
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
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      {/* Bottom Navigation */}
      <div className='bottom-nav d-flex justify-content-center'>
        <Nav className="mb-3">
          <Nav.Link href="/home">News</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link className='active' href="/discover">Discover</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Discover;
