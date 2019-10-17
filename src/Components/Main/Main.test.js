import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Main from './Main'
import PaletteContainer from '../PaletteContainer/PaletteContainer'
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

  it('should render the PaletteContainer if a folderID exists', () => {
    wrapper = shallow(<Main folderID={2}/>);

    let wrapperA = shallow(<PaletteContainer
      currentPalette={[{color: "#2C7559", isLocked: false}, {color: "57d576", isLocked: false}, {color: "#a35c95", isLocked: false}, {color: "#461d33", isLocked: false}, {color: "413134", isLocked: false}]}
      deleteAPalette={jest.fn()}
      folderID={16558}
      palettes={[
            {
              "id": 114,
              "name": "Whale Life",
              "c1": "#586BA4",
              "c2": "#594157",
              "c3": "#A0D2DB",
              "c4": "#BEE7E8",
              "c5": "#CFBCDF",
              "folder_id": 16558,
              "created_at": "2019-10-16T19:36:39.873Z",
              "updated_at": "2019-10-16T19:36:39.873Z"
            },
            {
              "id": 115,
              "name": "SLOTH",
              "c1": "#C4BBAF",
              "c2": "#A5978B",
              "c3": "#5C4742",
              "c4": "#8D5B4C",
              "c5": "#5A2A27",
              "folder_id": 16558,
              "created_at": "2019-10-16T19:36:39.874Z",
              "updated_at": "2019-10-16T19:36:39.874Z"
            }
          ]
        }
      />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });

})