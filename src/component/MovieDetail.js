import React from "react";

const MovieDetail = ({movie, isVisible, onBack}) => {
    if (!movie) return null;
    return (
        <div className={`movie-detail ${isVisible ? 'detail-visible' : ''}`}>
            <div className="detail-content">
                <button className="back-button" onClick={onBack}>
                    Back to Movies
                </button>

                <div className="detail-header">
                    <div className="detail-poster-container">
                        {movie.Poster && movie.Poster !== 'N/A' ? (
                            <img src={movie.Poster} alt={movie.Title} className="detail-poster"></img>
                        ) : (
                            <div className="no-poster large">
                                <span>No Image</span>
                            </div>
                        )}
                    </div>
                    <div className="detail-title-info">
                        <h1>{movie.Title} <span>({movie.Year})</span></h1>
                        <div className="detail-rating">
                            <div className="rating-label">
                                <span>{movie.imdbRating}</span>
                            </div>
                            <div className="rating-label">IMDB Rating</div>
                        </div>
                    </div>
                </div>

                <div className="detail-meta">
                    <div className="meta-item">
                        <span className="meta-label">Director</span>
                        <span className="meta-value">{movie.Director}</span>
                    </div>

                    <div className="meta-item">
                        <span className="meta-label">Genre</span>
                        <span className="meta-value">{movie.Genre}</span>
                    </div>

                    <div className="meta-item">
                        <span className="meta-label">Runtime</span>
                        <span className="meta-value">{movie.Runtime}</span>
                    </div>

                    <div className="meta-item">
                        <span className="meta-label">Release</span>
                        <span className="meta-value">{movie.Released}</span>
                    </div>
                </div>

                <div className="detail-plot">
                    <h3>Synopsis</h3>
                    <p>{movie.Plot}</p>
                </div>

                    {movie.Actors && movie.Actors !== 'N/A' && (
                        <div className="detail-actor">
                            <h3>Cast</h3>
                            <p>{movie.Actors}</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default MovieDetail;