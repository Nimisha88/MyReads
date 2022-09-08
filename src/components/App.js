import "../styles/App.css";
import Hero from "./home/Hero.js";
import Library from "./home/Library.js";
import AddBook from "./home/AddBook.js";
import SearchBook from "./search/SearchBook.js"
import { Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <Fragment>
                        <Hero />
                        <Library />
                        <AddBook />
                    </Fragment>
                }
            />
            <Route path="/searchBook" element={
              <Fragment>
                <SearchBook />
              </Fragment>
            }/>
        </Routes>
    );
}

export default App;
