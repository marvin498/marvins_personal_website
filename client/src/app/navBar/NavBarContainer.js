import React, {Component} from "react";
import NavBarComponent from "./NavBarComponent.jsx";
import {Menu} from "semantic-ui-react";
import * as retrievePropObjects from "./../../constants/propObjectContainer.js";
import {withRouter} from "react-router";

class NavBarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {activeItem: this.getNavNameBasedOnRoute(props)};
	}

	componentWillUpdate(nextProps){
		let nextRoute = this.getNavNameBasedOnRoute(nextProps);

		if(!nextRoute.includes(this.state.activeItem)){
			this.onChange(nextProps)
		}
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

	onChange = (props) => {
		this.setState({activeItem: this.getNavNameBasedOnRoute(props)});
	}

	render() {
		const props = {
			getNavBarTabItems: Object.entries(retrievePropObjects.GET_NAV_BAR_ITEM).map((content, index) => (
				<Menu.Item
					{...content[1]}
					active={this.state.activeItem === content[1].name}
					key={index}
				/>
			))
		};

		return <NavBarComponent {...props} />;
	}
}
export default withRouter(NavBarContainer);
