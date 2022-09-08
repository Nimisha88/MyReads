import "../../styles/SearchBook.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Home from "./Home";
import { useState } from "react";
import PropTypes from "prop-types";

const SearchBook = ({ books, refreshBook }) => {
    
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (newSearchText) => {
        setSearchText(newSearchText);
    };

    return (
        <div className="search-container">
            <SearchBar searchText={searchText} onSearchTextChange={handleSearchTextChange}/>
            <SearchResult query={searchText} books={books} refreshBook={refreshBook} />
            <Home />
        </div>
    );
};

SearchBook.propTypes = {
    books: PropTypes.array,
    refreshBook: PropTypes.func.isRequired
}

export default SearchBook;
