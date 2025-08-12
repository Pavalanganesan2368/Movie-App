import React, {useState} from "react";

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="search-container">
                <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} className="search-input" placeholder="Search Movies..."></input>
            </div>
            <button type="submit" className="search-button">
                <i className="search-icon">SEARCH</i>
            </button>
        </form>
    );
};

export default SearchBar;