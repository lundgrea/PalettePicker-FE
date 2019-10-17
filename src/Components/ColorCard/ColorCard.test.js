import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import ColorCard from './ColorCard'
import unlockedImage from '../../assets/unlocked.svg'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ColorCard', () => {
  let wrapper;
  const lockedImage = '../../assets/locked.svg';

  beforeEach(() => {
    wrapper = shallow(<ColorCard
    color={"#586BA4"}
    delete={jest.fn()}
    folderID={16558}
    id={114}
    isLocked={true}
    name={"Whale Life"}
    toggleLock={jest.fn()}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleLock on a click', () => {
    const mockEvent = { preventDefault: jest.fn() }
    const mockToggleLock = jest.fn()

    wrapper = shallow(<ColorCard
      color={"#586BA4"}
      delete={jest.fn()}
      folderID={16558}
      id={114}
      isLocked={true}
      name={"Whale Life"}
      toggleLock={mockToggleLock}
      />);

    wrapper.find('#lock-img').simulate('click', mockEvent);

    expect(mockToggleLock).toHaveBeenCalled();
  });

  it('should display an image if locked', () => {
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('should display an image if unlocked', () => {
    wrapper = shallow(<ColorCard
      color={"#586BA4"}
      delete={jest.fn()}
      folderID={16558}
      id={114}
      isLocked={false}
      name={""}
      />);
    expect(wrapper.find('img')).toHaveLength(1)
  })

})