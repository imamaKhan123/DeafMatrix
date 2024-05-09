import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Deaf Matrix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              News
            </NavLink>
            <NavLink to="/courses" className="nav-link" activeClassName="active">
              Courses
            </NavLink>
            <NavLink to="/events" className="nav-link" activeClassName="active">
              Events
            </NavLink>
            <NavLink to="/discover" className="nav-link" activeClassName="active">
              Discover
            </NavLink>
            <NavLink to="/Songs" className="nav-link" activeClassName="active">
              Songs
            </NavLink>
            <NavLink to="/Films" className="nav-link" activeClassName="active">
              Films
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
