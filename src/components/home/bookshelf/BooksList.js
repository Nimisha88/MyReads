import BookDisplayCard from "../../BookDisplayCard.js";
import "../../../styles/BooksShelf.css";
import PropTypes from "prop-types";

const BooksList = ({ booksOnShelf, refreshBook }) => {
    return (
        <div className="books-list">
            {booksOnShelf.map((book, index) => {
                return (
                    <BookDisplayCard
                        key={index + 1}
                        book={book}
                        refreshBook={refreshBook}
                        display="lib"
                    />
                );
            })}
        </div>
    );
};

BooksList.propTypes = {
    booksOnShelf: PropTypes.array,
    refreshBook: PropTypes.func.isRequired
}

export default BooksList;
