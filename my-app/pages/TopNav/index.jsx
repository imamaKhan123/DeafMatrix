import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Deaf Matrix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
              to="/home" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              News
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Courses
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Events
            </NavLink>
            <NavLink 
              to="/discover" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Discover
            </NavLink>
            <NavLink 
              to="/songs" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Songs
            </NavLink>
            <NavLink 
              to="/films" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Films
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
