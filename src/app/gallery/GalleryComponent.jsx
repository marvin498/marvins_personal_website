import React from "react";
import { Segment } from "semantic-ui-react";

const GalleryComponent = (galleryContent) => (
	<Segment attached vertical>
		{galleryContent.card}
		<div className="section" id="watchedMovies">
			Movies I've seen go here
		</div>
		<div className="section" id="googlePhotoImg">
			Google Image Photos go here
		</div>
	</Segment>
);

export default GalleryComponent;
