import React from "react";

import ItemList from "../../components/item-list";
import SwapiService from "../../services/swapi-service";
import ItemsDetail from "../../components/ItemsDetail";
import Record from "../../components/Record";

import "./planet-page.css";

class PlanetPage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getAllItem={getAllPlanets}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemsDetail
            selectedItem={this.state.selectedItem}
            getItem={getPlanet}
            getImage={getPlanetImage}
            getMessage={`Нужно выбрать планету`}
          >
            <Record label={`Population`} field={`population`} />
            <Record label={`Rotation Period`} field={`rotationPeriod`} />
            <Record label={`Diameter`} field={`diameter`} />
          </ItemsDetail>
        </div>
      </div>
    );
  }
}

export default PlanetPage;
