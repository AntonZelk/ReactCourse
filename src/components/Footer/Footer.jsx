import React from 'react';
import Menu from '../Menu';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <Menu />
      </div>
      <div className="beans">
        <img className="lineBl" src="/img/lineBl.png" alt="line"></img>
        <img className="beanBl" src="/img/beansBl.png" alt="beans"></img>
        <img className="lineBl" src="/img/lineBl.png" alt="line"></img>
      </div>
    </div>
  );
};

export default Footer;
