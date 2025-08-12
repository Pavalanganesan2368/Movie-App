import axios from 'axios';
const API_KEY = '25c89499';

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
        );
        console.log(response.data);
        
        return response.data.Search || [];
    } catch (error) {
        console.error('Search error : ', error);
        throw new Error("Failed to search movies");
    }
}

export const getMoviesDetails = async (id) => {
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        return response.data
    } catch (error) {
        console.error('Details error : ', error);
        throw new Error("Failed to get movie details");
    }
}