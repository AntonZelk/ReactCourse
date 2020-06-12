import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div>
      <ul className="header">
        <li>
          <img className="logo" src="./img/logo.png" alt="logo"></img>Coffee
          house
        </li>
        <li>Our coffee</li>
        <li>For your pleasure</li>
      </ul>
    </div>
  );
};

export default Header;
