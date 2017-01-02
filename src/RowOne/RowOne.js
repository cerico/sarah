import React, { Component } from 'react';
// import logo from './logo.svg';
import './RowOne.css';
import '../bootstrap.css';
import BurnleyStation from './BurnleyStation.js'; 
import Contact from './Contact.js';
import MoreInfo from './MoreInfo.js';


class RowOne extends Component {
  render() {
    return (
      <div className="row backdrop">
       <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12">
         <BurnleyStation></BurnleyStation>
         <Contact></Contact>  
       </div>    	
       <MoreInfo></MoreInfo>
      </div>
    );
  }
}

export default RowOne;