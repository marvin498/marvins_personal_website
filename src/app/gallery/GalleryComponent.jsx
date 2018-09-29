import React from "react";
import SegmentContainer from "./../shared/segment/SegmentContainer";
function GalleryComponent(galleryContent) {
	return (
		<body>
			{galleryContent.card}
			<div className="section" id="watchedMovies">
				Movies I've seen go here
			</div>
			<div className="section" id="googlePhotoImg">
				Google Image Photos go here
			</div>
		</body>
	);
}

export default GalleryComponent;
