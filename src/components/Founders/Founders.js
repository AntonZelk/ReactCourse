import React from "react";
import { withRouter } from "react-router-dom";

import "./Founders.css";

const Founders = () => {
  return (
    <div>
      <div className="container3"></div>
      <div className="back3"></div>
      <div className="about3"></div>
      <div className="text3"></div>
      <h3 className="text-max3">КИРИЛЛ ВАСИЛЬЕВ</h3>
      <div className="text-mini3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        efficitur diam, vel sagittis ipsum. Curabitur eleifend.
      </div>
      <div className="fhoto3"></div>
      <div className="fhoto31"></div>
      <div className="fhoto32"></div>
      <div className="about4"></div>
      <div className="text4"></div>
      <h3 className="text-max4">МАКСИМ БАРСОВ</h3>
      <div className="text-mini4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        efficitur diam, vel sagittis ipsum. Curabitur eleifend.
      </div>
      <div className="fhoto4"></div>
      <div className="fhoto41"></div>
      <div className="fhoto42"></div>
    </div>
  );
};

export default withRouter(Founders);
