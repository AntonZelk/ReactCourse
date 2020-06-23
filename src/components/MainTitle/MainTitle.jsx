import React from 'react';
import Menu from '../Menu';
import Beans from '../Beans';
import './MainTitle.scss';
import { Link } from 'react-router-dom';

const MainTitle = () => {
  return (
    <div>
      <div className="main-menu">
        <Menu />
      </div>
      <div className="main-title">
        <div className="main-text">
          <h1>Everything You Love About Coffee</h1>
          <Beans color="./img/beans.png" line="./img/line.png" />
        </div>
        <h2 className="text1">We makes every day full of energy and taste</h2>
        <h2 className="text2">Want to try our beans?</h2>
        <div className="btn">
          <Link className="link" to="/coffee">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
