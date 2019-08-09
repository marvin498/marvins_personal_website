import React from "react";
import { Grid, Divider } from "semantic-ui-react";
import CardContainer from './../shared/cards/CardContainer.js'

const ResumeComponent = (content) => (
    <Grid textAlign="center" columns={2} doubling padded='vertically'>
		{/* Header */}
		<Grid.Row>
			<Grid.Row>
				{content.header}
			</Grid.Row>
		</Grid.Row>
		<Divider />
		{/* left side */}
		<Grid.Row>
			<Grid.Column>
				<Grid.Row>
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="Education"
                                raised="true"
                                padded
                            />
						</Grid.Row>
                        {content.education}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="Objective"
                                raised="true"
                            />
						</Grid.Row>
                        {content.objective}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
							<CardContainer
                                header="Summary of qualification"
                                raised="true"
                            />
						</Grid.Row>
                        {content.qualification}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="On Campus Organizations"
                                raised="true"
                            />
						</Grid.Row>
                       {content.organizations}
					</Grid.Column>
				</Grid.Row>
			</Grid.Column>
            <Divider vertical />
			{/* right side */}
			<Grid.Column>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="Work Experience"
                                raised="true"
                            />
						</Grid.Row>
                        {/* {content.workExperience} */}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Horizontal">
					<Grid.Column>
						<Grid.Row>
							<CardContainer
								header="Technical Experience"
								raised="true"
							/>
						</Grid.Row>
						{content.experience}
					</Grid.Column>
				</Grid.Row>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default ResumeComponent;