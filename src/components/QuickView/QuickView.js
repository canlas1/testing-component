import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Collapse, Well, Glyphicon} from 'react-bootstrap';
import '../../App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ButtonProposal from './ButtonProposal';
import DetailedView from './../DetailedView/DetailedView';

class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
	render() {
		return (<ListGroupItem onClick={ ()=> this.setState({ open: !this.state.open })}>
			<Glyphicon glyph="menu-down" /> &nbsp;&nbsp;  <strong>{this.props.data.project_name}</strong>
			<div className="QuickViewDiv">
				<Collapse in={this.state.open}>
					{(this.props.data) ? (
						<div>
							<br/>
							<p>Customer: {this.props.data.customer}</p>
							<p>Address: {this.props.data.address}</p>
							<p>Contact Name: {this.props.data.contact_name}</p>
							<p>Contact Number: {this.props.data.contact_number}</p>
							<p>Account Number: {this.props.data.account_number}</p>
							<ButtonProposal />
							
							
						</div>
					): <p>No data</p>
					}
				</Collapse>
			</div>
			</ListGroupItem>
		);
	}
}

export default QuickView;