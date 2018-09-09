import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/location">Location</NavLink>
				<NavLink to="/accomodation">Accomodations</NavLink>
				<NavLink to="/registry">Registry</NavLink>
			</div>
		);
	}
}

export default NavBar;
