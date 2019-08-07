import React, { Component } from "react";
import GenerateListComponent from "./GenerateListComponent.jsx";
import { Image, Modal} from "semantic-ui-react";

class GenerateListContainer extends Component {
	render() {
		const props = [];

		Object.entries(this.props.objectFromContainer).map((items, index) => {
			return props.push(
				<Modal 
					trigger={
						<this.props.wrapper 
							image={items[1].image}
							{...items[1]} 
							key={index}  
						/>
					} 
					content={<Image size={"massive"} src={items[1].image} />} 
					size={"large"}
					basic
					closeIcon
				/>
			);
		});

		return <GenerateListComponent itemList={ props } group={ this.props.group } limit={ this.props.itemsPerRow} />;
	}
}

export default GenerateListContainer;
