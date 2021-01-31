/* eslint-disable camelcase */
import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Card = ({ title, poster_path, vote_average, overview }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={`${IMG_API}${poster_path}`} alt="" />
      <div className="card-info-container">
        <h3 className="card-title">{title}</h3>
        <span className="card-vote-txt">{vote_average}</span>
      </div>
      <div className="card-overview-container">
        <div className="card-over-info">
          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
