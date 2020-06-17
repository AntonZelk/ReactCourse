import React from 'react';

import './Menu.scss';

const Menu = () => {
  return (
    <div>
      <ul className="menu">
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

export default Menu;
