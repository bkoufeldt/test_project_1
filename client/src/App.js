import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Eat ya fruit</span>
                    <span className="heading-primary--sub">Eat ya veggies too</span>
                </h1>
            </div>
      </div>
    );
  }
}

export default App;
