import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies, onMovieSelect, isDetailVisible}) => {
    return(
        <div className={`movie-list ${isDetailVisible ? 'list-hidden' : ''}`}>
            <div className="movie-grid">
                {movies.map((movie, index) => (
                    <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} onClick={() => onMovieSelect(movie)}/>
                ))}
            </div>
        </div>
    );
}

export default MovieList;