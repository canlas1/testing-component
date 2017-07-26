import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
// import detailedview from './detailedview.css';
import helpers from '../../utils/helpers';


class TableDetailedView extends Component{
  constructor(props){
    super(props);
  }
  renderSurveyRows(){

  	this.props.surveyDatatArr.map(function(survey){
  		return (
					<tr>
						<td>survey.room</td>
						<td className="data1">survey.quantity</td>
						<td className="data1">survey.fixture</td>
						<td className="data1">survey.pre_watts</td>
						<td className="data-post">survey.quantity</td>
						<td className="data-post">survey.post_fixture</td>
						<td className="data-post">survey.post_watts</td>
						<td className="data-post">survey.post_price</td>
						<td className="data-post">survey.incentive_fix</td>
					</tr>
  			)
  	});

  }
	render() {
			return (
			
			
	<div className="col-xs-12">
	<h2><b>SURVEY RESULTS</b></h2>
	<hr />
	<br />
	<table className="table table-bordered">
		<tbody>
			<tr>
				<th>Location</th>
				<th className="header">Quantity</th>
				<th className="header">Pre-Fixture</th>
				<th className="header">Watts/Fixture</th>
				<th className="header-post">Quantity</th>
				<th className="header-post">Post Fixture</th>
				<th className="header-post">Watts/Fixture</th>
				<th className="header-post">Cost/Fixture</th>
				<th className="header-post">Rebate</th>
				
			</tr>

			{  	this.props.surveyDatatArr.map(function(survey){
	  		return (
						<tr>
							<td>Floor {survey.floor_number} {survey.room}</td>
							<td className="data1">{survey.quantity}</td>
							<td className="data1">{survey.fixture}</td>
							<td className="data1">{survey.pre_watts} watts</td>
							<td className="data-post">{survey.quantity}</td>
							<td className="data-post">{survey.post_fixture}</td>
							<td className="data-post">{survey.post_watts} watts</td>
							<td className="data-post">${helpers.formatDollar(survey.post_price)}</td>
							<td className="data-post">${helpers.formatDollar(survey.incentive_fix)}</td>
						</tr>
	  			)
		  	})
	  	}

			</tbody>

	</table>

	</div>





	      
		)
	}
}

export default TableDetailedView;