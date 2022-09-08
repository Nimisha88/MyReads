import "../styles/App.css";
import Hero from "./home/Hero.js";
import Library from "./home/Library.js";
import AddBook from "./home/AddBook.js";
import SearchBook from "./search/SearchBook.js";
import * as BooksAPI from "../utils/BooksAPI.js";
import { Fragment, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {

    const [allBooks, setAllBooks] = useState([]);
    const [refreshAllBooks, setRefreshAllBooks] = useState(true);

    const requestBooksRefresh = () => {
        setRefreshAllBooks(true);
    };

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await BooksAPI.getAll();
            console.log(res);
            setAllBooks(res);
        };

        if(refreshAllBooks) {
            getAllBooks();
            setRefreshAllBooks(false);
        }
        
    }, [refreshAllBooks]);

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <Fragment>
                        <Hero />
                        <Library books={allBooks} refreshBooks={requestBooksRefresh}/>
                        <AddBook />
                    </Fragment>
                }
            />
            <Route path="/search" element={
              <Fragment>
                <SearchBook books={allBooks} refreshBooks={requestBooksRefresh}/>
              </Fragment>
            }/>
        </Routes>
    );
}

export default App;
