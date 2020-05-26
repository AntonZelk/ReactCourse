import React from "react";
import { RenderPlanetList, RenderPlanetDetail } from "../../SwServices";

import "./planet-page.css";

class PlanetPage extends React.Component {
  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderPlanetList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderPlanetDetail itemId={selectedItem} />
        </div>
      </div>
    );
  }
}

export default PlanetPage;
