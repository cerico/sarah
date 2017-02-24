import React, { Component } from 'react';
import './FirstInnerLeft.css';
import '../bootstrap.css';
import '../App.css';
class FirstInnerLeft extends Component {
  render() {
    return (
      	<div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12">
      		<h5>
      			<div>
      				Connect - 
      			</div>
      		</h5>
      		<div> 
      			<p>
      				<a href="https://www.linkedin.com/in/sarah-berch-heyman-188309107">Linkedin</a>
      				<br />
      				<a href="http://www.pinterest.com/birdyhey/">Pinterest</a>
      				<br />
      				<a href="skype:sarah.m.bh?add">Skype</a>
      			</p>
      		</div>
      	</div>
    );
  }
}

export default FirstInnerLeft;