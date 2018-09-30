import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "././app/home/HomeContainer.js";
import GalleryContainer from "././app/gallery/GalleryContainer.js";
import NavBarContainer from "././app/navBar/NavBarContainer.js";
import * as routes from "./constants/routes";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<NavBarContainer />
						<Route exact path={routes.ABOUT_ME} component={HomeContainer} />
						<Route exact path={routes.GALLERY} component={GalleryContainer} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
