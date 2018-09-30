import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import { Dropdown } from "semantic-ui-react";
import * as propObjects from "./../../constants/cardObjects.js";
class NavBarContainer extends Component {
	render() {
		const props = { 
			...propObjects.NAV_BAR_LINKS.NAV_BAR_LOGO, 
			homeDropDownItem: <Dropdown.Item { ...propObjects.NAV_BAR_LINKS.NAV_BAR_HOME_ABOUT_ME } />, 
			galleryDropDownItem: <Dropdown.Item { ...propObjects.NAV_BAR_LINKS.NAV_BAR_GALLERY } />, 
			gitHubNavItem:  {...propObjects.NAV_BAR_LINKS.NAV_BAR_GIT_HUB}, 
			linkedinNavItem: { ...propObjects.NAV_BAR_LINKS.NAV_BAR_LINKEDIN} 
		};
		return <NavBarComponent {...props} />;
	}
}
export default NavBarContainer;
