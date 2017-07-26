import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Button, Panel, Form, FormControl, Checkbox } from 'react-bootstrap';
import { Redirect, Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
//import Login from './components/Login';
import Dashboard from './components/Dashboard';


import TopNav from './components/TopNav/TopNav';


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

       <Row  className="content">
       <TopNav />

            {
            !isAuthenticated() && (

             
              <div className="logologin">

              <img src={require('./components/TopNav/logo-icon.png')} />
              

           <div>
              <Button

                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
                >
              Log In
              </Button>
              </div>
              </div>
             
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
        
              <div className="background">
              Some background
              </div>
     
      </Row>
     



    );
  }
}


export default App;

