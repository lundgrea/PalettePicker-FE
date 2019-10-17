import React from "react";
import { shallow } from "enzyme";
import { Sidebar } from "./Sidebar";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper;

const folders = []

beforeEach(() => {
  wrapper = shallow(<Sidebar folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()} getAFoldersPalettes={jest.fn()} deleteAFolder={jest.fn()}/>);
});

describe("Sidebar", () => {
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

