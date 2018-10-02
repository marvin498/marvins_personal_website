import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent.jsx";
import GenerateListContainer from "./../shared/lists/GenerateListContainer.js";
import CardContainer from "./../shared/cards/CardContainer.js";
import { CardGroup } from "semantic-ui-react";
import * as items from "./../../constants/propObjectContainer.js";
class GalleryContainer extends Component {
	render() {
		const passToProps = {
			objectFromContainer: {...items.GALLERY_CARD_ITEMS},
			group: CardGroup,
			itemsPerRow: "3",
			wrapper: CardContainer
		}
		const props = { card: <GenerateListContainer {...passToProps} />};

		return <GalleryComponent {...props} />;
	}
}

export default GalleryContainer;
