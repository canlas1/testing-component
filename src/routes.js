import React from 'react';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import Project from './components/Project';
import Dashboard from './components/Dashboard';


import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />

          <Route path="/ping" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Ping auth={auth} {...props} />
            )
          )} />

           <Route path="/dashboard" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

          <Route path="/project" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />
          <Route path="/detailed-view" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

           <Route path="/financial-view" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

            <Route path="/table-detailed-view" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

              <Route path="/graph-view" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

          <Route path="/quick-view" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

          <Route path="/side-bar" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

          <Route path="/top-nav" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Project auth={auth} {...props} />
            )
          )} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </BrowserRouter>
  );
}
