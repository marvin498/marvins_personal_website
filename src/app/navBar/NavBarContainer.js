import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import logo from "../images/logo.JPG";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

class NavBarContainer extends Component {
	returnDropDownObjectInfo = () => {
		return {
			as: "a",
			logo: logo,
			dropDownText: "Dropdown",
			homeDropDownItem: this.returnDropDownItems(
				Link,
				"Home",
				"expand",
				"left floated",
				"HOME",
				"/"
			),
			galleryDropDownItem: this.returnDropDownItems(
				Link,
				"Gallery",
				"expand",
				"left floated",
				"GALLERY",
				"/gallery"
			)
		};
	};

	returnDropDownItems = (ddAs, ddText, ddIcon, ddClass, ddLabel, ddTo) => {
		return (
			<Dropdown.Item
				as={ddAs}
				text={ddText}
				icon={ddIcon}
				class={ddClass}
				label={ddLabel}
				to={ddTo}
			/>
		);
	};

	render() {
		const props = this.returnDropDownObjectInfo();
		return <NavBarComponent {...props} />;
	}
}
export default NavBarContainer;
