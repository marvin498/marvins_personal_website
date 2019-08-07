import React, { Component } from "react";
import CardComponent from "./CardComponent.jsx";
import { SEMANTIC_COLORS } from "./../../../constants/propObjectContainer.js";
import { Image } from "semantic-ui-react";
import * as externalRoutes from "./../../../constants/externalRoutes";

class CardContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			isExtraContentHidden: true
		};
	}

	generateColor = () => {
		return Object.keys(SEMANTIC_COLORS)[Math.floor(Math.random() * 2)];
	};

	toggleIsExtraContentHidden = () => {
		this.setState(prevState => ({
			isExtraContentHidden: !prevState.isExtraContentHidden
		}));
	};

	routeToExternalLink = () => {
		const directToLink = {
			"MET Museum": externalRoutes.MET_MUSEUM,
			"Museum of Modern Art (MoMA)": externalRoutes.MoMA
		};

		return directToLink[this.props.meta];
	};

	render() {
		const props = {
			image: <Image src={this.props.image} centered size="big" />,
			header: this.props.header,
			meta: <a href={this.routeToExternalLink()}>{this.props.meta}</a>,
			description: this.props.description,
			extra: this.state.isExtraContentHidden ? null : this.props.extra,
			color: this.props.generateColor ? this.generateColor() : this.props.color,
			onClick: this.props.onClick
				? this.props.onClick
				: this.toggleIsExtraContentHidden
		};

		return <CardComponent {...props} />;
	}
}

export default CardContainer;
