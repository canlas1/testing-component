import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';
import App from '../App.js'

class TopNav extends Component {

	logout() {
    this.props.auth.logout();
  }
	render() {
		return (
			<div id="TopNavDiv">
			<Navbar inverse collapseOnSelect>
			<Navbar.Header>
      			<Navbar.Brand>
        			<a href="#" id="brandlogo">Energy Logan Sales Portal</a>
			    </Navbar.Brand>
			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
			    <Nav pullRight>
			    	<NavItem className="navlist" eventKey={1} href="#">Resource</NavItem>
			      	<NavItem className="navlist" eventKey={2} href="#">Account</NavItem>
			       	<NavItem className="navlist"  eventKey={this.logout.bind(this)} href="#">Logout</NavItem>
			    </Nav>
	        </Navbar.Collapse>
			</Navbar>
			</div>				
		)
	}
}

export default TopNav;