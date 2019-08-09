import React,{Component} from 'react';
import HomeComponent from './HomeComponent.jsx';
import CardContainer from "./../../app/shared/cards/CardContainer.js";
import {fireStoreDb} from "./../../firebase/firebase.js";

class HomeContainer extends Component {
    constructor(){
        super();
        this.state = {
            collectionOfHomeItems: ""
        }
    }

    componentDidMount(){
        const retrieveHomeContent = fireStoreDb.collection("home").doc("g7CH9EcY63DtBBf62XEo");
        retrieveHomeContent.get().then(content => {
            this.setState({collectionOfHomeItems: content.data()});
        });
    }

    render(){
        const homeScreenContent = Object.entries(this.state.collectionOfHomeItems).map(content => {return content[1]});
        const props = <CardContainer {...homeScreenContent[0]} />;

        return <HomeComponent {...props} />
    }
}

export default HomeContainer;