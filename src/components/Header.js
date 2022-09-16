import React from 'react'
import Nav from './Nav'
import Search from './Search'

const Header = (props) => {
  return (
    <div className='header'>
      <div className="logo-container">
        <i className="material-icons">
          movie
        </i>
        <h1>
          <strong>HYPE</strong>MOVIE
        </h1>
      </div>
      <Nav updateCategorie={props.updateCategorie} updateMode={props.updateMode} />
      <Search updateSearch={props.updateSearch} updateMode={props.updateMode} />
    </div>
  )
}

export default Header