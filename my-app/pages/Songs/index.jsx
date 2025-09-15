import React, { useState, useEffect } from 'react';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import EmptyList from '../../components/common/EmptyList';
import Nav from 'react-bootstrap/Nav';
import SongItem from './SongItem';
import './styles.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  // Fetch songs from iTunes API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const cachedSongs = localStorage.getItem('cachedSongs');
        if (cachedSongs) {
          setSongs(JSON.parse(cachedSongs));
        } else {
          const res = await fetch(
            `https://itunes.apple.com/search?term=beatles&entity=song&limit=20`
          );
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
          setSongs(data.results);
          localStorage.setItem('cachedSongs', JSON.stringify(data.results));
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
        setSongs([]);
      }
    };

    fetchSongs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const cachedSongs = JSON.parse(localStorage.getItem('cachedSongs')) || [];
    const filtered = cachedSongs.filter((song) =>
      song.trackName.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setSongs(filtered);
  };

  const handleClearSearch = () => {
    setSearchKey('');
    setSongs(JSON.parse(localStorage.getItem('cachedSongs')));
  };

  const heading1 = 'Songs';
  const heading2 = 'Discover Your Favorite Tunes';

  return (
    <div className="app-container">
      <div className="container-box scrollable">
        <Header H1={heading1} H2={heading2} />

        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearch}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {!songs.length ? (
          <EmptyList />
        ) : (
          <div className='blogList-wrap'>
            {songs.map((song) => (
              <SongItem key={song.trackId} song={song} />
            ))}
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Songs;
