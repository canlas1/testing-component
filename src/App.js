import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Button, Panel, Form, FormControl, Checkbox } from 'react-bootstrap';
import { Redirect, Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
//import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FormComponent from './components/FormComponent';

import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import Project from './components/Project';
import Resources from './components/Resources/Resources';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (

      <div className="col-md-6 col-md-center-6">
      <TopNav />
      <Row className="col-md-6 col-md-center-6">

            {
            !isAuthenticated() && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
                >
              Log In
              </Button>
              )}
        

              {
              isAuthenticated() && (
                <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
                >
                Log Out
                </Button>
              )}


              {             
              isAuthenticated() && (

                <Dashboard/>
              )}
        

     
      </Row>


    </div>

    );
  }
}


export default App;

