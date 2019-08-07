import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import ItemComponent from "./ItemComponent";

describe("ItemComponent", () => {
	it("render", () => {
		const component = shallow(<ItemComponent />);
		expect(component).toMatchSnapshot();
	});
});