import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import "./Main.css";

const Main = () => {
  return (
    <div className="container1">
      <div className="back">
        <h2 className="text1">КОНСАЛТИНГОВАЯ И ТЕХНОЛОГИЧЕСКАЯ КОМПАНИЯ</h2>
        <div className="text2">
          Мы фокусируемся на пердовых технологических продуктах и платформах
        </div>
        <div className="btn">
          <NavLink to="/contacts">СВЯЗАТЬСЯ С НАМИ</NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Main);
