import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
//import Login from './components/Login';
import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import Project from './components/Project';
//import FormComponent from './components/FormComponent';

class App extends Component {
  render() {
    return (
      <div className="App">     
		<Grid>
		    <Row className="show-grid">
		        <Col><br/>
		        	<TopNav />
		        </Col>
		    </Row>
		    <Row className="show-grid">
		        <Col lg={3}><br/>
		        	<SideBar />	        	
		        </Col>
		        <Col lg={9}><br/>
		        	<Project />
				</Col>		        
		    </Row>
		</Grid>
      </div>
    );
  }
}

export default App;

