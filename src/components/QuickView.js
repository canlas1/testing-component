import React, {Component} from 'react';
import {Collapse} from 'pui-react-collapse';
import '../App.css';

class QuickView extends Component {
	render() {
		return (
			<Collapse header="Project#" divider>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			</Collapse>
		)
	}
}

export default QuickView;