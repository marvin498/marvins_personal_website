import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import GridComponent from "./GridComponent";

describe("GridComponent", () => {
	it("render", () => {
		const component = shallow(<GridComponent />);
		expect(component).toMatchSnapshot();
	});
});