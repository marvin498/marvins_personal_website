import React, { Component } from "react";
import CardComponent from "./CardComponent.jsx";
import logo from "../images/cardImage.jpg";

class CardContainer extends Component {
	render() {
		const props = {
			image: logo,
			header: "Marvin Moise",
			meta: "Owner",
			description:
				"I am a self-driven, dedicated and focused undergraduate. Curiosity is my super power and giving up is my weakness. I strive to achieve all my goals and never cease to learn from my mistakes. I’m always seeking new and exciting activities, challenges and projects to tackle.",
			color: "red"
		};
		return <CardComponent {...props} />;
	}
}

export default CardContainer;
