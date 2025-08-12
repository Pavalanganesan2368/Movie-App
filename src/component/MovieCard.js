import React from "react";

const MovieCard = ({movie, onClick}) => {
    return (
        <div className="movie-card" onClick={onClick}>
            <div className="movie-poster-container">
                {movie.Poster && movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster} className="movie-poster" alt={movie.Title}/>
                ) : (
                    <div className="no-poster">
                        <span>{movie.Title}</span>
                    </div>
                )}
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <div className="movie-meta">
                    <span className="movie-year">{movie.Year}</span>
                    <span className="movie-type">{movie.Type}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;