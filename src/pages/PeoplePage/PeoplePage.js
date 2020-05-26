import React, { Component } from "react";
import { RenderPersonaList } from "../../SwServices";
import { withRouter } from "react-router-dom";

import "./PeoplePage.css";

class PeoplePage extends Component {
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
          <RenderPersonaList
            onSelectedItem={(id) => history.push(`/people/${id}`)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PeoplePage);
