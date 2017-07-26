import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
// import detailedview from './detailedview.css';
import helpers from '../../utils/helpers'


class TableDetailedView extends Component{
render() {
		return (
		
		
 <div className="col-xs-12">
 <h2><b>FINANCIAL ANALYSIS</b></h2>
 <hr />
<table className="table table-bordered">
<tbody>
    <tr>
    <td><b>Project Cost</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.project_cost)}</td>
    </tr>
    <tr>
        <td><b>Annual Energy Savings</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.annual_energy_savings)}</td>
    </tr>
     <tr>
        <td><b>Rebate Amount</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.rebate_ammount)}</td>
    </tr>
     <tr>
        <td><b>Net Cost</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.net_cost)}</td>
    </tr>
     <tr>
        <td><b>kWh saved</b></td>
        <td className="text-danger">{helpers.formatDollar(this.props.incentiveData.kwh_saved)} kWh</td>
    </tr>
     <tr>
        <td><b>kWh Rate</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.kwh_rate)}</td>
    </tr>
     <tr>
        <td><b>Reduced Maintenance Costs</b></td>
       <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.total_maintenance_saving)}</td>
    </tr>
    <tr>
        <td><b>Payback</b></td>
        <td className="text-danger">{(this.props.incentiveData.payback).toFixed(3)} years</td>
    </tr>
    <tr>
        <td><b>ROI</b></td>
        <td className="text-danger">{(this.props.incentiveData.roi*100).toFixed(2)}%</td>
    </tr>
    <tr>
        <td><b>10 Year Life Cycle Savings</b></td>
        <td className="text-danger">${helpers.formatDollar(this.props.incentiveData.ten_year)}</td>
    </tr>
</tbody>
</table>
</div>



      
			)
	}
}

export default TableDetailedView;