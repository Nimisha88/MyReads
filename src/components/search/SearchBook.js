import "../../styles/SearchBook.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Home from "./Home";
import { useState } from "react";

const SearchBook = () => {
    
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (newSearchText) => {
        setSearchText(newSearchText);
    };

    return (
        <div className="search-container">
            <SearchBar searchText={searchText} onSearchTextChange={handleSearchTextChange}/>
            <SearchResult query={searchText} />
            <Home />
        </div>
    );
};

export default SearchBook;