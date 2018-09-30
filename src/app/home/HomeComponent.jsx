import React from "react";
import { Segment } from "semantic-ui-react";

const HomeComponent = content => (
	<Segment raised vertical attached>{content.item}</Segment>
);

export default HomeComponent;
