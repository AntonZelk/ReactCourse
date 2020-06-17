import React from 'react';

import './Cards.scss';

const Cards = () => {
  return (
    <div className="container-cards">
      <img className="img-back" src="./img/cards-back.png" alt="back"></img>
      <h2 className="about-our">Our best</h2>
      <div className="cards">
        <div className="card">
          <img className="img-card" src="./img/card1.png" alt="card1"></img>
          <p className="card-text">Solimo Coffee Beans 2 kg</p>
          <p className="card-price">10.73$</p>
        </div>
        <div className="card">
          <img className="img-card" src="./img/card1.png" alt="card1"></img>
          <p className="card-text">Solimo Coffee Beans 2 kg</p>
          <p className="card-price">10.73$</p>
        </div>
        <div className="card">
          <img className="img-card" src="./img/card1.png" alt="card1"></img>
          <p className="card-text">Solimo Coffee Beans 2 kg</p>
          <p className="card-price">10.73$</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
