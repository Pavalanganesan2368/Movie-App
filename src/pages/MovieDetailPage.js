import React, {useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import MovieDetail from '../component/MovieDetail';
import {getMoviesDetails} from '../services/api';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const {setError} = useContext(MovieContext);

    // {loading && (
    //     <div className="loading">
    //         <div className="spinner"></div>
    //     </div>
    // )}

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getMoviesDetails(id);
                setMovie(data);
            } catch(err) {
                setError('Failed to fetch movie details');
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id, setError]);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return <MovieDetail movie={movie}/>;
};

export default MovieDetailPage;