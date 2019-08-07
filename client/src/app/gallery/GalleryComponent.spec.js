import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardGroup, Image } from "semantic-ui-react";
import CardContainer from "./../shared/cards/CardContainer.js";
import GenerateListContainer from "./../shared/lists/GenerateListContainer.js";

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import GalleryComponent from './GalleryComponent';

const renderListContainer = () => {
    const cardContent = { 
        image: <Image 
            href="https://images.pexels.com/photos/1540000/pexels-photo-1540000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            size={"large"} 
            centered 
        />, 
        header: "The Wise Bearded Man", 
        meta: "MET Museum", 
        description: "Random Text That Is Placed Here For Looks", 
        color: "purple" 
    };
    const passToProps = {
        objectFromContainer: {...cardContent},
        group: CardGroup,
        itemsPerRow: "3",
        wrapper: CardContainer,
    }
    const props = {card: <GenerateListContainer {...passToProps} />};
    return shallow({card: <GenerateListContainer {...props} />})
}

describe("A GalleryComponent", () => {
    it("should render without errors", () => {
        const component = shallow(<GalleryComponent />);
        expect(component).toMatchSnapshot();
    });

    it("should render a card onto page", () => {
        const listContainer = renderListContainer();
        shallow(<GalleryComponent {...listContainer} />)
    })
});