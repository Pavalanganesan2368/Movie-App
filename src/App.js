import React, {useState, useEffect} from "react";
import MovieList from './component/MovieList';
import MovieDetail from './component/MovieDetail';
import SearchBar from "./component/SearchBar";
import Header from './Header.js'
import './App.css'
import { searchMovies, getMoviesDetails } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [lastSearchQuery, setLastSearchQuery] = useState('');

  const searchHandler = async (query) => {
    setLoading(true);
    setError(null);
    setLastSearchQuery(query)
    try {
      const results = await searchMovies(query);
      console.log("Search Result :" , results);
      
      if (results && results.length > 0) {
        setMovies(results);
      } else {
        setError(`No Movies Found For "${query}"`);
        setMovies([]);
      }
    } catch(err) {
      setError(err.message || 'Failed To Fetch Movies. Please Try Again.');
      setMovies([]);
      console.log('API Error : ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = async (movie) => {
    if (!movie.imdbID) return;
    setLoading(true);
    try {
      const details = await getMoviesDetails(movie.imdbID);
      setSelectedMovies(details);
      setIsDetailVisible(true);
    } catch(err) {
      setError(err.message || 'Failed to fetch movie details.');
      console.error('Details Error: ', err );
    } finally {
      setLoading(false);
    }
  }

  const handleBackToList = () => {
    setIsDetailVisible(false);
    setTimeout(() => setSelectedMovies(null), 300);
  };

  useEffect(() => {
    const loadInitialMovies = async () => {
      setLoading(true);
      try {
        const results = await searchMovies('marvel');
        setMovies(results || []);
      } catch (err) {
        setError("Failed to load initial movies");
      } finally {
        setLoading(false);
      }
    };

    loadInitialMovies();
  }, []);

  return (
    <div className="app">
      <Header/>
      <div className="container">
        <SearchBar onSearch={searchHandler}/>
        {error && (
          <div className="error-message">
            {error}
            {error.includes('No movies') && (
              <div className="suggestions">
                 <p>Try Searchhing for:</p>
                <div className="suggestions-tags">
                  <span onClick={() => searchHandler('action')}>Action</span>
                  <span onClick={() => searchHandler('comedy')}>Comedy</span>
                  <span onClick={() => searchHandler('drama')}>Drama</span>
                  <span onClick={() => searchHandler('sci-fi')}>Sci-Fi</span>
                </div>
              </div>
            )}
          </div>
        )}
        {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Searching movies...</p>
        </div>
      ) : (
        <>
          {movies.length > 0 && (
            <div className="results-header">
              <h2>
                {isDetailVisible ? 'More Movies' : `Results for "${lastSearchQuery === "" ? "10" : lastSearchQuery}"`}
                <span className="result-count">{movies.length} movies</span>
              </h2>
            </div>
          )}

          <MovieList 
          movies={movies}
          onMovieSelect={handleMovieSelect}
          isDetailVisible={isDetailVisible}/>

          <MovieDetail
          movie={selectedMovie}
          isVisible={isDetailVisible}
          onBack={handleBackToList}/>
        </>
      )}
      </div>
    </div>
  );
}

export default App;