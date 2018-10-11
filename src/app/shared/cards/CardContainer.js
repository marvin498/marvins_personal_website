import React, { Component } from "react";
import CardComponent from "./CardComponent.jsx";
import * as externalRoutes from './../../../constants/externalRoutes';
class CardContainer extends Component {
	render() {
		const props = {
			image: this.props.image,
			header: this.props.header,
			meta: <a href={externalRoutes.MET_MUSEUM} >{this.props.meta}</a>,//remove a tag
			description: this.props.description,
			color: this.props.color,
			onClick: this.props.onClick
		};

		return <CardComponent {...props} />;
	}
}

export default CardContainer;
