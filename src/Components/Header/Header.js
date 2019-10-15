import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className="Header">
      <button 
      id="header-text-button"
      onClick={e => props.clearFolderID(e)}>Happy Little Palette Picker</button>
    </header>
  )
}

export default Header
