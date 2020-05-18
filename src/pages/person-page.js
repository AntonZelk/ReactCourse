import React from "react";
import PersonDetails from "../components/person-details";
import ItemList from "../components/item-list";
import SwapiService from "../services/swapi-service";

class PersonPage extends React.Component {
  state = {
    selectedItem: null,
    items: [],
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople().then((data) => {
      this.setState({ items: data });
    });
  }

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            items={this.state.items}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default PersonPage;
