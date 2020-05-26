import React from "react";
import { withRouter } from "react-router-dom";
import { RenderShipDetail } from "../../SwServices";

import "./ShipDetailPage.css";

const ShipDetailPage = (props) => {
  const { match } = props;
  const { id } = match.params;

  return <RenderShipDetail itemId={id} />;
};

export default withRouter(ShipDetailPage);
