import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Menu, Item } from "semantic-ui-react";

const NavBarComponent = navContent => {
	return (
		<Menu borderless secondary attached="top">
				<Container>
					<Menu.Item as={navContent.as} position="left">
						<Link to={navContent.to}>{navContent.logo}</Link>
					</Menu.Item>
					<Dropdown item simple icon="bars big">
						<Dropdown.Menu>
							<h3>
								{navContent.homeDropDownItem}
								{navContent.galleryDropDownItem}
							</h3>
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item position="right">
						<Item as={navContent.gitHubNavItem.as} href={navContent.gitHubNavItem.href}>
							{navContent.gitHubNavItem.icon}
						</Item>
						<Item as={navContent.linkedinNavItem.as} href={navContent.linkedinNavItem.href}>
							{navContent.linkedinNavItem.icon}
						</Item>
					</Menu.Item>
				</Container>
			</Menu>
		)
};

export default NavBarComponent;
