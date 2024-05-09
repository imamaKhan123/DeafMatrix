import React from 'react';
import './styles.css';

const Header = ({ H1,H2,para }) => (
  <header className='home-header'>
    <h2>{H2}</h2>
    <h1>
      <span>“</span>{H1} <span>”</span>
    </h1>
    <p>
     {para}
    </p>
  </header>
);

export default Header;
