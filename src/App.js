import React, { Component } from 'react';
import { Button, Panel, Form, FormControl, Checkbox } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

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
      <div className="AppLogin">       		
        <div className="col-md-6 col-md-offset-6">
       <h1 className="login-brand-text">Login Portal!</h1>
             <Panel header className="login-panel">  
                  <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
              >
              Home
            </Button>
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
      </Panel>


    </div>
    </div>

    );
  }
}
export default App;

