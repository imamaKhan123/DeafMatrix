import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import Nav from 'react-bootstrap/Nav';

const Blog = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.description);

  useEffect(() => {
    let blogData = blogList.find((blog) => blog.id === parseInt(id));
    if (blogData) {
      setBlog(blogData);
    }
  }, [id]);

  return (
    <div className="PostContainer">
      <Link className="blog-goBack" to="/home">
        <span>&#8592;</span> <span>Go Back</span>
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{location.state?.title}</h1>
            <div className="blog-subCategory">
              <div key={id}>
                <Chip label={location.state?.title} />
              </div>
            </div>
          </header>

          <img
            src={`https://deafmatrix.com/img/${location.state?.img}`}
            alt="cover"
          />
          <p className="blog-desc">{location.state?.description}</p>

          <iframe
            id="iFrameExample"
            title="Video"
            src={location.state?.link}
          />
        </div>
      ) : (
        <EmptyList />
      )}

      <div className="bottom-nav d-flex justify-content-center">
        <Nav className="mb-3">
          <Nav.Link className="active">News</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Blog;
