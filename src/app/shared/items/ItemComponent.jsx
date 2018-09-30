import React from "react";
import { Item, Container, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as routes from "./../../../constants/routes.js";

const ItemComponent = content => (
	<Item.Group>
		<Item>
			{content.card}
			<Item.Content>
				<Container fluid>
					<Container as="h1">
						<Item.Header as={Link} to={routes.LANDING}>
							{content.header}
						</Item.Header>
					</Container>
					<Container textAlign="center" as={Item.Meta}>
						{content.meta}
					</Container>
					<Divider />
					<Container textAlign="center">
						<p>{content.description}</p>
					</Container>
					<Container as={Item.Extra}>{content.extra}</Container>
				</Container>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default ItemComponent;
