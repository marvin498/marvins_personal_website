import React from 'react';
import {Segment} from "semantic-ui-react";
import {hotjar} from 'react-hotjar';
import {HOTJAR_ID, HOTJAR_SV} from './../../constants/hotJar.js'

hotjar.initialize(HOTJAR_ID, HOTJAR_SV);

const HomeComponent = (content) => <Segment padded vertical attached>{content.item}</Segment>

export default HomeComponent;