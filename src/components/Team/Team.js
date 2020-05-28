import React from "react";
import { withRouter } from "react-router-dom";

import "./Team.css";

const Team = () => {
  return (
    <div>
      <div className="container6"></div>
      <div className="team6"></div>
      <div className="text6">НАША КОМАНДА</div>
      <div className="fhoto61"></div>
      <div className="fhoto611"></div>
      <div className="fhoto6111"></div>
      <div className="fhoto612"></div>
      <div className="fhoto6121">ДИЗАЙНЕР</div>
      <div className="fhoto6122">ЕЛЕНА АНАЙЯ</div>

      <div className="fhoto62"></div>
      <div className="fhoto621"></div>
      <div className="fhoto6211">МЕНЕДЖЕР</div>
      <div className="fhoto6212">ДМИТРИЙ ЛЕБЕДЕВ</div>
      <div className="fhoto622"></div>

      <div className="fhoto63"></div>
      <div className="fhoto631"></div>
      <div className="fhoto6311">ПРОГРАММИСТ</div>
      <div className="fhoto6312">АНТОН СОБОЛЕВ</div>
      <div className="fhoto632"></div>
      <div className="back6"></div>
    </div>
  );
};

export default withRouter(Team);
