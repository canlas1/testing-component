import React, {Component} from 'react';

class TopNav extends Component {
	render() {
		return (
			<nav>
				<div className="navbar">
					<a href="#">EnergyLeads/Home</a>
					<a href="#">Account</a>
					<a href="#">Logout</a>
				</div>				
			</nav>
		)
	}
}

export default TopNav;