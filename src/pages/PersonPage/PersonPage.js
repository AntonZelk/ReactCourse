import React from "react";
import { withRouter } from "react-router-dom";
import { RenderPersonaDetail } from "../../SwServices";

import "./PersonPage.css";

const PersonPage = (props) => {
  const { match } = props;
  const { id } = match.params;

  return <RenderPersonaDetail itemId={id} />;
};

export default withRouter(PersonPage);
