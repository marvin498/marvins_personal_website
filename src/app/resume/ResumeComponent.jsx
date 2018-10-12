import React from "react";
import { Grid, Image, Divider, List } from "semantic-ui-react";
import CardContainer from './../shared/cards/CardContainer.js'
import {hotjar} from 'react-hotjar';
import {HOTJAR_ID, HOTJAR_SV} from './../../constants/hotJar.js'

hotjar.initialize( HOTJAR_ID, HOTJAR_SV );

const ResumeComponent = () => (
    <Grid textAlign="center" columns={2} doubling padded='vertically'>
		{/* Header */}
		<Grid.Row>
			<Grid.Row>
				<Grid.Row>
					<h1>Marvin Moise</h1>
				</Grid.Row>
				<Grid.Row>linkedin.com/in/marvin-moise/</Grid.Row>
				<Grid.Row>github.com/marvin498</Grid.Row>
				<Grid.Row>
					<Grid.Column>Email: marvinmoise223@gmail.com</Grid.Column>
					<Grid.Column>Cell: 404-573-0968</Grid.Column>
				</Grid.Row>
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
                                color="purple"
                                padded
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row padded>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="Technical Experience"
                                raised="true"
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
						</Grid.Row>
						<Grid.Column>
							<CardContainer
								description="Everything related to education"
								raised="true"
								onClick={() => null}
							/>
						</Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
						</Grid.Row>
						<Grid.Column>
							<CardContainer
								description="Everything related to education"
								raised="true"
								onClick={() => null}
							/>
						</Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
						<Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
						</Grid.Row>
						<Grid.Column>
							<CardContainer
								description="Everything related to education"
								raised="true"
								onClick={() => null}
							/>
						</Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="Objective"
                                raised="true"
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
							<CardContainer
                                header="Summary of qualification"
                                raised="true"
                                //onClick={() => false}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="On Campus Organizations"
                                raised="true"
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
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
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer 
                                description="Everything related to education" 
                                onClick={() => null} 
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description="Everything related to education"
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row padded="Vertically">
					<Grid.Column>
						<Grid.Row>
                            <CardContainer
                                header="On Campus Organizations"
                                raised="true"
                                //onClick={() => null}
                            />
						</Grid.Row>
                        <Grid.Row>
                            <CardContainer 
                                description="Everything related to education" 
                                raised 
                                fluid 
                                color="violet" 
                                onClick={() => null} 
                            />
                        </Grid.Row>
                        <Grid.Column>
                            <CardContainer 
                                description="Everything related to education" 
                                onClick={() => null} 
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <CardContainer
                                description={<List.List as="ul"><List.Item as="li">Everything related to education</List.Item></List.List>}
                                raised="true"
                                onClick={() => null}
                            />
                        </Grid.Column>
					</Grid.Column>
				</Grid.Row>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default ResumeComponent;