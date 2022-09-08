import BooksShelf from "./bookshelf/BooksShelf.js";

const Library = ({ books, refreshBook }) => {
    const shelves = ["currentlyReading", "wantToRead", "read"];

    const getShelfBooksByCategory = (shelf) =>
        books.filter((book) => book.shelf === shelf);

    return (
        <div className="lib-container">
            {shelves.map((shelfType, index) => {
                return (
                    <BooksShelf
                        key={index + 1}
                        shelf={shelfType}
                        booksOnShelf={getShelfBooksByCategory(shelfType)}
                        refreshBook={refreshBook}
                    />
                );
            })}
        </div>
    );
};

export default Library;
