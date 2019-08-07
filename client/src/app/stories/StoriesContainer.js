import React, { Component } from "react";
import StoriesComponent from "./StoriesComponent";
import ItemContainer from "../shared/items/ItemContainer";
import { CardGroup } from "semantic-ui-react";
import GenerateListContainer from "../shared/lists/GenerateListContainer";
import {fireStoreDb} from "./../../firebase/firebase.js";

class StoriesContainer extends Component {
	constructor() {
		super();
		this.state = {
			collectionOfStories: ""
		};
	}

	componentDidMount() {
		const retrieveCollectionOfStories = fireStoreDb.collection("stories").doc("KF94a0G0rr2RQXxyWVDE");
		retrieveCollectionOfStories.get().then(stories => {
			this.setState({collectionOfStories: stories.data()});
		});
	}

	render() {
		const propsToPass = {
			objectFromContainer: {...this.state.collectionOfStories},
			group: CardGroup,
			itemsPerRow: "1",
			wrapper: ItemContainer
		};
		const props = <GenerateListContainer {...propsToPass} />;
		return <StoriesComponent {...props} />;
	}
}

export default StoriesContainer;
