import "../styles/ChangeShelf.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI.js"

const shelfDDOptions = [{
    shelf: "currentlyReading",
    shelfName: "Currently Reading"
}, {
    shelf: "wantToRead",
    shelfName: "Want To Read"
}, {
    shelf: "read",
    shelfName: "Read"
}, {
    shelf: "none",
    shelfName: "None"
}];

const ChangeShelf = ({ book, refreshLibrary }) => {

    const [shelf, setShelf] = useState(book.shelf);

    const handleChange = (event) => {
        event.preventDefault();
        setShelf(event.target.value);
        console.log("New Shelf is " + shelf);
    }

    useEffect(() => {
        const updateBookShelf = async () => {
            let res = await BooksAPI.update(book, shelf);
            console.log(res);
            refreshLibrary();
        }
        updateBookShelf();
    }, [shelf]);

    return (
        <div className="change-shelf">
            <div className="fa-icon-container">
                <i
                    id="fa-icon-down"
                    className="fa-icon-down fa-solid fa-chevron-down"
                ></i>
            </div>
            <select id="shelf-dd" className="shelf-dd" value={shelf} onChange={handleChange}>
                <option value="none" disabled>Move To</option>
                {
                    shelfDDOptions.map((opt, index) => {
                        return <option key={index+1} value={opt.shelf}>{opt.shelfName}</option>
                    })
                }
            </select>
        </div>
    );
};

export default ChangeShelf;

// {/* <i id="fa-icon-plus" className="fa-icon-plus fa-regular fa-plus"></i> */}
