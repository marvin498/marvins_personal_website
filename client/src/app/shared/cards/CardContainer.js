import React, { Component } from "react";
import CardComponent from "./CardComponent.jsx";
import { SEMANTIC_COLORS } from "./../../../constants/propObjectContainer.js";
import { Image, Label } from "semantic-ui-react";
import * as externalRoutes from "./../../../constants/externalRoutes";

class CardContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			isExtraHidden: true
		};
	}

	generateColor = () => {
		return Object.keys(SEMANTIC_COLORS)[Math.floor(Math.random() * 2)];
	};

	toggleIsExtraHidden = () => {
		this.setState(prevState => ({ isExtraHidden: !prevState.isExtraHidden }));
	};

	routeToExternalLink = () => {
		let directToLink = {
			"MET Museum": externalRoutes.MET_MUSEUM,
			"Museum of Modern Art (MoMA)": externalRoutes.MOMA
		};

		return directToLink[this.props.meta];
	};

	render() {
		const props = {
			image: <Image src={this.props.image} centered size="big" />,
			header: this.props.header,
			meta: <a href={this.routeToExternalLink()}>{this.props.meta}</a>, //remove a tag
			description: this.props.description,
			extra: this.state.isExtraHidden ? null : this.props.extra,
			color: this.props.generateColor ? this.generateColor() : this.props.color,
			onClick: this.props.onClick
				? this.props.onClick
				: this.toggleIsExtraHidden
		};

		return <CardComponent {...props} />;
	}
}

export default CardContainer;
