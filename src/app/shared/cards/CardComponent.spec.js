import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import CardComponent from "./CardComponent";

describe("CardComponent", () => {
	it("render", () => {
		const component = shallow(<CardComponent />);
		expect(component).toMatchSnapshot();
	});
});