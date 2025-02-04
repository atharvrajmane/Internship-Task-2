import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleFilter = async ({ genre, sortBy }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&sort_by=${sortBy}&with_genres=${genre}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error filtering movies:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Popular Movies</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
