import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import { Menu } from "semantic-ui-react";
import * as retrievePropObjects from "./../../constants/propObjectContainer.js";
import { withRouter } from "react-router";

class NavBarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: this.getNavNameBasedOnRoute(props) };
	}

	getNavNameBasedOnRoute = props => {
		let currentRoute = null;

		Object.entries(retrievePropObjects.GET_NAV_BAR_ITEM).map(currentObj => {
			if (currentObj[1].to === props.location.pathname) {
				currentRoute = currentObj[1].name;
			}
			return currentRoute;
		});

		return currentRoute;
	};

	handleItemClick = (e, { name }) =>
		!name
			? this.setState({ activeItem: "home" })
			: this.setState({ activeItem: name });

	render() {
		const props = {
			getNavBarTabItems: Object.entries(
				retrievePropObjects.GET_NAV_BAR_ITEM
			).map((content, index) => (
				<Menu.Item
					{...content[1]}
					active={this.state.activeItem === content[1].name}
					onClick={this.handleItemClick}
					key={index}
				/>
			))
		};

		return <NavBarComponent {...props} />;
	}
}
export default withRouter(NavBarContainer);
