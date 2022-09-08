import "../styles/App.css";
import Hero from "./home/Hero.js";
import Library from "./home/Library.js";
import AddBook from "./home/AddBook.js";
import SearchBook from "./search/SearchBook.js";
import * as BooksAPI from "../utils/BooksAPI.js";
import { Fragment, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
    const [allBooks, setAllBooks] = useState([]);

    const requestBookRefresh = (book) => {
        book.shelf==="none" ?
        setAllBooks(
            [...allBooks.filter(
                (b) =>
                    b.title !== book.title &&
                    b.authors.join() !== book.authors.join()
            )]
        ) :
        setAllBooks(
            [...allBooks.filter(
                (b) =>
                    b.title !== book.title &&
                    b.authors.join() !== book.authors.join()
            ),
            book]
        );
    };

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await BooksAPI.getAll();
            setAllBooks(res);
        };

        getAllBooks();
    }, []);

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <Fragment>
                        <Hero />
                        <Library
                            books={allBooks}
                            refreshBook={requestBookRefresh}
                        />
                        <AddBook />
                    </Fragment>
                }
            />
            <Route
                path="/search"
                element={
                    <Fragment>
                        <SearchBook
                            books={allBooks}
                            refreshBook={requestBookRefresh}
                        />
                    </Fragment>
                }
            />
        </Routes>
    );
};

export default App;
