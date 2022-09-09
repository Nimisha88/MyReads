import "../styles/BookDisplayCard.css";

import PropTypes from "prop-types";

const ChangeShelf = ({ shelf, onShelfChange, display }) => {
    const shelfDDOptions = [
        {
            shelf: "currentlyReading",
            shelfName: "Currently Reading",
        },
        {
            shelf: "wantToRead",
            shelfName: "Want To Read",
        },
        {
            shelf: "read",
            shelfName: "Read",
        },
        {
            shelf: "none",
            shelfName: "None",
        },
    ];

    const handleChange = (event) => {
        event.preventDefault();
        onShelfChange(event.target.value);
    };

    return (
        <div className="change-shelf">
            <div className="fa-icon-container">
                {(display === "lib" || display === "search-lib") && (
                    <i className="fa-icon-down fa-solid fa-chevron-down"></i>
                )}
                {display === "search" && (
                    <i className="fa-icon-plus fa-regular fa-plus"></i>
                )}
            </div>
            <select
                id="shelf-dd"
                className="shelf-dd"
                value={shelf}
                onChange={handleChange}
            >
                <option value="move-to" disabled>
                    Move To ...
                </option>
                {shelfDDOptions.map((opt, index) => {
                    return (
                        <option key={index + 1} value={opt.shelf}>
                            {opt.shelfName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

ChangeShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    display: PropTypes.string.isRequired,
};

export default ChangeShelf;
