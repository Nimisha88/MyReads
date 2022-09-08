import BooksList from "./BooksList";
import "../../../styles/BooksShelf.css";

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

export default BooksShelf;