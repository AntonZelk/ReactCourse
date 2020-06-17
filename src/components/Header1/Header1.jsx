import React from 'react';
import Menu from '../Menu';
import './Header1.scss';

const Header1 = () => {
  return (
    <div className="header-our-coffee">
      <div className="menu-our-coffee">
        <Menu />
      </div>
      {/* <img
        className="back-our-coffee"
        src="./img/header1-back.png"
        alt="back"
      ></img> */}
      <h1 className="title-our-coffee">Our Coffee</h1>
    </div>
  );
};

export default Header1;
