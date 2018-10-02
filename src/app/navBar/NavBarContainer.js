import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import { Menu } from "semantic-ui-react";
import * as propObjects from "./../../constants/propObjectContainer.js";
import {withRouter} from "react-router";

class NavBarContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {activeItem: this.getNavNameBasedOnRoute(props) };
	}

	getNavNameBasedOnRoute = (props) => {
		let currentRoute = null;
		
		Object.entries(propObjects.NAV_BAR_LINKS).map((currentObj) => {
			if(currentObj[1].to === props.location.pathname){
				currentRoute = currentObj[1].name
			}
			return currentRoute;
		});

		return currentRoute;
	};

	handleItemClick = (e, {name}) => this.setState({activeItem: name});

	render() {
		const props = {
			getNavBarLogo: {...propObjects.NAV_BAR_LINKS.NAV_BAR_LOGO},
			getDenStoriesMenuItem: (
				<Menu.Item
					active={this.state.activeItem === propObjects.NAV_BAR_LINKS.NAV_BAR_DEN_STORIES.name}
					onClick={this.handleItemClick}
					{...propObjects.NAV_BAR_LINKS.NAV_BAR_DEN_STORIES}
				/>
			),
			getGalleryMenuItem: (
				<Menu.Item
					active={this.state.activeItem === propObjects.NAV_BAR_LINKS.NAV_BAR_GALLERY.name}
					onClick={this.handleItemClick}
					{...propObjects.NAV_BAR_LINKS.NAV_BAR_GALLERY}
				/>
			),
			getGitHubNavItem: {...propObjects.NAV_BAR_LINKS.NAV_BAR_GIT_HUB},
			getLinkedinNavItem: {...propObjects.NAV_BAR_LINKS.NAV_BAR_LINKEDIN}
		};

		return <NavBarComponent {...props} />;
	}
}
export default withRouter(NavBarContainer);
