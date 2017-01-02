import React, { Component } from 'react';
import './Moreinfo.css';
import '../bootstrap.css';
import '../App.css';

class MoreInfo extends Component {
  render() {
    return (
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12">
    	<div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12">
    		<div className="spacer">
    		</div>
    		<h8>
    			<div>
    				MORE INFO - 
    			</div>
    		</h8>
    		<br />
    		<div>
    			<p>
    				Sarah Berch-Heyman is a Pre-School Teacher and specialist in Early Childhood Development. She graduated from <a href="#">Bank St</a> in New York City, where she studied Early Education and is now living and working in East Williamsburg, Brooklyn
    				<br />
    				<br />
    			</p>
    		</div>
    	</div>
    </div>
    );
  }
}

export default MoreInfo;