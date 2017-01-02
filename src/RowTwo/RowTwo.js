import React, { Component } from 'react';
import './RowTwo.css';
import '../bootstrap.css';
import Left from './Left.js';
import Right from './Right.js';

class RowTwo extends Component {
  render() {
    return (
      <div className="row backdrop">
       <Left></Left>
       <Right></Right>
      </div>
    );
  }
}

export default RowTwo;