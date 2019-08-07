import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent.jsx";
import GenerateListContainer from "./../shared/lists/GenerateListContainer.js";
import CardContainer from "./../shared/cards/CardContainer.js";
import {CardGroup} from "semantic-ui-react";
import {fireStoreDb} from "./../../firebase/firebase.js";

class GalleryContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			collectionOfCards: ""
		};
	}

	componentDidMount(){
		const retrieveCollectionOfCards = fireStoreDb.collection("gallery").doc("pmiepIDmE3XMMYImgehL");
		retrieveCollectionOfCards.get().then(cards => {
			this.setState({collectionOfCards: cards.data()});
		});
	}

	render() {
		const passToProps = {
			objectFromContainer: {...this.state.collectionOfCards},
			group: CardGroup,
			itemsPerRow: "3",
			wrapper: CardContainer,
		}
		const props = <GenerateListContainer {...passToProps} />;

		return <GalleryComponent {...props} />;
	}
}

export default GalleryContainer;
