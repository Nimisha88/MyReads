import "../../styles/SearchBook.css";
import BooksListItem from "../home/bookshelf/BooksListItem";
import * as BooksAPI from "../../utils/BooksAPI.js";
import { useState, useEffect } from "react";

const SearchResult = ({ query }) => {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchSearchResult = async (query, maxResult = 10) => {
            console.log(query);
            let res = await BooksAPI.search(query, maxResult);
            console.log(res);
            setSearchResult(res);
        };
        
        if (query.trim().length) {
            fetchSearchResult(query, 15);
        }
    }, [query]);

    const refreshLibrary = () => {
        console.log("Arrgggg!! You gotta do something about this!");
    }

    return (
        <div className="search-result">
            {
                searchResult.filter((book) => (book.title!==undefined && book.authors!==undefined && book.authors.length>0 && book.imageLinks!==undefined) && Object.keys(book.imageLinks).includes("smallThumbnail"))
                    .map((book, index) => {
                    return <BooksListItem key={index+1} book={book} refreshLibrary={refreshLibrary}/>
                    // console.log(book.title + " - " + Object.keys(book.imageLinks));
                })
            }
        </div>
    );
};

export default SearchResult;
