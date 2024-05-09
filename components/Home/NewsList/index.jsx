import React from 'react';
import NewsItem from './NewsItem';
import './styles.css';

const NewList = ({ News }) => {
    
     // Sorting the filtered data in descending order based on the "id" property
     const sortedData = News.sort((a, b) => b.id - a.id);
   
  return (

    
    <div className='blogList-wrap'>
      {sortedData.map((news) => (
        <NewsItem key={news.id} event={news} />
      ))}
    </div>
  );
};

export default NewList;
