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
		const retrieveCardsFromFireStore = fireStoreDb.collection("gallery").doc("pmiepIDmE3XMMYImgehL");
		retrieveCardsFromFireStore.get().then(cards => {
			this.setState({
				collectionOfCards: cards.data()
			});
		});
	}

	render() {
		const passToProps = {
			objectFromContainer: {...this.state.collectionOfCards},
			group: CardGroup,
			itemsPerRow: "3",
			wrapper: CardContainer,
		}
		const props = { card: <GenerateListContainer {...passToProps} />};

		return <GalleryComponent {...props} />;
	}
}

export default GalleryContainer;
