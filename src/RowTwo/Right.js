import React, { Component } from 'react';
import './Right.css';
import '../bootstrap.css';
import Education from './Education.js';
import Experience from './Experience.js';


class Right extends Component {
  render() {
    return (
      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
        <Education></Education>
      	<Experience></Experience>
      </div>
    );
  }
}

export default Right;