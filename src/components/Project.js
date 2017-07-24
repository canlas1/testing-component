import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import QuickView from './QuickView';
import '../App.css';

var userObj = {
	username: 'john',
	pass: '123456789',
	projects: [
		{
			"project_id": 1,
			"project_name": "161 Newkirk",
			"customer": "Rutgers",
			"address": "161 Newkirk, Jersey City, NJ",
			"contact_name": "John Doe",
			"contact_number": "2015555555",
			"account_number": "101000123",
			"floors": "Basement, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15",
			"scheduled_date": "2017-06-01T00:00:00.000Z",
			"comments": null,
			"createdAt": "2017-06-17T01:24:13.000Z",
			"updatedAt": "2017-06-17T01:24:13.000Z"
		},
		{
			"project_id": 2,
			"project_name": "101 Easy Street",
			"customer": "Wall Street Inc.",
			"address": "101 Easy Street, NY",
			"contact_name": "Jack Moneybags",
			"contact_number": "2127777777",
			"account_number": "201000777",
			"kwh_rate": 0.1,
			"floors": "10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30",
			"scheduled_date": "2017-07-11T00:00:00.000Z",
			"comments": null,
			"createdAt": "2017-06-17T01:24:13.000Z",
			"updatedAt": "2017-07-21T20:09:23.000Z"
		},
		{
			"project_id": 3,
			"project_name": "Cruise Plaza",
			"customer": "My Caribbean Cruises",
			"address": "555 Carribean Way, Miami, FL",
			"contact_name": "Jack Sparrow",
			"contact_number": "8351234567",
			"account_number": "107000333",
			"kwh_rate": 0.1,
			"floors": "3,5,7, 9, Boiler Room",
			"scheduled_date": "2017-06-29T00:00:00.000Z",
			"comments": null,
			"createdAt": "2017-06-17T01:24:13.000Z",
			"updatedAt": "2017-07-21T20:09:23.000Z"
		}
	]
}

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {projects:userObj.projects};
    }
  
	render() {
		const title = (<h4 id="pl">Project List</h4>);
		return (
			<div id="ProjectDiv">
				<Panel header={title}>
			      	<ListGroup fill>
			        	{this.state.projects.map(function(project) {
			           	return (<QuickView data={project}/>);
			        })}
					</ListGroup>
			    </Panel>		    
			</div>
		)
	}
}

export default Project;