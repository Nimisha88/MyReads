import "../styles/BooksListItem.css";
import React from "react";

import ChangeShelf from "./ChangeShelf";

const BooksListItem = ({ book, refreshLibrary }) => {
    return (
        <div className="item">
            <div
                className="book-icon-container"
                style={{
                    "--dataURL": `url("${book.imageLinks.smallThumbnail}")`
                }}
            >
                <img
                    className="book-icon"
                    src={book.imageLinks.smallThumbnail}
                    alt="Book's Icon"
                />
            </div>
            <h4 className="book-title">{book.title}</h4>
            <h5 className="book-author">{book.authors[0]}</h5>
            <ChangeShelf book={book} refreshLibrary={refreshLibrary}/>
        </div>
    );
};

export default BooksListItem;
