import "../../styles/AddBook.css";
import { Link } from "react-router-dom";

const AddBook = () => {
    return (
        <div className="add-book" >
            <i className="fa-icon-plus-large fa-regular fa-plus fa-2x"></i>
            <Link className="search-link" to="/search">Add Contact</Link>
        </div>
    );
};

export default AddBook;
