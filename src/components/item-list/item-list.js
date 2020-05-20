import React, { Component } from "react";

import "./item-list.css";

export default class ItemList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.props.getAllItem().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const { items } = this.state;
    const { onSelectedItem, renderItem } = this.props;

    return (
      <ul className="item-list list-group">
        {items.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item.id}
              onClick={() => {
                onSelectedItem(item.id);
              }}
            >
              {renderItem(item)}
            </li>
          );
        })}
      </ul>
    );
  }
}
