import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating % 2 === 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="rating-stars">
        {/* Full Stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
        {/* Half Star */}
        {halfStars === 1 && <i className="fas fa-star-half-alt"></i>}
        {/* Empty Stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <i key={index} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview.slice(0, 100)}...</p>
        <p className="card-text">{generateStars(movie.vote_average)}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
