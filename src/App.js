import React, { Component } from 'react';
import { Button, Panel, Form, FormControl, Checkbox } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
//import Login from './components/Login';
//import Login from './styling/Login.'

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
          <Form
          onSubmit={data => console.log(data)}
          onError={(errors, data) => console.log('error', errors, data)}
          >

 <div className="form-group">
                   <FormControl
                     type="text"
                     className="form-control"
                     placeholder="Username"
                     name="name"
                   />
                 </div>

                  <div className="form-group">
                   <FormControl
                     className="form-control"
                     placeholder="Password"
                     type="password"
                     name="password"
                   />
                 </div>
                 <Checkbox label="Remember Me" > Remember Me </Checkbox>
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
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'ping')}
                  >
                    Ping
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
        </Form>
        </Panel>      
        </div>
  </div>
    );
  }
}


export default App;

