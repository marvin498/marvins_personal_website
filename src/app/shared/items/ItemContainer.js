import React, { Component } from "react";
import ItemComponent from "./ItemComponent.jsx";
class ItemContainer extends Component {
	render() {
		return <ItemComponent {...this.props} />;
	}
}
export default ItemContainer;
