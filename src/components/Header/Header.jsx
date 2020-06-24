import React from 'react';
import Menu from '../Menu';

import './Header.scss';

const Header = ({ imgClass, title }) => {
  return (
    <div className={imgClass}>
      <div className="menu-our-coffee">
        <Menu />
      </div>
      <h1 className="title-our-coffee">{title}</h1>
    </div>
  );
};

export default Header;
