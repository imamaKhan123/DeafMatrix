import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
    // Filtering the data where sec_identifier is not equal to "course"
    const filteredData = blogs.filter(item => item.sec_identifier !== 'course_ ');
    // Sorting the filtered data in descending order based on the "id" property
    const sortedData = filteredData.sort((a, b) => b.id - a.id);
    // Taking only the first 5 items
    const topFive = sortedData.slice(0, 5);
  return (

    
    <div className='blogList-wrap'>
      {topFive.map((blog) => (
         <BlogItem  key={blog.id} blog={blog} />
     
      ))}
    </div>
  );
};

export default BlogList;
