import React, { Component } from 'react';
import { Bootstrap } from 'react-bootstrap';
// import List from './List';

import '../../App.css';

// import coned from './img/conedison.jpg';
// import onr from './img/onr.jpg';
// import pgne from './img/pgne.png';
import axios from "axios";
import resources from './resources.css';



class Resources extends Component {

  constructor(){
    super();
    this.state = {
      programs: []
    }
  }
 
  
 
  componentWillMount() {
    // var self = this;
    axios.get('https://developer.nrel.gov/api/energy_incentives/v2/dsire.json?api_key=tGam8lqBORjsbrJD4piBOtDfaDlVZE7diE3bJoiw&address=newyork&category=lighting')
    .then(function (response) {
      console.log(response.data.result.program_name);
      this.setState({
        programs: response.data.result.program_name
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <h1> Results!!!</h1>
      <ul>
        <li key={this.state.programs.program_id} program_name={this.state.programs.programs_name} />
        </ul>
      </div>
    );
  }
}

export default Resources;