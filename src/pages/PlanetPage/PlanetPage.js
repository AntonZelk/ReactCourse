import React from "react";
import { RenderPlanetList } from "../../SwServices";
import { withRouter } from "react-router-dom";

import "./planet-page.css";

class PlanetPage extends React.Component {
  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { history } = this.props;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderPlanetList
            onSelectedItem={(id) => history.push(`/planet/${id}`)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PlanetPage);
