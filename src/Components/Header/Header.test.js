import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header clearFolderID={jest.fn()}/>)
});


describe("Header", () => {
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clearFolderID on button click', () => {
    const clearFolderIDMock = jest.fn()
    wrapper = shallow(<Header clearFolderID={clearFolderIDMock}/>)
    const mockEvent = { preventDefault: jest.fn()}
    wrapper.find('button').simulate('click', mockEvent)
    expect(clearFolderIDMock).toHaveBeenCalledWith(mockEvent)
  })
});

