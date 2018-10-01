import React, { Component } from "react";
import HomeComponent from "./HomeComponent.jsx";
import ItemContainer from "./../shared/items/ItemContainer.js";
import { CardGroup } from "semantic-ui-react";
import GenerateListContainer from './../shared/lists/GenerateListContainer.js'
import * as items from "./../../constants/cardObjects.js";
class HomeContainer extends Component {
	render() {
		const propsToPass = {
			objectFromContainer: {...items.HOME_ABOUT_ME},
			group: CardGroup,
			itemsPerRow: "1",
			wrapper: ItemContainer
		}
		const props = { item: <GenerateListContainer {...propsToPass} /> };
		
		return <HomeComponent {...props} />;
	}
}

export default HomeContainer;
