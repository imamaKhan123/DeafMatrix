import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import CourseList from '../../components/Home/CourseList';
import SearchBar from '../../components/Home/SearchBar';
import Nav from 'react-bootstrap/Nav';
import Header from '../../components/Home/Header';
import './styles.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const cachedCourses = localStorage.getItem('cachedCourses');
    if (cachedCourses) {
      setCourses(JSON.parse(cachedCourses));
    } else {
      fetch('https://deafmatrix.com/api/Courses/')
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          // Cache the course data
          localStorage.setItem('cachedCourses', JSON.stringify(data));
        })
        .catch((error) => console.error('Error fetching courses:', error));
    }
  }, []);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for courses by category
  const handleSearchResults = () => {
    const allCourses = JSON.parse(localStorage.getItem('cachedCourses'));
    const filteredCourses = allCourses.filter((course) =>
      course.text.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setCourses(filteredCourses);
  };

  // Clear search and show all courses
  const handleClearSearch = () => {
    setSearchKey('');
    // Reset to the original course data from cache
    setCourses(JSON.parse(localStorage.getItem('cachedCourses')));
  };

  return (
    <div className='course-container'>
      <Header H1="Courses" />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Course List & Empty View */}
      {!courses.length ? <EmptyList /> : <CourseList courses={courses} />}

      <div className='bottom-nav d-flex justify-content-center'>
        <Nav className="mb-3">
          <Nav.Link href="/home">News</Nav.Link>
          <Nav.Link href="/courses" className='active'>Courses</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default CoursesPage;
