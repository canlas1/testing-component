import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import QuickView from './QuickView';
import '../App.css';

class Project extends Component {
	render() {
		return (
			<div id="ProjectDiv">
				<h3 className="pl">Project List</h3>				
				<ListGroup>
				    <ListGroupItem>Project 1
				    	<QuickView />
				    </ListGroupItem>
				    <ListGroupItem>Project 2
				    	<QuickView />
				    </ListGroupItem>
				    <ListGroupItem>Project 3
				    	<QuickView />
				    </ListGroupItem>
  				</ListGroup>
			</div>
		)
	}
}

export default Project;