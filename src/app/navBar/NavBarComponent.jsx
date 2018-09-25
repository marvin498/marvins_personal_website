import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import logo from "../images/logo.JPG";

const items = [
	{ key: "editorials", active: true, name: "Editorials" },
	{ key: "review", name: "Reviews" },
	{ key: "events", name: "Upcoming Events" }
];

const MenuExampleProps = () => <Menu items={items} />;

const NavBarComponent = navContent => {
	return (
		<header>
			<Menu fixed="top" inverted>
				<Container>
					<Menu.Item as={navContent.menuType} header>
						<Link to="/">
							<Image
								size="tiny"
								src={navContent.logo}
								style={{ marginRight: "1.5em" }}
								className="navbar-logo-image"
								avatar
							/>
						</Link>
					</Menu.Item>
					<Dropdown item simple text={navContent.dropDownText}>
						<Dropdown.Menu>
							<Dropdown.Item
								as={Link}
								text={navContent.homeText}
								icon={navContent.homeIcon}
								class={navContent.homeClass}
								label={navContent.homeLabel}
								to={navContent.homeTo}
							/>
							<Dropdown.Item
								as={Link}
								text={navContent.galleryText}
								icon={navContent.galleryIcon}
								class={navContent.galleryClass}
								label={navContent.galleryLabel}
								to={navContent.galleryTo}
							/>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Menu>
		</header>
	);
};

export default NavBarComponent;
