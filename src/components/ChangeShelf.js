import "../styles/BookDisplayCard.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI.js";

const ChangeShelf = ({ book, refreshBooks, display }) => {

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
            shelfName: "None"
        }
    ];

    const [shelf, setShelf] = useState(() => {
        return book.shelf===undefined? "none" : book.shelf;
    });

    const [updateBookList, setUpdateBookList] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        setShelf(event.target.value);
        setUpdateBookList(true);
    };

    useEffect(() => {
        const updateBookShelf = async () => {
            console.log(`Updating ${book.title} to shelf ${shelf}`);
            await BooksAPI.update(book, shelf);
            refreshBooks();
        };

        if(updateBookList) {
            updateBookShelf();
            setUpdateBookList(false);
        }
        
    }, [updateBookList]);

    return (
        <div className="change-shelf">
            <div className="fa-icon-container">
                {
                    display==="lib" && <i className="fa-icon-down fa-solid fa-chevron-down"></i>
                }
                {
                    display==="search" && <i className="fa-icon-plus fa-regular fa-plus"></i>
                }
            </div>
            <select
                id="shelf-dd"
                className="shelf-dd"
                value={shelf}
                onChange={handleChange}
            >
                <option value="move-to" disabled>
                    Move To ...
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
