import React from "react";
import { RenderShipList, RenderShipDetail } from "../../SwServices";

import "./ship-page.css";

class ShipPage extends React.Component {
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
          <RenderShipList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderShipDetail itemId={selectedItem} />
        </div>
      </div>
    );
  }
}

export default ShipPage;
