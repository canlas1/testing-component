import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class GraphView extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        };
    }

   

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={50}
                    height={30}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
            }
        }]
    },

                       title:{
                        display: true,
                        text:"ANNUAL ENERGY SAVINGS",
                        fontSize: 25
                       },


                       legend:{
                        display: false,
                       }
                    }}

                    />
</div>




            )
    }


}
export default GraphView