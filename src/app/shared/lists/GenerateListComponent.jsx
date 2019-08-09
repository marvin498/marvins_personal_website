import React from "react";
import {List} from "semantic-ui-react";

const GenerateListComponent = content => (
	<List divided horizontal>
		<List.Item>
			<List.Content>
				<content.group stackable centered itemsPerRow={content.limit}>
					{content.itemList.map(itemToBePlacedInGrid => itemToBePlacedInGrid)}
				</content.group>
			</List.Content>
		</List.Item>
	</List>
);
export default GenerateListComponent;
