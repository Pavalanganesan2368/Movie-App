import React, {useContext} from "react";
import {MovieContext} from '../context/MovieContext';
import MovieCard from '../component/MovieCard';
import SearchBar from '../component/SearchBar';

const Home = () => {
    const { movies, loading, error } = useContext(MovieContext);
    return (
        <div className="home-page">
            <h1>Movie Finder</h1>
            <SearchBar/>
            {loading && (
                <div className="loading">
                    <div className="spinner"></div>
                </div>
            )}
            {loading && <p>Loading Movies...</p>}
            {error && <p className="error">{error}</p>}

            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    )) 
                ) : (
                    !loading && <p>No movie found. Try a different Search!</p>
                )}
            </div>
        </div>
    );
};

export default Home;