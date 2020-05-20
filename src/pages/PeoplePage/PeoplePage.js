import React, { Component } from "react";

import ItemList from "../../components/item-list";
import ItemsDetail from "../../components/ItemsDetail";
import Record from "../../components/Record";
import SwapiService from "../../services/swapi-service";

import "./PeoplePage.css";

class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getAllItem={getAllPeople}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemsDetail
            selectedItem={this.state.selectedItem}
            getItem={getPerson}
            getImage={getPersonImage}
            getMessage={`Нужно выбрать персонажа`}
          >
            <Record label={`Gender`} field={`gender`} />
            <Record label={`Birth Year`} field={`birthYear`} />
            <Record label={`Eye Color`} field={`eyeColor`} />
          </ItemsDetail>
        </div>
      </div>
    );
  }
}

export default PersonPage;
