import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import ResumeComponent from "./ResumeComponent";

describe("ResumeComponent", () => {
	it("render", () => {
		const component = shallow(<ResumeComponent />);
		expect(component).toMatchSnapshot();
	});
});