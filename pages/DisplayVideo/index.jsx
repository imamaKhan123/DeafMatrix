import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';
const DisplayVideo =(props) => {
  const { id } = useParams();
  
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };


  return (
    < div className='PostContainer'> 
     <div>
      <button className='chip' onClick={goBack}>Go Back</button>
    </div>
       
        <div className='wrap'>
          <header>
            <h1>{props.location.title}</h1>
            <div className='subCategory'>
             
                <div key={id}>
                  <Chip label={props.location.description} />
                </div>
             
            </div>
          </header>
         
         
           <iframe id="iFrameExample"
    title="Video"
    src={props.location.link} >
</iframe> 
<div>
           </div>

        </div>
      
      <div className='bottom-nav d-flex justify-content-center'>
      <Nav className=" mb-3">
              <Nav.Link href="/home">News</Nav.Link>
              <Nav.Link  href="/courses">Courses</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link  href="/discover">Discover</Nav.Link>
        </Nav>
      </div> 
    </div>
  );
};

export default DisplayVideo;
