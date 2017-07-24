import React, {Component} from 'react';
import Sidebar from 'react-side-bar';
import FormComponent from './FormComponent';

import '../App.css';


class SideBar extends Component {

	render() {
		return (
			<div id="SideBarDiv">
			
				<p>SAD BAR</p>
				<div>
				<FormComponent/>
			</div>
			</div>
			
		)
	}
}

export default SideBar;
