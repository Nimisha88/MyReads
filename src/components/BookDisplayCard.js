import "../styles/BookDisplayCard.css";
import ChangeShelf from "./ChangeShelf";

const BookDisplayCard = ({ book, refreshBook, display }) => {
    return (
        <div className="item">
            <div className="book-icon-container" style={{
                    "--dataURL": `url("${book.imageLinks.smallThumbnail}")`
                }}>
                <img className="book-icon" src={book.imageLinks.smallThumbnail} alt="Book's Icon" />
            </div>
            <h5 className="book-title">{book.title}</h5>
            <h6 className="book-author">{book.authors.join(", ")}</h6>
            <ChangeShelf book={book} refreshBook={refreshBook} display={display} />
        </div>
    );
};

export default BookDisplayCard;
