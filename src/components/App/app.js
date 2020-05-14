import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service";

import "./app.css";

class App extends React.Component {
  state = {
    postErrors: [],
  };

  service = new Service();

  postErrors = (error) => {
    const newArr = [];

    for (let key in error) {
      const errorData = error[key];

      for (let elem in errorData) {
        newArr.push(`${elem} ${errorData[elem]}`);
        this.setState({
          postErrors: newArr,
        });
      }
    }
  };

  postAnswer = (error) => {
    if (error === undefined) {
      alert("Регистрация успешна");
    } else {
      this.postErrors(error);
    }
  };

  onSubmit = (obj) => {
    this.service.requestData(obj).then((res) => this.postAnswer(res));
  };

  numbeeList = () => {};

  render() {
    const showError = this.state.postErrors;

    return (
      <div className="app">
        <Header />
        <ErrorComponent showError={showError} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
