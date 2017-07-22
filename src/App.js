import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import Login from './components/Login';
import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import Project from './components/Project';
//import FormComponent from './components/FormComponent';



class App extends Component {
  render() {
    return (
      <div className="App">     

        <TopNav/>
        <Project/>
        <SideBar/>

      </div>
    );
  }
}

export default App;

