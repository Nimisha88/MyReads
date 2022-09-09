import "../styles/BookDisplayCard.css";
import ChangeShelf from "./ChangeShelf";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI.js";

const BookDisplayCard = ({ book, refreshBook, display }) => {
    
    const [shelf, setShelf] = useState(() => {
        return book.shelf===undefined? "none" : book.shelf;
    });
    const [updateBookShelf, setUpdateBookShelf] = useState(false);

    const onShelfChange = (shelfName) => {
        setShelf(shelfName);
        setUpdateBookShelf(true);
    }

    useEffect(() => {
        const postBookShelfUpdate = async () => {
            await BooksAPI.update(book, shelf);
            book.shelf = shelf;
            refreshBook(book);
        };

        if(updateBookShelf) {
            postBookShelfUpdate();
            setUpdateBookShelf(false);
        }
        
    }, [updateBookShelf]);

    return (
        <div className="item">
            <div className="book-icon-container" style={{
                    "--dataURL": `url("${book.imageLinks.smallThumbnail}")`
                }}>
                <img className="book-icon" src={book.imageLinks.smallThumbnail} alt="Book's Icon" />
            </div>
            <h5 className="book-title">{book.title}</h5>
            <h6 className="book-author">{book.authors.join(", ")}</h6>
            <ChangeShelf shelf={shelf} onShelfChange={onShelfChange} display={display} />
        </div>
    );
};

BookDisplayCard.propTypes = {
    book: PropTypes.object.isRequired,
    refreshBook: PropTypes.func.isRequired,
    display: PropTypes.string.isRequired,
}

export default BookDisplayCard;
