import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
// import detailedview from './detailedview.css';


class TableDetailedView extends Component{
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

		<tr>
			<td>Stairs</td>
			<td className="data1">26</td>
			<td className="data1">T9 Circle Line</td>
			<td className="data1">40</td>
			<td className="data-post">26</td>
			<td className="data-post">RemPhos LED Fixture</td>
			<td className="data-post">12</td>
			<td className="data-post">$310</td>
			<td className="data-post">$70</td>
			
		</tr>
				<tr>
			<td>Lower Basement</td>
			<td className="data1">5</td>
			<td className="data1">CFL Screw in</td>
			<td className="data1">23</td>
			<td className="data-post">5</td>
			<td className="data-post">CREE LED 6" Can Retrofit</td>
			<td className="data-post">12</td>
			<td className="data-post">$51</td>
			<td className="data-post">$20</td>
			
		</tr>

		<tr>
			<td>Basement</td>
			<td className="data1">1</td>
			<td className="data1">1L 2FT T12</td>
			<td className="data1">20</td>
			<td className="data-post">1</td>
			<td className="data-post">LAMAR DLLT LED</td>
			<td className="data-post">10</td>
			<td className="data-post">$275</td>
			<td className="data-post">$70</td>
			
		</tr>
		<tr>
			<td>Compactor Room</td>
			<td className="data1">2</td>
			<td className="data1">2L 4FT T12</td>
			<td className="data1">80</td>
			<td className="data-post">2</td>
			<td className="data-post">LED (1) 48" 18W T8 lamp</td>
			<td className="data-post">18</td>
			<td className="data-post">$38</td>
			<td className="data-post">$20</td>
			
		</tr>
		<tr>
			<td>Compactor Room</td>
			<td className="data1">4</td>
			<td className="data1">CFL Screw IN</td>
			<td className="data1">23</td>
			<td className="data-post">4</td>
			<td className="data-post">LED 12W A-Lamp</td>
			<td className="data-post">12</td>
			<td className="data-post">$15</td>
			<td className="data-post">$15</td>
		</tr>

		<tr>
			<td>Laundry Room</td>
			<td className="data1">3</td>
			<td className="data1">1L 4FT T8</td>
			<td className="data1">32</td>
			<td className="data-post">3</td>
			<td className="data-post">LED (1) 48" 18W T8 lamp</td>
			<td className="data-post">18</td>
			<td className="data-post">$38</td>
			<td className="data-post">$20</td>
		</tr>

		<tr>
			<td>Trash Room</td>
			<td className="data1">1</td>
			<td className="data1">2L 8FT T12</td>
			<td className="data1">150</td>
			<td className="data-post">1</td>
			<td className="data-post">LED (2) 48" 18W T8 lamp</td>
			<td className="data-post">36</td>
			<td className="data-post">$56</td>
			<td className="data-post">$40</td>
		</tr>

		<tr>
			<td>Boiler Room</td>
			<td className="data1">2</td>
			<td className="data1">1L 2FT T12</td>
			<td className="data1">20</td>
			<td className="data-post">2</td>
			<td className="data-post">LED (1) 24" 14W T8 lamp </td>
			<td className="data-post">14</td>
			<td className="data-post">$38</td>
			<td className="data-post">$20</td>
		</tr>

			<tr>
			<td>Boiler Room</td>
			<td className="data1">1</td>
			<td className="data1">2L 4FT T12</td>
			<td className="data1">80</td>
			<td className="data-post">1</td>
			<td className="data-post">LED (2) 48" 18W T8 lamp</td>
			<td className="data-post">36</td>
			<td className="data-post">$56</td>
			<td className="data-post">$40</td>
		</tr>

		</tbody>

</table>

</div>





      
			)
	}
}

export default TableDetailedView;