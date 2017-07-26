import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Dashboard from './../components/Dashboard';

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h4>
                You are logged in!
                <Dashboard />
              </h4>
            </div>
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
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <Link
                  to={'/login'}
                >
                  Log In
                </Link>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;