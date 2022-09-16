import React from 'react'
import NavCategorie from './NavCategorie'

const Nav = (props) => {

  return (
    <div>
      <ul >
        {/* <NavCategorie icon='movie_filter' categorie='Latest' updateCategorie={props.updateCategorie} /> */}
        <NavCategorie icon='trending_up' categorie='Popular' updateCategorie={props.updateCategorie} updateMode={props.updateMode} />
        <NavCategorie icon='grade' categorie='Top Rated' updateCategorie={props.updateCategorie} updateMode={props.updateMode} />
        <NavCategorie icon='timer' categorie='Upcoming' updateCategorie={props.updateCategorie} updateMode={props.updateMode} />
      </ul>
    </div>
  )
}

export default Nav