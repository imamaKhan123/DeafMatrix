import React from 'react';
import CourseItem from './CourseItem';
import './styles.css';

const CourseList = ({ courses }) => {
     // Filtering the data where sec_identifier is not equal to "course"
     const filteredData = courses.filter(item => item.sec_identifier === 'course_ ');
   
   
  return (
    <div className='courseList-wrap'>
      {filteredData.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
