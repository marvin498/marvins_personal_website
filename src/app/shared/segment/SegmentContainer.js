import React, { Component } from "react";
import CardComponent from "./../../cards/CardComponent.jsx";
import itemLogo from "./../../images/itemLogo.JPG";
import SegmentComponent from "./SegmentComponent.jsx";

class SegmentContainer extends Component {
	render() {
		const itemProps = {
			image: itemLogo,
			header: "Yu-Gi-Oh",
			meta: "heart of the cards",
			description: "Story about the egyptian god cards and that one boy",
			color: "red"
		};

		const props = { card: <CardComponent {...itemProps} /> };

		return <SegmentComponent {...props} />;
	}
}

export default SegmentContainer;
