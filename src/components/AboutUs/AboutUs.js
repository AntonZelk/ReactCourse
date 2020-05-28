import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="container5"></div>
      <div className="btn5"></div>
      <div className="text-btn5">
        <div className="btn1">
          <NavLink to="/contacts">УЗНАТЬ БОЛЬШЕ</NavLink>
        </div>
      </div>
      <div className="back-btn5"></div>
      <div className="text5"></div>
      <div className="text51"></div>
      <div className="text52">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        efficitur diam, vel sagittis ipsum. Curabitur eleifend, risus id
        sollicitudin pretium, massa ex tristique velit, ullamcorper feugiat
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        efficitur diam, vel sagittis ipsum. Curabitur eleifend, risus id
        sollicitudin pretium, massa ex tristique velit, ullamcorper feugiat
      </div>
      <div className="img5"></div>
    </div>
  );
};

export default withRouter(AboutUs);
