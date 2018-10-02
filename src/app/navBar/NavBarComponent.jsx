import React from "react";
import { Container, Menu } from "semantic-ui-react";

const NavBarComponent = navContent => (
	<Menu fluid stackable pointing secondary borderless attached="top">
		<Container fluid>
			<Menu.Item {...navContent.getNavBarLogo} position="left" />
			{navContent.getDenStoriesMenuItem}
			{navContent.getGalleryMenuItem}
			<Menu.Item {...navContent.getGitHubNavItem}  position="right" />
			<Menu.Item {...navContent.getLinkedinNavItem} />
		</Container>
	</Menu>
);

export default NavBarComponent;
