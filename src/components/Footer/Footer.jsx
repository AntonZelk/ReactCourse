import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="menu">
        <li>
          <img className="logo" src="./img/logoBl.png" alt="logo"></img>Coffee
          house
        </li>
        <li>Our coffee</li>
        <li>For your pleasure</li>
      </ul>
      <div className="beans">
        <img className="lineBl" src="./img/lineBl.png" alt="line"></img>
        <img className="beanBl" src="./img/beansBl.png" alt="beans"></img>
        <img className="lineBl" src="./img/lineBl.png" alt="line"></img>
      </div>
    </div>
  );
};

export default Footer;
