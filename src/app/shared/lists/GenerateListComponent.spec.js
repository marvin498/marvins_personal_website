import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import GenerateListComponent from "./GenerateListComponent";

describe("GenerateListComponent", () => {
	it("render", () => {
		const component = shallow(<GenerateListComponent />);
		expect(component).toMatchSnapshot();
	});
});