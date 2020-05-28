import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div>
      <div className="container">
        <div className="block1">
          <div className="left">
            <h2 className="textBig">НАВИГАЦИЯ</h2>
            <div className="text">
              <NavLink to="/main">Главная</NavLink>
            </div>
            <div className="text">
              <NavLink to="/service">Услуги</NavLink>
            </div>
            <div className="text">
              <NavLink to="/about">О нас</NavLink>
            </div>
          </div>
          <div className="right">
            <h2 className="textBig">КОНТАКТЫ</h2>
            <div className="text">47, Park Town, New York, USA</div>
            <div className="text">mailid@domain.com</div>
            <div className="text">+ 123 (45) 678-90-00</div>
          </div>
        </div>
        <div className="block2">
          <h3>Все права защищены, 2020</h3>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Contacts);
