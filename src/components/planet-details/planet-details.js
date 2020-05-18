import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";

import "./planet-details.css";

export default class PlanetDetails extends Component {
  state = {
    item: null,
    error: false,
    loading: true,
  };
  swapiService = new SwapiService();

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.swapiService.getPlanet(this.props.selectedItem).then((item) => {
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

const ViewItem = ({ item }) => {
  const { id, name, population, rotationPeriod, diameter } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
      <ErrorButton />
    </div>
  );
};
