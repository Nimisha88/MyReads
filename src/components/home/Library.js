import BooksShelf from "./bookshelf/BooksShelf.js";
import * as BooksAPI from "../../utils/BooksAPI.js";
import { useState, useEffect } from "react";

const shelves = ["currentlyReading", "wantToRead", "read"];

const Library = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [refreshLib, setRefreshLib] = useState(true);

    const getShelfBooksByCategory = (shelf) =>
        allBooks.filter((book) => book.shelf === shelf);

    const refreshLibrary = () => {
        setRefreshLib(true);
    };

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await BooksAPI.getAll();
            setAllBooks(res);
        };

        if(refreshLib) {
            getAllBooks();
            setRefreshLib(false);
        }
        
    }, [refreshLib]);

    return (
        <div className="lib-container">
            {shelves.map((shelfType, index) => {
                return (
                    <BooksShelf
                        key={index + 1}
                        shelf={shelfType}
                        booksOnShelf={getShelfBooksByCategory(shelfType)}
                        refreshLibrary={refreshLibrary}
                    />
                );
            })}
        </div>
    );
};

export default Library;
