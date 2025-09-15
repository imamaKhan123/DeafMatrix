import React, { useState, useEffect } from 'react';
import Header from '../../components/Home/Header';
import EmptyList from '../../components/common/EmptyList';
import SearchBar from '../../components/Home/SearchBar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';
import Chip from '../../components/common/Chip';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const API_KEY = 'YOUR_PEXELS_API_KEY'; // Replace with your Pexels API key

  // Fetch videos from Pexels
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const cachedVideos = localStorage.getItem('cachedVideos');
        if (cachedVideos) {
          setFilms(JSON.parse(cachedVideos));
        } else {
          const res = await fetch(
            `https://api.pexels.com/videos/search?query=movies&per_page=20`,
            { headers: { Authorization: API_KEY } }
          );
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
          setFilms(data.videos);
          console.log(data)
          localStorage.setItem('cachedVideos', JSON.stringify(data.videos));
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setFilms([]);
      }
    };
    fetchVideos();
  }, []);

  // Search films
  const handleSearch = (e) => {
    e.preventDefault();
    const cached = JSON.parse(localStorage.getItem('cachedVideos')) || [];
    const filtered = cached.filter((film) =>
      film.user.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setFilms(filtered);
  };

  const handleClearSearch = () => {
    setSearchKey('');
    setFilms(JSON.parse(localStorage.getItem('cachedVideos')));
  };

  const heading1 = 'Films';

  return (
    <div>
      <div className="container-box scrollable">
        <Header H1={heading1} />

        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearch}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* Film Cards */}
        {!films.length ? (
          <EmptyList />
        ) : (
          <div className="films-grid">
            {films.map((film) => (
              <div key={film.id} className="film-card">
                <video
                  width="100%"
                  controls
                  src={film.video_files[0]?.link}
                  poster={film.image}
                ></video>
              
                <Chip label={film.user.name} />
      <h3>{film.user.name}</h3>
      <p className=''>  Watch a {film.duration}-second video by {film.user.name}.
      </p>
      <footer>
       
      </footer>
              </div>
            ))}
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Films;
