import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );
import {shallow, mount, render} from 'enzyme';
import AceEditorComponent from "./AceEditorComponent";

describe("AceEditorComponent", () => {
	it("render", () => {
		const component = shallow(<AceEditorComponent />);
		expect(component).toMatchSnapshot();
	});
});