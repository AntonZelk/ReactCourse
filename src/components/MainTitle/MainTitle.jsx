import React from 'react';

import './MainTitle.scss';

const MainTitle = () => {
  return (
    <div>
      <img className="main-img" src="./img/main.png" alt="main"></img>
      <div className="main-title">
        <div className="main-text">
          <h1>Everything You Love About Coffee</h1>
          <div className="beans">
            <img className="line" src="./img/line.png" alt="line"></img>
            <img className="bean" src="./img/beans.png" alt="beans"></img>
            <img className="line" src="./img/line.png" alt="line"></img>
          </div>
        </div>
        <h2 className="text1">We makes every day full of energy and taste</h2>
        <h2 className="text2">Want to try our beans?</h2>
        <div className="btn">
          <a href="1">More</a>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
