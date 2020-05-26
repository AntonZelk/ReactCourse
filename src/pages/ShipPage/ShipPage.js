import React from "react";
import { RenderShipList } from "../../SwServices";
import { withRouter } from "react-router-dom";

import "./ship-page.css";

class ShipPage extends React.Component {
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
          <RenderShipList
            onSelectedItem={(id) => history.push(`/ship/${id}`)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ShipPage);
