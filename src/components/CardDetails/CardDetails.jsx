import React from 'react';
import Beans from '../Beans';

import './CardDetails.scss';

const CardDetails = () => {
  return (
    <div className="container-cards">
      <div className="about-our-beans">
        <img
          className="img-our-beans"
          src="./img/about-card.png"
          alt="our-beans"
        ></img>
        <div className="content-about-our-beans">
          <h2 className="about">About it</h2>
          <Beans color="./img/beansBl.png" line="./img/lineBl.png" />
          <div className="information">
            <p className="text-country">
              <b>Country: </b>Brasil
            </p>
            <p className="text-description">
              <b>Description: </b>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="text-price">
              <b>Price: </b>
              <span>16.99$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
