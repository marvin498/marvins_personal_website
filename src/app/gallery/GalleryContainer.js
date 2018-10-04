import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent.jsx";
import GenerateListContainer from "./../shared/lists/GenerateListContainer.js";
import CardContainer from "./../shared/cards/CardContainer.js";
import { CardGroup, Portal } from "semantic-ui-react";
import * as items from "./../../constants/propObjectContainer.js";
class GalleryContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			isPortalOpen: false
		};
	}

	handlePortalClick = () => alert( 'hello ')
	handlePortalClose = () => this.setState({isPortalOpen: false});

	render() {
		const {open} = this.state
		const passToProps = {
			objectFromContainer: {...items.GALLERY_CARD_ITEMS},
			group: CardGroup,
			itemsPerRow: "3",
			wrapper: CardContainer,
		}
		const props = { card: <GenerateListContainer {...passToProps} />};

		return <GalleryComponent {...props} />;
	}
}

export default GalleryContainer;
