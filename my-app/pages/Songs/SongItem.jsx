import React from 'react';
import Chip from '../../components/common/Chip';

const SongItem = ({ song }) => {
  const openLink = () => {
    window.open(song.trackViewUrl, '_blank');
  };

  return (
    <div className='blogItem-wrap '>
      <img className='blogItem-cover' src={song.artworkUrl100} alt={song.trackName} />
      <Chip label={song.trackName} />
      <h3>{song.trackName}</h3>
      {/* <p className='blogItem-desc'>{song.artistName}</p> */}
      <audio controls src={song.previewUrl} style={{ width: '100%', marginTop: '0.5rem' }}></audio>
      <footer>
        <button className='chip ms-auto' onClick={openLink}>
          Open link
        </button>
      </footer>
    </div>
  );
};

export default SongItem;
