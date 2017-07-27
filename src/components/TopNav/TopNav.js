import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';

class TopNav extends Component {

	logout() {
    this.props.auth.logout();
  }
	render() {
    const { isAuthenticated } = this.props.auth;
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
                      {
                      isAuthenticated() && (
                    <NavItem className="navlist" eventKey={1} href="#">
                       <b><Link to="/profile">Account</Link></b>
                    </NavItem>
                      )}
                      {
                      isAuthenticated() && (

                        <NavItem className="navlist" eventKey={3} href="#" onClick={this.logout.bind(this)}><b>Logout</b></NavItem>
                       
                      )}
                       
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>                		
		)
	}
}

export default TopNav;