import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Chip from '../../../common/Chip';


const NewsItem = ({
  event: {
    description,
    title,
   
    img,
  
    id,
    link
  },
}) => {
  const history = useHistory();
  const [isEmbeddable, setIsEmbeddable]= useState(true) // Assuming it's embeddable by default
 useEffect(() => {
   fetch(link)
     .then(response => {
       // Check if X-Frame-Options or Content-Security-Policy headers allow embedding
       const xFrameOptions = response.headers.get('X-Frame-Options');
       const contentSecurityPolicy = response.headers.get('Content-Security-Policy');
       if (xFrameOptions || contentSecurityPolicy) {
         setIsEmbeddable(false);
       }
     })
     .catch(error => {
      setIsEmbeddable(false);
       console.log(link);
      // console.error('Error checking embedding:', error);
     });
 }, [link]); // Run effect only when link changes
 
 const openLink = () => {
  
     window.open(link, '_blank');
   
 };
 
  return (


    
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={`https://deafmatrix.com/img/${img}`} alt='cover' />
      <Chip label={title} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
     
  
        {isEmbeddable ? (
              <Link className='eventItem-link' key={`blog${id}`} to={{ pathname: `/discover/${id}`, description: description,title:title, link:link, img:img }} >
              <span>See more </span>➝</Link>
            ) : (
              <button className='chip ms-auto' onClick={openLink}>Open link</button>
            )}
       
      </footer>
    </div>
  );
};

export default NewsItem;
