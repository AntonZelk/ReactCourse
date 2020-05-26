import React from "react";

import ItemList from "../../components/item-list";
import SwapiService from "../../services/swapi-service";
import ItemsDetail from "../../components/ItemsDetail";
import Record from "../../components/Record";

import "./ship-page.css";

class ShipPage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const {
      getAllStarships,
      getStarship,
      getStarshipImage,
    } = this.swapiService;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getAllItem={getAllStarships}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemsDetail
            selectedItem={this.state.selectedItem}
            getItem={getStarship}
            getImage={getStarshipImage}
            getMessage={`Нужно выбрать звездный корабль`}
          >
            <Record label={`Model`} field={`model`} />
            <Record label={`Manufacturer`} field={`manufacturer`} />
            <Record label={`Cost`} field={`costInCredits`} />
            <Record label={`length`} field={`length`} />
            <Record label={`Cargo Capacity`} field={`cargoCapacity`} />
            <Record label={`Minimum Crew`} field={`crew`} />
            <Record label={`Passengers`} field={`passengers`} />
          </ItemsDetail>
        </div>
      </div>
    );
  }
}

export default ShipPage;
