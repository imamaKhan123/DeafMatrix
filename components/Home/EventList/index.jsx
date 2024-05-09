import React from 'react';
import EventItem from './EventItem';
import './styles.css';

const EventList = ({ events }) => {
  // Sorting the filtered data in descending order based on the "id" property
  const sortedData = events.sort((a, b) => b.id - a.id);
  return (

    
    <div className='blogList-wrap'>
      {sortedData.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
