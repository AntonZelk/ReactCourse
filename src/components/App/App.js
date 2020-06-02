import React from "react";
import { connect } from "react-redux";
import { inc, dec, rnd } from "../../actions";


import "./App.css";

const App = (props) => {
    return (
      <div className="container">
        <div className="block">
          <span className="text">{props.counter}</span>
        </div>
        <div className="buttons">
          <button className="btn btnPlus">
            <div className="plus" onClick={() => {props.inc(1)}}></div>
          </button>
          <button className="btn btnMinus">
            <div className="minus" onClick={() => {props.dec(1)}}></div>
          </button>
          <button className="btn btnRes">
            <div className="res" onClick={() => {
              const rndNum = Math.floor(Math.random() * 10 + 1);
              props.rnd(rndNum);
            }}></div>
          </button>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  inc,
  dec,
  rnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
