import React from 'react'
import './Header.css'
import PropTypes from 'prop-types';


export const Header = (props) => {
  return (
    <header className="Header">
      <button 
      id="header-text-button"
      onClick={e => props.clearFolderID(e)}>Happy Little Palette Picker</button>
    </header>
  )
}

export default Header

Header.propTypes = {
  clearFolderID:PropTypes.func
};