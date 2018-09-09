import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<NavBar />
				<Route exact path="/" render={() => <div>Home</div>} />
				<Route exact path="/about" render={() => <div>Test</div>} />
				<Route exact path="/location" render={() => <div>Location</div>} />
				<Route
					exact
					path="/accomodation"
					render={() => <div>Accomodations</div>}
				/>
				<Route exact path="/registry" render={() => <div>Registry</div>} />
				<Redirect to="/" />
			</div>
		);
	}
}

export default App;
