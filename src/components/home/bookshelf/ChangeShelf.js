import "../../../styles/BooksListItem.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../../../utils/BooksAPI.js";

const shelfDDOptions = [
    {
        shelf: "currentlyReading",
        shelfName: "Currently Reading",
    },
    {
        shelf: "wantToRead",
        shelfName: "Want To Read",
    },
    {
        shelf: "read",
        shelfName: "Read",
    },
    {
        shelf: "none",
        shelfName: "None",
    },
];

const ChangeShelf = ({ book, refreshLibrary }) => {
    const [shelf, setShelf] = useState(book.shelf);

    const handleChange = (event) => {
        event.preventDefault();
        setShelf(event.target.value);
    };

    useEffect(() => {
        const updateBookShelf = async () => {
            await BooksAPI.update(book, shelf);
            refreshLibrary();
        };
        updateBookShelf();
    }, [shelf]);

    return (
        <div className="change-shelf">
            <div className="fa-icon-container">
                <i className="fa-icon-down fa-solid fa-chevron-down"></i>
            </div>
            <select
                id="shelf-dd"
                className="shelf-dd"
                value={shelf}
                onChange={handleChange}
            >
                <option value="none" disabled>
                    Move To
                </option>
                {shelfDDOptions.map((opt, index) => {
                    return (
                        <option key={index + 1} value={opt.shelf}>
                            {opt.shelfName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default ChangeShelf;
