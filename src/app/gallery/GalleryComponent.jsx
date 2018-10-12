import React from "react";
import { Segment } from "semantic-ui-react";
import {hotjar} from 'react-hotjar';
import {HOTJAR_ID, HOTJAR_SV} from './../../constants/hotJar.js'

hotjar.initialize( HOTJAR_ID, HOTJAR_SV );

const GalleryComponent = (galleryContent) => (
	<Segment attached vertical>
		{galleryContent.card}
	</Segment>
);

export default GalleryComponent;
