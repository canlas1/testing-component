import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Redirect, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './../App.css';

import TopNav from './TopNav';
import SideBar from './SideBar';
import Project from './Project';
import FormComponent from './FormComponent';
import Resources from './Resources/Resources';
import Account from './Account/Account';

class Dashboard extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="Dash">     
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
                <Redirect from="/" to="/viewProject" />
                <Route path="/viewProject" component={Project} />
                <Route path="/addProject" component={FormComponent} />
                <Route path="/resources" component={Resources} />
                <Route path="/account" component={Account} />
    				  </Col>		        
    		    </Row>
    		</Grid>         
      </div>
    );
  }
}

export default Dashboard;

