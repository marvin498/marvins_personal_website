import React from "react";
import { List, Portal, Segment, Header } from "semantic-ui-react";

const GenerateListComponent = content => (
	<div>
	<List divided horizontal>
		<List.Item>
			<List.Content>
				<content.group stackable centered itemsPerRow={content.limit}>
					{content.itemList.map(item => item)}
				</content.group>
			</List.Content>
		</List.Item>
	</List>
	{/* <Portal onClose={content.onClose} open={content.open}>
		<Segment style={{left: '40%', position: 'fixed', top: '50%', zIndex: 1000}}>
			<Header>This is a controlled portal</Header>
			<p>Portals have tons of great callback functions to hook into.</p>
			<p>To close, simply click the close button or click away</p>
		</Segment>
	</Portal> */}
	</div>
);
export default GenerateListComponent;
