import React from "react";
import { withRouter } from "react-router-dom";

import "./Service.css";

const Service = () => {
  return (
    <div className="container2">
      <h2>НАШИ УСЛУГИ</h2>
      <div className="cards">
        <div className="card1">
          <div className="img1"></div>

          <h3>КОНСАЛТИНГ</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum
          </span>
        </div>
        <div className="card2">
          <div className="img2"></div>
          <h3>ПРОТОТИПИРОВАНИЕ</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum
          </span>
        </div>
        <div className="card3">
          <div className="img3"></div>
          <h3>АНАЛИТИКА</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Service);
