import "../../styles/SearchBook.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCallback } from "react";
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
            <div className="left-icon-wrapper">
                <i className="fa-icon-left fa-solid fa-left-long" onClick={handleClick}></i>
                <Link className="left-link" to="/"></Link>
            </div>
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

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired, 
    onSearchTextChange: PropTypes.func.isRequired
}

export default SearchBar;
