import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';


const EventItem = ({
  event: {
    description,
    title,
   
    img,
  link,
    id,
  },
}) => {

  const openPeopleWebsite = () => {
    // Open people.com website in a new tab
   
    window.open(link, '_blank');
};
console.log(link);
  return (


    
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={`https://deafmatrix.com/img/${img}`} alt='cover' />
      <Chip label={title} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
     
      
      <button className='chip' onClick={openPeopleWebsite}>See Blog in Browser ➝</button>
       
       
      </footer>
    </div>
  );
};

export default EventItem;
