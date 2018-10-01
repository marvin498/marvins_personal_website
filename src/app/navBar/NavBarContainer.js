import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import * as propObjects from "./../../constants/cardObjects.js";

class NavBarContainer extends Component {
	constructor(props){
		super(props);
		this.state = {active: 'gallery'};
	}

	handleItemClick = (e, {name}) => this.setState({activeItem: name})
		

	render() {
		const {activeItem} = this.state
		const props = { 
			...propObjects.NAV_BAR_LINKS.NAV_BAR_LOGO, 
			denStoriesMenuItem: <Menu.Item 
				as={Link}
				active={ activeItem === 'den stories' } 
				onClick={ this.handleItemClick } 
				{ ...propObjects.NAV_BAR_LINKS.NAV_BAR_HOME_ABOUT_ME } />, 
			galleryMenuItem: <Menu.Item
				as={Link}
				active={ activeItem === 'gallery'}
				onClick={ this.handleItemClick } 
				{ ...propObjects.NAV_BAR_LINKS.NAV_BAR_GALLERY } />, 
			gitHubNavItem:  {...propObjects.NAV_BAR_LINKS.NAV_BAR_GIT_HUB}, 
			linkedinNavItem: { ...propObjects.NAV_BAR_LINKS.NAV_BAR_LINKEDIN},
		};
		
		return <NavBarComponent {...props} />;
	}
}
export default NavBarContainer;
