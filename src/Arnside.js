import React, { Component } from 'react';
import logo from './logo.svg';
import './Arnside.css';
import './bootstrap.css';
import Nelson from './Nelson.js';
import RowOne from './RowOne/RowOne.js';
import RowTwo from './RowTwo/RowTwo.js';

class Arnside extends Component {
  render() {
    return (
      <div className="arnside backdrop">
        <div className="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-xs-1"></div>
        <div className="colne col-lg-10 col-xl-10 col-md-10 col-sm-10 col-xs-10">
          <Nelson></Nelson>
          <RowOne></RowOne>
          <div className="clear"></div>
          <RowTwo></RowTwo>
        </div>
      </div>
    );
  }
}

export default Arnside;