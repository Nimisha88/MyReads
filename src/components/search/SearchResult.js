import "../../styles/SearchBook.css";
import BookDisplayCard from "../BookDisplayCard.js";
import * as BooksAPI from "../../utils/BooksAPI.js";
import { useState, useEffect} from "react";
import PropTypes from "prop-types";

const SearchResult = ({ query, books, refreshBook }) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 250);
        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    const isBookInUserList = (book) => {
        return books.filter(
            (b) =>
                b.title === book.title &&
                b.authors.join() === book.authors.join() &&
                b.imageLinks.smallThumbnail === book.imageLinks.smallThumbnail
        ).length
            ? true
            : false;
    };

    const getBookFromUserList = (book) => {
        return books.filter(
            (b) =>
                b.title === book.title &&
                b.authors.join() === book.authors.join() &&
                b.imageLinks.smallThumbnail === book.imageLinks.smallThumbnail
        )[0];
    };

    useEffect(() => {
        const fetchSearchResult = async (query, maxResult = 10) => {
            let res = await BooksAPI.search(query, maxResult);
            return res;
        };

        const getBooksFromUserListAsWell = (result) => {
            let searchBooksInUserList = result
                .filter((book) => isBookInUserList(book) === true)
                .map((book) => getBookFromUserList(book));
            let searchBooksNotInUserList = result.filter(
                (book) => isBookInUserList(book) === false
            );
            return [...searchBooksInUserList, ...searchBooksNotInUserList];
        };

        debouncedQuery.trim().length
            ? fetchSearchResult(debouncedQuery.trim(), 50).then(
                  (data) => {
                      !data.error
                          ? setSearchResult(getBooksFromUserListAsWell(data))
                          : setSearchResult([]);
                  }
              )
            : setSearchResult([]);
    }, [debouncedQuery]);

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
                                book={book}
                                refreshBook={refreshBook}
                                display="search-lib"
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

SearchResult.propTypes = {
    query: PropTypes.string,
    books: PropTypes.array,
    refreshBook: PropTypes.func.isRequired,
};

export default SearchResult;
