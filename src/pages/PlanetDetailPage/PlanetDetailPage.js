import React from "react";
import { withRouter } from "react-router-dom";
import { RenderPlanetDetail } from "../../SwServices";

import "./PlanetDetailPage.css";

const PlanetDetailPage = (props) => {
  const { match } = props;
  const { id } = match.params;

  return <RenderPlanetDetail itemId={id} />;
};

export default withRouter(PlanetDetailPage);
