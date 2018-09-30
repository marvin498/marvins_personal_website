import React, { Component } from "react";
import HomeComponent from "./HomeComponent.jsx";
import ItemContainer from "./../shared/items/ItemContainer.js";
import * as items from "./../../constants/cardObjects.js";
class HomeContainer extends Component {
	render() {
		const props = { item: <ItemContainer {...items.HOME_ABOUT_ME.ABOUT_ME} /> };
		return <HomeComponent {...props} />;
	}
}

export default HomeContainer;
