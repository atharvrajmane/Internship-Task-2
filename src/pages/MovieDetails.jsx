import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating % 2 === 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="rating-stars">
        {Array.from({ length: fullStars }).map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
        {halfStars === 1 && <i className="fas fa-star-half-alt"></i>}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <i key={index} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  return (
    <div className="movie-details container mt-5">
      <Link to="/" className="btn btn-secondary mb-4">
        Back to Movies
      </Link>
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <div className="rating">{generateStars(movie.vote_average)}</div>
          <p className="text-muted">Release Date: {movie.release_date}</p>
          <h5>Genres</h5>
          {movie.genres && movie.genres.length > 0 ? (
            <ul className="list-inline">
              {movie.genres.map((genre) => (
                <li key={genre.id} className="list-inline-item">
                  <span className="badge bg-primary">{genre.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No genres available</p>
          )}
          <h5>Overview</h5>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
