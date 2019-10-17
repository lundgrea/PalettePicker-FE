import React from "react";
import { shallow } from "enzyme";
import FolderForm from "./FolderForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


let folders = {folders: [{name: "Cruising", id: 99}, {name: "Just Joshin", id: 33}]}

describe("FolderForm", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<FolderForm folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });


  it("should begin with an empty state", () => {
    const wrapper = shallow(<FolderForm folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()}/>);
    expect(wrapper.state("folderName")).toEqual("")
    expect(wrapper.state("error")).toEqual("")
  });

  it("should call handleChange method when change happens", () => {
    const wrapper = shallow(<FolderForm folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()}/>);
    const mockEvent = { target: { name: "folderName" , value: "The Finisher"}};
    wrapper.find("input").simulate("change", mockEvent);
    expect(wrapper.state("folderName")).toEqual("The Finisher");
  });


  it('should fire handleSubmit on the click of the Add Folder Button', () => {
    const wrapper = shallow(<FolderForm folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()}/>);
    const mockEvent = { target: { name: "folderName" , value: "The Finisher"}};
    wrapper.find("input").simulate("change", mockEvent);
    expect(wrapper.state("folderName")).toEqual("The Finisher");
    const mockClickEvent = { preventDefault: jest.fn() };
    wrapper.find("img").simulate("click", mockClickEvent);
    wrapper.instance().checkForDuplicates(mockClickEvent, "The Finisher")
    expect(wrapper.state("folderName")).toEqual("")
  })

  it("should reset state to an empty string", () => {
    const wrapper = shallow(<FolderForm folders={folders} addNewFolder={jest.fn()} getAllFolders={jest.fn()}/>);
    const mockEvent = { target: { name: "folderName" , value: "The Finisher"}};
    wrapper.find("input").simulate("change", mockEvent);
    expect(wrapper.state("folderName")).toEqual("The Finisher");
    const mockClickEvent = { preventDefault: jest.fn() };
    wrapper.find("img").simulate("click", mockClickEvent);
    expect(wrapper.state("folderName")).toEqual("");
  });
});
