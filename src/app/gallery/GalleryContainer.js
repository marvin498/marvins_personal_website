import React, { Component } from "react";
import SegmentContainer from "./../shared/segment/SegmentContainer.js";
import GalleryComponent from "./GalleryComponent.jsx";

class GalleryContainer extends Component {
	render() {
		const props = { card: <SegmentContainer /> };

		return <GalleryComponent {...props} />;
	}
}

export default GalleryContainer;
