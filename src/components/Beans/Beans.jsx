import React from 'react';

import './Beans.scss';

const Beans = ({ color, line }) => {
  return (
    <div className="beans">
      <img src={line} alt="line"></img>
      <img className="beanBl" src={color} alt="beans"></img>
      <img src={line} alt="line"></img>
    </div>
  );
};

export default Beans;
