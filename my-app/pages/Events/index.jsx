import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import Nav from 'react-bootstrap/Nav';
import EventList from '../../components/Home/EventList';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const cachedEvents = localStorage.getItem('cachedEvents');
    if (cachedEvents) {
      setEvents(JSON.parse(cachedEvents));
    } else {
      fetch('https://deafmatrix.com/api/')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEvents(data);
          // Cache the events data
          localStorage.setItem('cachedEvents', JSON.stringify(data));
        })
        .catch((error) => console.error('Error fetching events:', error));
    }
  }, []);

  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for event by title
  const handleSearchResults = () => {
    const allEvents = JSON.parse(localStorage.getItem('cachedEvents'));
    const filteredEvents = allEvents.filter((event) =>
      event.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setEvents(filteredEvents);
  };

  // Clear search and show all events
  const handleClearSearch = () => {
    setSearchKey('');
    // Reset to the original events data from cache
    setEvents(JSON.parse(localStorage.getItem('cachedEvents')));
  };

  const heading1 = "Events";
  const heading2 = "What's On Today?";

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

      {/* Event List & Empty View */}
      {!events.length ? <EmptyList /> : <EventList events={events} />}

    
    </div>
  )
}

export default Events;
