import React from "react";
import { Container, Menu } from "semantic-ui-react";

const NavBarComponent = navContent => (
	<Menu fluid stackable pointing secondary borderless attached="top">
		<Container fluid>
			{Object.entries(navContent.getNavBarTabItems).map(navbarItems => navbarItems[1])}
		</Container>
	</Menu>
);

export default NavBarComponent;
