import React, {Component} from 'react';
import { Collapse, Glyphicon, ListGroupItem } from 'react-bootstrap';
import '../../App.css';
import ButtonProposal from './ButtonProposal';

class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
	render() {
		return (<ListGroupItem onClick={ ()=> this.setState({ open: !this.state.open })}><h3>
			<Glyphicon glyph="menu-down" /> &nbsp;&nbsp;  <strong>{this.props.data.project_name}</strong></h3>
			<div className="QuickViewDiv">
				<Collapse in={this.state.open}>
					{(this.props.data) ? (
						<div className="row"> 
							<div className="col-xs-9">
								<br/>
								<p>Customer: {this.props.data.customer}</p>
								<p>Address: {this.props.data.address}</p>
								<p>Contact Name: {this.props.data.contact_name}</p>
								<p>Contact Number: {this.props.data.contact_number}</p>
								<p>Account Number: {this.props.data.account_number}</p>
							</div>
							<div className="col-xs-3">
								<ButtonProposal project_id={this.props.data.project_id} kwh_rate={this.props.data.kwh_rate} project_name={this.props.data.project_name} customer={this.props.data.customer} address={this.props.data.address}/>
							</div>
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