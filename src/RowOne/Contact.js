import React, { Component } from 'react';
import './Contact.css';
import '../bootstrap.css';
import '../App.css';

class Contact extends Component {
  render() {
    return (

       <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
       	<div className="spacer">
       	</div>
       	<h8>
       		<div>
       			CONTACT - 
       		</div>
       	</h8>
       <br />
       	<div>
       		<p>Sarah Berch-Heyman <br />
       			Based in Brooklyn, New York City<br /><br />
       			
       			<span className="italic">
       				<a href="mailto:sarah.bh@gmail.com?subject=">sarah.bh@gmail.com</a>
       			</span>	
       		</p>	
       	</div>
       </div>

    );
  }
}

export default Contact;