import React, {Children, createContext, useState} from 'react';

export const MovieContext = createContext();
export const MovieProvider =  ({Children}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <MovieContext.Provider value={{movies, setMovies, loading, setLoading, error, setError}}>
            {Children}
        </MovieContext.Provider>
    );
};