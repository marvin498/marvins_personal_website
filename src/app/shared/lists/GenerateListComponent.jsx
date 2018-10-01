import React from "react";
import { List } from "semantic-ui-react";

const GenerateListComponent = content => {
	return <List divided horizontal>
			<List.Item>
				<List.Content>
					<content.group centered itemsPerRow={content.limit}>
						{content.itemList.map(card => card)}
					</content.group>
				</List.Content>
			</List.Item>
		</List>;
};
export default GenerateListComponent;
