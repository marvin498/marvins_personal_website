import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import StoriesComponent from "./StoriesComponent";

describe("StoriesComponent", () => {
	it("render", () => {
		const component = shallow(<StoriesComponent />);
		expect(component).toMatchSnapshot();
	});
});