import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import App from '../../App.js';



class TopNav extends Component {

	logout() {
    this.props.auth.logout();
  }
	render() {
		return (
			  <div id="TopNavDiv">
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                  <Navbar.Brand className="barbrand">
                 <img src={require('./logo.png')} />
                   </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="bar">
                <Nav pullRight>
                    <NavItem className="navlist" eventKey={1} href="#">
                       <b><Link to="/resources">Resource</Link></b>
                    </NavItem>
                      <NavItem className="navlist" eventKey={2} href="#">
                          <b>Account</b>
                      </NavItem>
                       <NavItem className="navlist" eventKey={3} href="#"><b>Logout</b></NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>                		
		)
	}
}

export default TopNav;