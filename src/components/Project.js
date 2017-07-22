import React, {Component} from 'react';
import QuickView from './QuickView';
import '../App.css';

class Project extends Component {
	render() {
		return (
			<div>
				<p className="fei">Project List</p>
				<QuickView />
				<QuickView />
				<QuickView />
			</div>
		)
	}
}

export default Project;