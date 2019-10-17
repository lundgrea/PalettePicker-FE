import React from 'react';
import { shallow } from "enzyme";
import { App }  from './App';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)

  // fetchAllFolders.mockImplementation(() => {
  //   return Promise.resolve({folder: [{id: 1, name: 'ColorRama'}, {id: 2, name: 'Floss'}]}) 
  // })
});

describe("App", () => {
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should start with empty state, besides those updated onLoad', () => {
    expect(wrapper.state('folderID')).toEqual("");
    expect(wrapper.state('palettes')).toEqual([]);
    expect(wrapper.state('paletteID')).toEqual("");
    expect(wrapper.state('isLoading')).toEqual(true);
    expect(wrapper.state('networkMessage')).toEqual("");
    expect(wrapper.state('error')).toEqual("");
  })

  it('should generateRandomColors on pageLoad is called', () => {
    expect(wrapper.state('currentPalette').length).toEqual(5);
  })

  it("should reset state to an empty string", () => {
    wrapper.instance().setState({folderID: 878})
    const mockClickEvent = { preventDefault: jest.fn() };
    wrapper.instance().clearFolderID(mockClickEvent)
    expect(wrapper.state("folderID")).toEqual("");
  });

  it('should call generateRandomColors and getAllFolder when componentDidMount is called', () => {
    wrapper.instance().getAllFolders = jest.fn();
    wrapper.instance().generateRandomColors = jest.fn()
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().getAllFolders).toHaveBeenCalled();
    expect(wrapper.instance().generateRandomColors).toHaveBeenCalled();
  });

})


