import React, { Component } from 'react';
import {NavItem, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
//import FormComponent from './FormComponent';
//import DetailedView from './DetailedView/DetailedView';
import TopNav from './TopNav';
import SideBar from './SideBar';
import Project from './Project';
import '../App.css';


class Dashboard extends Component{
  render(){
    return(

      <div className="dashboard-wrapper">     
        
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
    )
  }
}
export default Dashboard;



