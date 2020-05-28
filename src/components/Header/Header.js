import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/main">ГЛАВНАЯ</NavLink>
        </li>
        <li>
          <NavLink to="/service">УСЛУГИ</NavLink>
        </li>
        <li>
          <NavLink to="/founders">УЧРЕДИТЕЛИ</NavLink>
        </li>
        <li>
          <NavLink to="/about">О НАС</NavLink>
        </li>
        <li>
          <NavLink to="/team">КОМАНДА</NavLink>
        </li>
        <li>
          <NavLink to="/content">КОНТЕНТ</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">КОНТАКТЫ</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
