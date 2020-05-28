import React from "react";
import Header from "../Header";
import AboutUs from "../AboutUs";
import Contacts from "../Contacts";
import Content from "../Content";
import Founders from "../Founders";
import Main from "../Main";
import Service from "../Service";
import Team from "../Team";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" component={Main} exact />
          <Route path="/" component={Contacts} exact />
          <Route path="/main" component={Main} />
          <Route path="/main" component={Contacts} />
          <Switch>
            <Route path="/contacts" component={Contacts} />
            <Route path="/about" component={AboutUs} />
            <Route path="/content" component={Content} />
            <Route path="/founders" component={Founders} />
            <Route path="/service" component={Service} />
            <Route path="/team" component={Team} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
