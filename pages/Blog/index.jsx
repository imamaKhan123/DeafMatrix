import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
const Blog =(props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(props.location.description);
//console.log(props.location.description);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);
  
  
  return (
    < div className='PostContainer'> 
      <Link className='blog-goBack' to='/home'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{props.location.title}</h1>
            <div className='blog-subCategory'>
             
                <div key={id}>
                  <Chip label={props.location.title} />
                </div>
             
            </div>
          </header>
          <img  src={`https://deafmatrix.com/img/${props.location.img}`} alt='cover' />
          <p className='blog-desc'>{props.location.description}</p>
         
          <iframe id="iFrameExample"
    title="Video"
    src={props.location.link} >
</iframe> 
<div>
           </div>

        </div>
      ) : (
        <EmptyList />
      )}
      <div className='bottom-nav d-flex justify-content-center'>
      <Nav className=" mb-3">
              <Nav.Link className='active'>News</Nav.Link>
              <Nav.Link  href="/courses">Courses</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link  href="/discover">Discover</Nav.Link>
        </Nav>
      </div> 
    </div>
  );
};

export default Blog;
