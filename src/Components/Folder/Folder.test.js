import React from "react";
import { shallow } from "enzyme";
import { Folder } from "./Folder";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
let name = "Blushing"
let palettes = [{name: "palette1", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", c4: "#FFFFFF", c5: "#FFFFFF", folder_id: 33}, {name: "palette2", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", c4: "#FFFFFF", c5: "#FFFFFF", folder_id: 33}]

beforeEach(() => {
  wrapper = shallow(<Folder key="1" id="2" name={name} palettes={palettes} getAFoldersPalettes={jest.fn()} deleteAFolder={jest.fn()} onClick={jest.fn()}/>)
});


describe("Folder", () => {
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getAFoldersPalettes on button click', () => {
    const getAFoldersPalettesMock = jest.fn()
    wrapper = shallow(<Folder key="1" id="2" name={name} palettes={palettes} getAFoldersPalettes={getAFoldersPalettesMock} deleteAFolder={jest.fn()} onClick={jest.fn()}/>)

    const mockEvent = { preventDefault: jest.fn()}
    wrapper.find('button').simulate('click', mockEvent)
    expect(getAFoldersPalettesMock).toHaveBeenCalledWith(mockEvent, "2")
  })

  it('should call deleteAFolder on button click', () => {
    const deleteAFolderMock = jest.fn()
    wrapper = shallow(<Folder key="1" id="2" name={name} palettes={palettes} getAFoldersPalettes={jest.fn()} deleteAFolder={deleteAFolderMock} onClick={jest.fn()}/>)
    const mockEvent = { preventDefault: jest.fn()}
    wrapper.find('img').simulate('click', mockEvent)
    expect(deleteAFolderMock).toHaveBeenCalledWith(mockEvent, "2")
  })
});

