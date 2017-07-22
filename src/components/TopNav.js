import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class TopNav extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
			<Navbar.Header>
      			<Navbar.Brand>
        			<a href="#" id="brandlogo">EnergyLowhatever</a>
			    </Navbar.Brand>
			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
			    <Nav pullRight>
			    	<NavItem className="navlist" eventKey={1} href="#">Resource</NavItem>
			      	<NavItem className="navlist" eventKey={2} href="#">Account</NavItem>
			       	<NavItem className="navlist" eventKey={3} href="#">Logout</NavItem>
			    </Nav>
	        </Navbar.Collapse>
			</Navbar>				
		)
	}
}

export default TopNav;