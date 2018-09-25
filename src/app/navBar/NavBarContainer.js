import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import logo from "../images/logo.JPG";
import { Link } from "react-router-dom";

class NavBarContainer extends Component {
	render() {
		const props = {
			as: "a",
			logo: logo,
			dropDownText: "Dropdown",
			homeDropDownItem: {
				homeText: "Home",
				homeIcon: "expand",
				homeClass: "left floated",
				homeLabel: "HOME",
				homeTo: "/"
			},
			galleryDropDownItem: {
				galleryText: "Gallery",
				galleryIcon: "expand",
				galleryClass: "left floated",
				galleryLabel: "GALLERY",
				galleryAs: { Link },
				galleryTo: "/gallery"
			}
		};

		const propsToSend = {
			...props,
			...props.homeDropDownItem,
			...props.galleryDropDownItem
		};

		return <NavBarComponent {...propsToSend} />;
	}
}
export default NavBarContainer;
