import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h4>
                You are logged in!
              </h4>

              <Project/>
              
              <TopNav />
              
              <SideBar />
             

              </div>
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
