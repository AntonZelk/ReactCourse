import React from "react";
import ListItem from "../listItem/listItem";

const ErrorComponent = ({ showError }) => {
  return (
    <ul className="list-error">
      {showError.map((el, i) => {
        return <ListItem el={el} key={i} />;
      })}
    </ul>
  );
};

export default ErrorComponent;
