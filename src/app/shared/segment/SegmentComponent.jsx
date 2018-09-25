import React from "react";
import { Segment } from "semantic-ui-react";

const SegmentComponent = segmentContent => (
	<Segment.Group horizontal>
		<Segment>{segmentContent.card}</Segment>
		<Segment>Middle</Segment>
		<Segment>Right</Segment>
	</Segment.Group>
);

export default SegmentComponent;
