import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import PeoplePage from "../../pages/PeoplePage";
import { SwapiProvider } from "../../context";

// import ShipPage from "../../pages/Ship-page";
// import PlanetPage from "../../pages/Planet-page";
import "./app.css";
import SwapiService from "../../services/swapi-service";
const swapiService = new SwapiService();

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    error: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch(error) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <SwapiProvider value={swapiService}>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg mb-4"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />

        <PeoplePage />
        {/* <ShipPage />
        <PlanetPage /> */}
      </SwapiProvider>
    );
  }
}

export default App;
