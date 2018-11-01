import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StoriesContainer from "././app/stories/StoriesContainer.js";
import GalleryContainer from "././app/gallery/GalleryContainer.js";
import NavBarContainer from "././app/navBar/NavBarContainer.js";
import HomeContainer from "././app/home/HomeContainer.js";
import ResumeContainer from "././app/resume/ResumeContainer.js";
import * as routes from "./constants/routes.js";
import { hotjar } from "react-hotjar";
import { HOTJAR_ID, HOTJAR_SV } from "./constants/hotJar.js";

hotjar.initialize(HOTJAR_ID, HOTJAR_SV);
class App extends Component {
	render() {
		return <div className="App">
				<Router>
					<div>
						<NavBarContainer />
						<Route exact path={routes.DEN_STORIES} component={StoriesContainer} />
						<Route exact path={routes.GALLERY} component={GalleryContainer} />
						<Route exact path={routes.LANDING} component={HomeContainer} />
						<Route exact path={routes.RESUME} component={ResumeContainer} />
					</div>
				</Router>
			</div>;
	}
}

export default App;
