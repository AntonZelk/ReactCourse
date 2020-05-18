import React, { Component } from "react";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";

import "./item-list.css";

export default class ItemList extends Component {
  state = {
    item: null,
    error: false,
    loading: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.setState({
        item: this.props.items,
        loading: false,
      });
    }
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  updatePerson = () => {
    this.swapiService
      .getPerson(this.props.selectedItem)
      .then(this.onPersonLoaded);
  };

  render() {
    const { error, loading } = this.state;
    const { onSelectedItem } = this.props;
    const loadingMes = loading ? <Spinner /> : null;
    const errorMes = error ? <ErrorComponent /> : null;
    const content = !(loading || error) ? (
      <ViewItem item={this.props.items} onSelectedItem={onSelectedItem} />
    ) : null;

    return (
      <>
        {loadingMes}
        {content}
        {errorMes}
      </>
    );
  }
}

const ViewItem = ({ item, onSelectedItem }) => {
  return (
    <ul className="item-list list-group">
      {item.map((el) => {
        return (
          <li
            className="list-group-item"
            key={el.id}
            onClick={() => {
              onSelectedItem(el.id);
            }}
          >
            {el.name}
          </li>
        );
      })}
    </ul>
  );
};
