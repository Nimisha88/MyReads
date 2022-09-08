import "../../styles/SearchBook.css";
import BookDisplayCard from "../BookDisplayCard.js";
import * as BooksAPI from "../../utils/BooksAPI.js";
import { useState, useEffect } from "react";

const SearchResult = ({ query, books, refreshBook }) => {
    const [searchResult, setSearchResult] = useState([]);

    const isBookInUserList = (book) => {
        return books.filter(
            (b) => b.title === book.title && b.subTitle === book.subTitle
        ).length
            ? true
            : false;
    };

    const getBookFromUserList = (book) => {
        return books.filter(
            (b) => b.title === book.title && b.subTitle === book.subTitle
        )[0];
    }

    useEffect(() => {
        const fetchSearchResult = async (query, maxResult = 10) => {
            let res = await BooksAPI.search(query, maxResult);
            if (!res.error) {
                setSearchResult(res);
            } else {
                setSearchResult([]);
            }
        };

        if (query.trim().length) {
            fetchSearchResult(query.trim(), 50);
        } else {
            setSearchResult([]);
        }
    }, [query]);

    return (
        <div className="search-result">
            {searchResult &&
                searchResult
                    .filter(
                        (book) =>
                            book.title !== undefined &&
                            book.authors !== undefined &&
                            book.authors.length > 0 &&
                            book.imageLinks !== undefined &&
                            Object.keys(book.imageLinks).includes(
                                "smallThumbnail"
                            )
                    )
                    .map((book, index) => {
                        return isBookInUserList(book) ? (
                            <BookDisplayCard
                                key={index + 1}
                                book={getBookFromUserList(book)}
                                refreshBook={refreshBook}
                                display="lib"
                            />
                        ) : (
                            <BookDisplayCard
                                key={index + 1}
                                book={book}
                                refreshBook={refreshBook}
                                display="search"
                            />
                        );
                    })}
        </div>
    );
};

export default SearchResult;
