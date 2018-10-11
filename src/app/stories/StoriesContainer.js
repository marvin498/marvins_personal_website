import React, { Component } from "react";
import StoriesComponent from "./StoriesComponent";
import ItemContainer from "../shared/items/ItemContainer";
import { CardGroup } from "semantic-ui-react";
import GenerateListContainer from '../shared/lists/GenerateListContainer'
import * as items from "../../constants/propObjectContainer";

class StoriesContainer extends Component {
	render() {
		const propsToPass = {
			objectFromContainer: {...items.DEN_STORIES},
			group: CardGroup,
			itemsPerRow: "1",
			wrapper: ItemContainer
		}
		const props = { item: <GenerateListContainer {...propsToPass} /> };
		
		return <StoriesComponent {...props} />;
	}
}

export default StoriesContainer;
