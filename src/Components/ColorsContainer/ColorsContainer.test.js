import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Folder from '../../Components/Folder/Folder'
import ColorsContainer from './ColorsContainer'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ColorsContainer', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ColorsContainer
    currentPalette={[
      {color: "#2C7559", isLocked: false}, 
      {color: "57d576", isLocked: false}, 
      {color: "#a35c95", isLocked: false}, 
      {color: "#461d33", isLocked: false}, 
      {color: "413134", isLocked: false}
    ]}
    deleteAPalette={jest.fn()}
    folderID={16558}
    id={114}
    name={"Whale Life"}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call deleteAPalette on a click', () => {
    let palettes = [{name: "palette1", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", c4: "#FFFFFF", c5: "#FFFFFF", folder_id: 33}, {name: "palette2", c1: "#FFFFFF", c2: "#FFFFFF", c3: "#FFFFFF", c4: "#FFFFFF", c5: "#FFFFFF", folder_id: 33}]
    const wrapperA = shallow(<Folder key="1" id="2" name={name} palettes={palettes} getAFoldersPalettes={jest.fn()} deleteAFolder={jest.fn()} onClick={jest.fn()}/>)

    const mockEvent = { preventDefault: jest.fn() }

    wrapperA.find('#folder_name').simulate('click', mockEvent);

    const mockDeleteAPalette = jest.fn()

    const wrapper = shallow(<ColorsContainer
      currentPalette={[
        {color: "#2C7559", isLocked: false}, 
        {color: "57d576", isLocked: false}, 
        {color: "#a35c95", isLocked: false}, 
        {color: "#461d33", isLocked: false}, 
        {color: "413134", isLocked: false}
      ]}
      deleteAPalette={mockDeleteAPalette}
      folderID={16558}
      id={114}
      paletteName={"Whale Life"}
      onClick={jest.fn()}
      />);

    wrapper.find('img').simulate('click', mockEvent);

    expect(mockDeleteAPalette).toHaveBeenCalledWith(mockEvent, 114, 16558);
  });

  it('should test that a palette name does not render if there is no name for the palette', () => {

    const wrapper = shallow(<ColorsContainer
      currentPalette={[
        {color: "#2C7559", isLocked: false}, 
        {color: "57d576", isLocked: false}, 
        {color: "#a35c95", isLocked: false}, 
        {color: "#461d33", isLocked: false}, 
        {color: "413134", isLocked: false}
      ]}
      folderID={""}
      folders={{ folders: [
        {created_at: "2019-10-16", id: 16556, name: "Bold", updated_at: "2019-10-17"}, 
        {created_at: "2019-10-16", id: 16557, name: "Shy", updated_at: "2019-10-17"}, 
        {created_at: "2019-10-16", id: 16558, name: "Animals", updated_at: "2019-10-17"}, 
        {created_at: "2019-10-16", id: 16559, name: "Winding Down", updated_at: "2019-10-17"}, 
        {created_at: "2019-10-16", id: 16560, name: "Monster Mash", updated_at: "2019-10-17"}
      ]}}
      palettes={[]}
      toggleLock={jest.fn()}
      />);
      const name = wrapper.find('h2');
      expect(name).toHaveLength(0);
    });

  it('should test that a palette name does render if there is a name for the palette', () => {
    const wrapper = shallow(<ColorsContainer
      currentPalette={[
        {color: "#2C7559", isLocked: false}, 
        {color: "57d576", isLocked: false}, 
        {color: "#a35c95", isLocked: false}, 
        {color: "#461d33", isLocked: false}, 
        {color: "413134", isLocked: false}
      ]}
      deleteAPalette={jest.fn()}
      folderID={16558}
      id={114}
      paletteName={"Whale Life"}
      onClick={jest.fn()}
      />);
    const name = wrapper.find('h2')
    expect(name).toHaveLength(1);
    // expect(mockDeleteAPalette).toHaveBeenCalledWith(mockEvent, 114, 16558);
  });
})