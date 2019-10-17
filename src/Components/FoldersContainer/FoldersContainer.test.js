import React from "react";
import { shallow } from "enzyme";
import { FoldersContainer } from "./FoldersContainer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
let folders = {folders: [{name: "Cruising", id: 99}, {name: "Just Joshin", id: 33}]}

beforeEach(() => {
  wrapper = shallow(<FoldersContainer folders={folders} getAFoldersPalettes={jest.fn()} deleteAFolder={jest.fn()} />)
});


describe("FoldersContainer", () => {
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

