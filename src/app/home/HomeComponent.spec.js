import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import HomeComponent from './HomeComponent';

describe("HomeComponent", () => {
	it("render", () => {
		const component = shallow(<HomeComponent />);
		expect(component).toMatchSnapshot();
	});
});