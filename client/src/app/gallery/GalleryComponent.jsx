import React from "react";
import { Segment } from "semantic-ui-react";

const GalleryComponent = (galleryContent) => (
	<Segment attached vertical>
		{galleryContent.card}
	</Segment>
);

export default GalleryComponent;
