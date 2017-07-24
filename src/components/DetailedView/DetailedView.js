import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
import FinancialData from './FinancialData';
import TableDetailedView from './TableDetailedView';
import GraphView from './GraphView';
import detailedview from './detailedview.css';
import helpers from '../../utils/helpers';

class DetailedView extends Component{

    constructor(props) {
        super();
        this.state = {
            chartData: {}
        };
        // this.getChartData = this.getChartData.bind(this);
    }


    componentWillMount() {
        this.getChartData();
    }

    getChartData() {

        //TODO: AJAX call here!!!!!

        this.setState({
            chartData: {

                title: {
                    text: "ANNUAL ENERGY SAVINGS",
                    fontSize: 25
                },
                yAxisID: 0,

                labels: ["Existing", "Proposed"],

                datasets: [{
                    label: "Savings",
                    data: [15706, 5431],
                     backgroundColor: [
                    'rgba(255,166,22,.7)',
                    'rgba(0,0,0,.7)'
                ]
                }],
               
            }

        })
    }


render() {
        return (
             <div className="container">
             <page size="A4">
             <div id="header">

             <h1 className="text-right"><b>YOUR COMPANY NAME</b></h1>

             </div>
        <h1 id="makeityellow"><b>LIGHTING PROPOSAL: <span className="text-danger"> THE PROJECT</span></b></h1>
        <hr />
    <div className="row">


<div className="col-xs-12">  
<h2><b>SUMMARY</b></h2>
<p>The information contained in this proposal addresses the lighting and labor needs for <span className="text-danger"> 70E 12th Street</span>  </p>
<p>The report analyzes the current lighting conditions for each building and provides recommendations
given the following considerations:</p>
<ul>
    <li>Replacement of existing technology to improve performance and efficiency</li>
    <li>Occupant experience and safety</li>
    <li>Consideration of upfront costs</li>
</ul>
<p>We have included incentive and rebate opportunities where applicable.</p>
</div>
</div>

<br /><br />
<div className="row">
<div className="col-xs-6">
    <h2><b>SCOPE OF WORK</b></h2>
    <hr /> 
    <p><b>Project Recommendations</b></p>
    <br />
    <ul>
        <li>Replacing existing compact Fluorescent can Fixtures with LED fixtures</li>
        <li>Replacement of existing technology to improve performance and efficiency</li>
        <li>Applying for utility Incentives to Offset project costs</li>
    </ul>
</div>



<div className="col-xs-6">
 <GraphView chartData = { this.state.chartData } /> 
 </div>

 </div>
 <div className="row">


<FinancialData />


</div>
 <br /><br />
 </page>

<page size="A4">

<TableDetailedView />
</page>
</div>










      
            )
    }
}

export default DetailedView;