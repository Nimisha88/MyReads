import BooksListItem from "./BooksListItem.js";
import "../styles/BooksList.css"

const BooksList = ({ booksOnShelf, refreshLibrary }) => {
    return(
        <div className="books-list">
            {
                booksOnShelf.map((book, index) => {
                    return <BooksListItem key={index+1} book={book} refreshLibrary={refreshLibrary} />
                })
            }
        </div>
    );
}

export default BooksList;