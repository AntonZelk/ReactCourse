import React from "react";

class InputsFields extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
    },
  };

  changeName = ({ target: { value } }) => {
    value = value.replace(/^[а-яА-ЯёЁ0-9]+$/, "");
    this.setState(({ user }) => {
      return {
        user: { ...user, username: value },
      };
    });
  };

  changeEmail = ({ target: { value } }) => {
    value = value.replace(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/, "");
    this.setState(({ user }) => {
      return {
        user: { ...user, email: value },
      };
    });
  };

  changePassword = ({ target: { value } }) => {
    this.setState(({ user }) => {
      return {
        user: { ...user, password: value },
      };
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="app_inputsFields" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          name="user"
          placeholder="Username"
          required
          onChange={this.changeName}
          value={this.state.user.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={this.changeEmail}
          value={this.state.user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={this.changePassword}
          value={this.state.user.password}
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default InputsFields;
