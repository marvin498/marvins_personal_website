import React, { Component } from "react";
import CardComponent from "./CardComponent.jsx";

class CardContainer extends Component {
	render() {
		const props = {
			image: this.props.image,
			header: this.props.header,
			meta: this.props.meta,
			description: this.props.description,
			color: this.props.color
		};

		return <CardComponent {...props} />;
	}
}

export default CardContainer;
