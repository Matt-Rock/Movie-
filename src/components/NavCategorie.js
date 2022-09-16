import React from 'react'

const NavCategorie = (props) => {
  const update = () => {
    props.updateCategorie(props.categorie)
    props.updateMode(false)
  }

  return (
    <li className='categorie' onClick={() => update()} >
      <i className="material-icons">
        {props.icon}
      </i>
      <h3>{props.categorie}</h3>
    </li>
  )
}

export default NavCategorie