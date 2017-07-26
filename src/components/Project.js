import React, {Component} from 'react';
import GraphView from './DetailedView/GraphView';
import DetailedView from './DetailedView/DetailedView';
//import RenderGraph from './DetailedView/RenderGraph';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import QuickView from './QuickView/QuickView';

import '../App.css';
import helpers from '../utils/helpers'

class Project extends Component {


    constructor(props){
	    super(props);
	    this.state = {projects:[]};
    }
    componentDidMount(){
  	    // console.log ('PROJECTS', )
	  	let userProjectsArr = helpers.getUserProjects()
	  	this.setState({projects:userProjectsArr})
	  	helpers.getProjectIncentives(1)
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