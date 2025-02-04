import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterBar = ({ onFilter }) => {
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);

  // Fetch genres dynamically from the TMDb API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleFilter = () => {
    onFilter({ genre, sortBy });
  };

  const handleClearFilters = () => {
    setGenre("");
    setSortBy("popularity.desc");
    onFilter({ genre: "", sortBy: "popularity.desc" });
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="row w-75">
        <div className="col-md-4 mb-3 mb-md-0">
          <select
            className="form-select shadow-sm"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genres.map((genreItem) => (
              <option key={genreItem.id} value={genreItem.id}>
                {genreItem.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <select
            className="form-select shadow-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity.desc">Popularity</option>
            <option value="release_date.desc">Release Date</option>
            <option value="vote_average.desc">Rating</option>
          </select>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <button
              className="btn btn-warning shadow-sm w-50 me-2"
              onClick={handleFilter}
              disabled={!genre && !sortBy}
            >
              Apply Filters
            </button>
            <button
              className="btn btn-secondary shadow-sm w-50"
              onClick={handleClearFilters}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
