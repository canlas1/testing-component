import React, {Component} from 'react';
//import Sidebar from 'react-side-bar';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {Tab, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import '../App.css';


class SideBar extends Component {

	render() {
		return (
			<div id="SideBarDiv">
			
				
				<Tab.Container defaultActiveKey="first">

 
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            <Link to="/viewProject"><div>
              <Glyphicon glyph="list-alt" /> View Project</div>
            </Link>
          </NavItem>
          <NavItem eventKey="second">
            <Link to="/addProject"><div>
              <Glyphicon glyph="plus" /> Add Project</div>
            </Link>
          </NavItem>
        </Nav>

  </Tab.Container>
			</div>
			
			
		)
	}
}

export default SideBar;
