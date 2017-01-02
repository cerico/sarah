import React, { Component } from 'react';
import './Left.css';
import '../bootstrap.css';
import FirstInnerLeft from './FirstInnerLeft.js';
import Certifications from './Certifications.js';


class Left extends Component {
  render() {
    return (
      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
      	<FirstInnerLeft></FirstInnerLeft>
      	<Certifications></Certifications>
      </div>
    );
  }
}

export default Left;