import React from 'react';
import Beans from '../Beans';

import './CardDetails.scss';

const CardDetails = ({ coffee, id }) => {
  console.log(coffee);
  // const { url, name, country, price, description } = coffee;

  return (
    <div className="container-cards">
      {/* <div className="about-our-beans">
        <img className="img-our-beans" src={url} alt="our-beans"></img>
        <div className="content-about-our-beans">
          <h2 className="about">{name}</h2>
          <Beans color="./img/beansBl.png" line="./img/lineBl.png" />
          <div className="information">
            <p className="text-country">
              <b>Country: </b>
              {country}
            </p>
            <p className="text-description">
              <b>Description: </b>
              {description}
            </p>
            <p className="text-price">
              <b>Price: </b>
              <span>{price}</span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardDetails;
