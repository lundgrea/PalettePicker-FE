import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
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
    palettesName={"Whale Life"}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call deleteAPalette on a click', () => {

    const mockEvent = { preventDefault: jest.fn() }

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
      palettesName={"Whale Life"}
      />);

    wrapper.find('#delete-palette-img').simulate('click', mockEvent);

    expect(mockDeleteAPalette).toHaveBeenCalled(mockEvent, 114, 16558);
  });

})