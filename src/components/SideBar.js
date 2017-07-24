import React, {Component} from 'react';
//import Sidebar from 'react-side-bar';
import {Tab, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import '../App.css';


class SideBar extends Component {

	render() {
		return (
			<div id="SideBarDiv">
				<Tab.Container defaultActiveKey="first">

 
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            <Glyphicon glyph="list-alt" /> View Project
          </NavItem>
          <NavItem eventKey="second">
            <Glyphicon glyph="plus" /> Add Project
          </NavItem>
        </Nav>


  </Tab.Container>
			</div>
		)
	}
}

export default SideBar;
