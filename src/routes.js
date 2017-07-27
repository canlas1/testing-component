import React from 'react';
import { Redirect, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import Dashboard from './components/Dashboard';


import history from './history';
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log("Handling authetication, just passed the handleAuthentication function in routes");
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
              <Dashboard auth={auth} {...props} />
            )
          )} />
           

          <Route path="/callback" render={(props) => {
            console.log("Hit callback route")
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </BrowserRouter>
  );
}

