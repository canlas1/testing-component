import React, {Component} from 'react';
import {Collapse} from 'pui-react-collapse';
import '../App.css';

class QuickView extends Component {
	render() {
		return (
			<div className="QuickViewDiv">
			<Collapse header="Click to view more" divider>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			  <p>Content!</p>
			</Collapse>
			</div>
		)
	}
}

export default QuickView;