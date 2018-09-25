import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "././app/home/HomeContainer.js";
import GalleryContainer from "././app/gallery/GalleryContainer.js";
import NavBarContainer from "././app/navBar/NavBarContainer.js";
import WebsiteFooterComponent from "././app/siteFooter/websiteFooterComponent.jsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<NavBarContainer />
						<Route exact path="/" component={HomeContainer} />
						<Route path="/gallery" component={GalleryContainer} />
					</div>
				</Router>
				<WebsiteFooterComponent />
			</div>
		);
	}
}

export default App;
