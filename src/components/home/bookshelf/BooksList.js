import BookDisplayCard from "../../BookDisplayCard.js";
import "../../../styles/BooksShelf.css";

const BooksList = ({ booksOnShelf, refreshBooks }) => {
    return (
        <div className="books-list">
            {booksOnShelf.map((book, index) => {
                return (
                    <BookDisplayCard
                        key={index + 1}
                        book={book}
                        refreshBooks={refreshBooks}
                        display="lib"
                    />
                );
            })}
        </div>
    );
};

export default BooksList;
