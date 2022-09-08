import "../../styles/SearchBook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchText, onSearchTextChange }) => {

    let navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        onSearchTextChange(event.target.value)
    };

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return (
        <div className="search-bar">
            <i className="fa-icon-left fa-solid fa-left-long" onClick={handleClick}></i>
            <input
                value={searchText}
                className="search-text"
                type="text"
                onChange={handleChange}
                placeholder="Search using title, author or ISBN ..."
                required
            />
        </div>
    );
};

export default SearchBar;
