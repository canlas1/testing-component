import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
// import detailedview from './detailedview.css';


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
        <td className="text-danger">$9,028</td>
    </tr>
    <tr>
        <td><b>Annual Energy Savings</b></td>
        <td className="text-danger">$1,027</td>
    </tr>
     <tr>
        <td><b>Rebate Amount</b></td>
        <td className="text-danger">$2,270</td>
    </tr>
     <tr>
        <td><b>Net Cost</b></td>
        <td className="text-danger">$6,758</td>
    </tr>
     <tr>
        <td><b>kWh saved</b></td>
        <td className="text-danger">10,275</td>
    </tr>
     <tr>
        <td><b>kWh Rate</b></td>
        <td className="text-danger">$0.10</td>
    </tr>
     <tr>
        <td><b>Reduced Maintenance Costs</b></td>
        <td className="text-danger">$1,570</td>
    </tr>
    <tr>
        <td><b>Payback</b></td>
        <td className="text-danger">2.6 years</td>
    </tr>
    <tr>
        <td><b>ROI</b></td>
        <td className="text-danger">38%</td>
    </tr>
    <tr>
        <td><b>10 Year Life Cycle Savings</b></td>
        <td className="text-danger">$19,224</td>
    </tr>
</tbody>
</table>
</div>



      
			)
	}
}

export default TableDetailedView;