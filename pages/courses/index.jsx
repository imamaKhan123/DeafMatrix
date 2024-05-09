import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/coursesdata';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Course = () => {
 
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  
  useEffect(() => {
    fetch('https://deafmatrix.com/api/News/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      //  console.log(data);
        blogList=data;
      });
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    < div className='PostContainer'>
      <Link className='blog-goBack' to='/courses'  >
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Course;
