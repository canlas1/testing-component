import React, {Component} from 'react';
import {Collapse} from 'pui-react-collapse';
import '../App.css';



class QuickView extends Component {
    constructor(props) {
        super(props);
    }
	render() {
		return (
			<div className="QuickViewDiv">
			<Collapse header="Click to view more" divider>
				{(this.props.data) ? (
					<div>
						<p>Customer: {this.props.data.customer}</p>
						<p>Address: {this.props.data.address}</p>
						<p>Contact Name: {this.props.data.contact_name}</p>
						<p>Contact Number: {this.props.data.contact_number}</p>
						<p>Account Number: {this.props.data.account_number}</p>
					</div>
					): <p>No data</p>
				}
			</Collapse>
			</div>
		)
	}
}

export default QuickView;