import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Item } from "semantic-ui-react";

const NavBarComponent = navContent => (
	<Menu pointing secondary borderless attached="top">
		<Container>
			<Menu.Item as={navContent.as} position="left">
				<Link to={navContent.to}>{navContent.logo}</Link>
			</Menu.Item>
			{ navContent.galleryMenuItem}
			{ navContent.denStoriesMenuItem}
			<Menu.Item position="right">
				<Item
					as={navContent.gitHubNavItem.as}
					href={navContent.gitHubNavItem.href}
				>
					{navContent.gitHubNavItem.icon}
				</Item>
				<Item
					as={navContent.linkedinNavItem.as}
					href={navContent.linkedinNavItem.href}
				>
					{navContent.linkedinNavItem.icon}
				</Item>
			</Menu.Item>
		</Container>
	</Menu>
);

export default NavBarComponent;
