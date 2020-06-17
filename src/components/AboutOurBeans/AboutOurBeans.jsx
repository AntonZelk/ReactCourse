import React from 'react';
import Beans from '../Beans';

import './AboutOurBeans.scss';

const AboutOurBeans = () => {
  return (
    <div className="container-beans">
      <div className="about-our-beans">
        <img
          className="img-our-beans"
          src="./img/about-our-beans.png"
          alt="our-beans"
        ></img>
        <div className="content-about-our-beans">
          <h2 className="about">About our beans</h2>
          <Beans color="./img/beansBl.png" line="./img/lineBl.png" />
          <p className="text-beans">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.<br></br>
            <br></br> Afraid at highly months do things on at. Situation
            <br></br>
            recommend objection do intention<br></br> so questions.<br></br> As
            greatly removed calling pleased improve an. Last ask him cold feel
            <br></br> met spot shy want. Children me laughing we prospect
            answered followed. At it went<br></br> is song that held help face.
          </p>
        </div>
      </div>
      <img
        className="img-line-beans"
        src="./img/line-our-beans.png"
        alt="our-beans"
      ></img>
    </div>
  );
};

export default AboutOurBeans;
