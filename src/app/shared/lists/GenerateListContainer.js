import React, { Component } from "react";
import GenerateListComponent from "./GenerateListComponent.jsx";

class GenerateListContainer extends Component {
	render() {
		const props = [];

		Object.entries(this.props.objectFromContainer).map((items, index) => {
			return props.push( <this.props.wrapper { ...items[1] } key={ index } />);
		});

		return <GenerateListComponent itemList={ props } group={ this.props.group } limit={ this.props.itemsPerRow} />;
	}
}

export default GenerateListContainer;
