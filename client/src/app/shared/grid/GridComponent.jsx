import React from "react";
import {Grid, List} from 'semantic-ui-react';

const GridComponent = content => (
	<Grid.Row padded="Vertically">
		<Grid.Column>
			<Grid.Row>
				{Object.entries(content).map(itemToBePlacedInRow => (
					<List verticalAlign="middle" relaxed bulleted>
						<List.Item>
							{itemToBePlacedInRow[1]}
						</List.Item>
					</List>
				))}
			</Grid.Row>
		</Grid.Column>
	</Grid.Row>
);

export default GridComponent;