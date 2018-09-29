import React from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ItemComponent = content => (
	<Item.Group>
		<Item className="item-container">
			{/* <Item.Image size="tiny" src={content.src} /> */}
			{content.card}
			<Item.Content className="item-groups">
				<Item.Header as={Link} to="/">
					{content.header}
				</Item.Header>
				<Item.Meta>{content.meta}</Item.Meta>
				<Item.Description>
					<p>{content.description}</p>
				</Item.Description>
				<Item.Extra>{content.extra}</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default ItemComponent;
