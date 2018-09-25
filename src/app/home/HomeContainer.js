import React, { Component } from "react";
import HomeComponent from "./HomeComponent.jsx";
import ItemContainer from "./../shared/items/ItemContainer.js";

class HomeContainer extends Component {
	render() {
		const props = { item: <ItemContainer /> };
		return <HomeComponent {...props} />;
	}
}

export default HomeContainer;
