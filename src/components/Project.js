import React, {Component} from 'react';
import QuickView from './QuickView';

class Project extends Component {
	render() {
		return (
			<div>
				<p>Project List</p>
				<QuickView />
				<QuickView />
				<QuickView />
			</div>
		)
	}
}

export default Project;