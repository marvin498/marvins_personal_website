import React,{Component} from 'react';
import HomeComponent from './HomeComponent.jsx';
import ItemContainer from "../shared/items/ItemContainer";
import GenerateListContainer from './../shared/lists/GenerateListContainer.js';
import {CardGroup} from "semantic-ui-react";
import CardContainer from "./../../app/shared/cards/CardContainer.js"
import * as items from './../../constants/propObjectContainer'
class HomeContainer extends Component {
    render(){
        const propsToPass = {
            objectFromContainer: <CardContainer {...items.HOME_ITEMS.HOME_CARD} />,
        }

        const props = { item: <CardContainer {...items.HOME_ITEMS.HOME_CARD} /> };
        
        return <HomeComponent {...props} />
    }
}

export default HomeContainer;