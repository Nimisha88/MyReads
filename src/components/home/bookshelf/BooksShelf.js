import BooksList from "./BooksList";
import "../../../styles/BooksShelf.css";
import PropTypes from "prop-types";

const BooksShelf = ({ shelf, booksOnShelf, refreshBook }) => {

    const getShelfName = (shelf) => {
        switch(shelf) {
            case "currentlyReading": return "Currently Reading";
            case "wantToRead": return "Want To Read";
            case "read": return "Read";
            default: return shelf;
        }
    }

    return(
        <div className="books-shelf">
            <h2 className="shelf-name">{getShelfName(shelf)}</h2>
            <hr size="1" color="#D3D3D3"/>
            <BooksList booksOnShelf={booksOnShelf} refreshBook={refreshBook}/>
        </div>
    );
}

BooksShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    booksOnShelf: PropTypes.array.isRequired,
    refreshBook: PropTypes.func.isRequired
}

export default BooksShelf;