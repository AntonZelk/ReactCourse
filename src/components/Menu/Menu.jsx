import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
  return (
    <div>
      <ul className="menu">
        <li>
          <img className="logo" src="./img/logo.png" alt="logo"></img>
          <Link className="link-menu" to="/">
            Coffee house
          </Link>
        </li>
        <li>
          <Link className="link-menu" to="/coffee">
            Our coffee
          </Link>
        </li>
        <li>
          <Link className="link-menu" to="/goods">
            For your pleasure
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
