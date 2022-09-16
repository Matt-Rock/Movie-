import React from 'react'




const MovieCard = (movie) => {

  const genreData = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'

  }
  return (
    <div className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} alt={movie.movie.title} />
      <span className='rating-container'>{movie.movie.vote_average}</span>
      <div className='movie-info'>
        <h2>{movie.movie.title}</h2>

        <div className="genre-list">
          {movie.movie.genre_ids.map((genre) => (
            <span key={genre}> {` ${genreData[genre]} `}</span>
          ))}
        </div>
      </div>
      <div className='movie-over'>
        <h2>Overview:</h2>
        <p>{movie.movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard