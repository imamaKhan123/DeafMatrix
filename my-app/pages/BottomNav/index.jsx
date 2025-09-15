import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function BottomNav() {
  return (
    <div className='bottom-nav d-flex justify-content-center'>
        <Nav className="mb-3">
           <Nav.Link exact to="/news" activeClassName="active">News</Nav.Link>
        <Nav.Link exact to="/courses" activeClassName="active">Courses</Nav.Link>
        <Nav.Link exact to="/events" activeClassName="active">Events</Nav.Link>
        <Nav.Link exact to="/discover" activeClassName="active">Discover</Nav.Link>
   </Nav>
      </div>
  )
}

export default BottomNav;
