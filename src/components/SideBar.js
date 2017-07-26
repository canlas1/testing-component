import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Tab, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import '../App.css';


class SideBar extends Component {

	render() {
		return (
			<div id="SideBarDiv">
			
				<Tab.Container defaultActiveKey="first">

 
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            <Link to="/viewProject"><div>
             <h3><b> <Glyphicon glyph="list-alt" /> View Project</b></h3></div>
            </Link>
          </NavItem>
          <NavItem eventKey="second">
            <Link to="/addProject"><div>
             <h3><b> <Glyphicon glyph="plus" /> Add Project</b></h3></div>
            </Link>
          </NavItem>
          <NavItem eventKey="third">
            <Link to="/resources"><div>
             <h3><b> <Glyphicon glyph="list-alt" /> Resources</b></h3></div>
            </Link>
          </NavItem>

        </Nav>

  </Tab.Container>
			</div>
		
			
		)
	}
}

export default SideBar;
