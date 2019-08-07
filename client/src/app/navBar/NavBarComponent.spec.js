import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import NavBarComponent from "./NavBarComponent"

describe("NavBarComponent", () => {
	it("render", () => {
		const component = shallow(<NavBarComponent />);
		expect(component).toMatchSnapshot();
	});
});