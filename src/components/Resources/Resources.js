import React, { Component } from 'react';
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
      dsireData:[]

   }
 
  }
 
  componentWillMount() {
    // var self = this;
    axios.get('https://developer.nrel.gov/api/energy_incentives/v2/dsire.json?api_key=tGam8lqBORjsbrJD4piBOtDfaDlVZE7diE3bJoiw&address=newyork&category=lighting')
    .then(function (response) {
       const resultsArr = response.data.result
       console.log("component will mount ", resultsArr);
      let dsireData = []
     
      resultsArr.map(function(resultObj){
        let newObj = {
          program_name:resultObj.program_name,
          public_url:resultObj.public_url,
          program_id:resultObj.program_id
        }
        dsireData.push(newObj)
      })
            console.log("dsireData",dsireData);
            console.log("this", this)


      this.setState({
        dsireData: dsireData        
      });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {

   return (
      <div>
      <h1><b>Program Incentives Available</b></h1>
      <hr />
      <p>This section is a library where you can find a list of lighting incentives available in the New York area.</p>
      <p>Please follow the links to learn more about the description of the programs, the incentive amounts and the requirements and processes.</p>
      <hr />
      <ul>
        {this.state.dsireData.map(function(object){
          return  (<li 
                      key={object.program_id}>
        <h4 className="resourceli"><b><a href={object.public_url} 
          target="_blank">{object.program_name}</a></b></h4></li>)
        })       
        }

      </ul>
      </div>
    );
  }
}

export default Resources;