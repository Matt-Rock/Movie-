import React from 'react'
import MovieCard from './MovieCard'
import PageNavigation from './PageNavigation'

const Content = (props) => {

  return (
    <div className='content'>
      {props.movie.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      <PageNavigation totalPages={props.totalPages} currentPage={props.currentPage} updatePage={props.updatePage} />

    </div>


  )
}

export default Content