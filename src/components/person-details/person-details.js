import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";

import "./person-details.css";

export default class PersonDetails extends Component {
  state = {
    item: null,
    error: false,
    loading: true,
  };
  swapiService = new SwapiService();

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updatePerson();
      // this.interval = setInterval(this.updatePerson, 2000);
    }
  }

  onPersonLoaded = (item) => {
    this.setState({
      item,
      loading: false,
    });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  updatePerson = () => {
    this.swapiService
      .getPerson(this.props.selectedItem)
      .then(this.onPersonLoaded);
  };

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
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
      <ErrorButton />
    </div>
  );
};