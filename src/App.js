import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import './App.css';
import Dashboard from './components/Dashboard';
import TopNav from './components/TopNav/TopNav';
import Background from './styling/goldnyc.jpg';

var loginStyle = {
  height: "800px",
  width: "100%",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
}

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
        <TopNav auth={this.props.auth}/>
          {
            !isAuthenticated() && (
            <div className="logologin" style={loginStyle}>
              <div id="center">
                <img src={require('./components/TopNav/logo-icon.png')} />
                <div><Button id="loginBtn" onClick={this.login.bind(this)}>
                  Log In
                </Button></div>
              </div></div>
            )
          }
          {             
            isAuthenticated() && (
              <Dashboard auth={this.props.auth}/>
            )
          }
      </Row>
    );
  }
}

export default App;

