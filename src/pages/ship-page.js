import React from "react";
import StarsShipDetails from "../components/starship-details";
import ItemList from "../components/item-list";

class ShipPage extends React.Component {
    state = {
        selectedItem: null,
      };

     onSelectedItem = (id) => {
        this.setState({ selectedItem: id });
    };  

    render() {
        return(
            <div className="row mb2">
            <div className="col-md-6">
              <ItemList onSelectedItem={this.onSelectedItem} />
            </div>
            <div className="col-md-6">
              <StarsShipDetails selectedItem={this.state.selectedItem} />
            </div>
          </div>
        )
    }
}

export default ShipPage;