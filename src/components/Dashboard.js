import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import './../App.css';

// import TopNav from './TopNav';
import SideBar from './SideBar';
import Project from './Project';
import FormComponent from './FormComponent';
import Resources from './Resources/Resources';
import Profile from '../Profile/Profile'


class Dashboard extends Component{

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  
  render(){
    return(

      <div className="dashboard-wrapper">     
        
        <Grid>  
          <Row className="show-grid">
            <Col><br/>
              
              
            
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
                <Route path="/profile" component={Profile} />
               
            
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Dashboard;



