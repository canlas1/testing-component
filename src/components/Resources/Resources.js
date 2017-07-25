import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
import coned from './img/conedison.jpg';
import onr from './img/onr.jpg';
import pgne from './img/pgne.png';
import resources from './resources.css';




class Resources extends Component {

	render(){
		return(
			<div className="container">
      <h1>Hola</h1>
    <div className="row">
      <div className="col-xs-6 col-md-4">
        <img src={coned} className="logos" />
        <h1> Conedison</h1>
      </div>
      <div className="col-xs-6 col-md-4">
        <img src={onr} className="logos" />
        <h1>Orange</h1>
      </div>
    <div className="col-xs-6 col-md-4">
        <img src={pgne} className="logos" />
        <h1>PGnE</h1>
      </div>
    </div>
  </div>


			)
	}
}

export default Resources;