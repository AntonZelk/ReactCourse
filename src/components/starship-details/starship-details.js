import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";

import "./starship-details.css";

export default class StarsShipDetails extends Component {
  state = {
    item: null,
    error: false,
    loading: true,
  };
  swapiService = new SwapiService();

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.swapiService.getStarship(this.props.selectedItem).then((item) => {
        this.setState({ item: item, loading: false });
      });
    }
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { error, item, loading } = this.state;

    const loadingMes = loading ? <Spinner /> : null;
    const errorMes = error ? <ErrorComponent /> : null;
    const content = !(loading || error) ? <ViewItem item={item} /> : null;

    return (
      <>
        {loadingMes}
        {content}
        {errorMes}
      </>
    );
  }
}

const ViewItem = ({item}) => {
  const { id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Manufacturer</span>
            <span>{manufacturer}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Cost</span>
            <span>{costInCredits}</span>
          </li>
          <li className="list-group-item">
            <span className="term">length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Cargo Capacity</span>
            <span>{cargoCapacity}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Minimum Crew</span>
            <span>{crew}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Passengers</span>
            <span>{passengers}</span>
          </li>
        </ul>
      </div>
      <ErrorButton />
    </div>
  );
};