import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Main from './Main'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main
    addNewPalette={jest.fn()}
    clearFolderID={jest.fn()}
    currentPalette={[{color: "#2C7559", isLocked: false}, {color: "57d576", isLocked: false}, {color: "#a35c95", isLocked: false}, {color: "#461d33", isLocked: false}, {color: "413134", isLocked: false}]}
    deleteAPalette={jest.fn()}
    folderID={""}
    generateRandomColors={jest.fn()}
    folders={{ folders: [
      {created_at: "2019-10-16", id: 16556, name: "Bold", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16557, name: "Shy", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16558, name: "Animals", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16559, name: "Winding Down", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16560, name: "Monster Mash", updated_at: "2019-10-17"}
    ]}}
    isLoading={false}
    palettes={[]}
    toggleLock={jest.fn()}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})