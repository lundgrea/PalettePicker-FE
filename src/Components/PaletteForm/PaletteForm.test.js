import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import PaletteForm from './PaletteForm'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PaletteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PaletteForm 
    currentPalette={[{color: "#2C7559", isLocked: false}, {color: "57d576", isLocked: false}, {color: "#a35c95", isLocked: false}, {color: "#461d33", isLocked: false}, {color: "413134", isLocked: false}]}
    generateRandomColors={jest.fn()}
    folders={{ folders: [
      {created_at: "2019-10-16", id: 16556, name: "Bold", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16557, name: "Shy", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16558, name: "Animals", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16559, name: "Winding Down", updated_at: "2019-10-17"}, 
      {created_at: "2019-10-16", id: 16560, name: "Monster Mash", updated_at: "2019-10-17"}
    ]}}
    isLoading={false}
    addNewPalette={jest.fn()}
    />);
  })

  it('should initialize state with empty/falsy values', () => {
    expect(wrapper.state('name')).toEqual('')
    expect(wrapper.state('localFolderID')).toEqual('')
    expect(wrapper.state('error')).toEqual('')
    expect(wrapper.state('isSaved')).toEqual(false)
    expect(wrapper.state('viewForms')).toEqual(false)
  })

  it('should call generateNewColors on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    expect(wrapper.state('name')).toEqual('')

    wrapper.instance().generateNewColors = jest.fn()
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().generateNewColors).toHaveBeenCalled();
  })

  it('should call handleChange on a keydown event', () => {

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('#download-img').simulate('click', mockEvent);

    const mockEvent2 = () => {}

    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('input').at(0).simulate('change', mockEvent2);

  expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });
})