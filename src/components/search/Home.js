import "../../styles/SearchBook.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-icon-wrapper">
            <i className="fa-icon-home fa-sharp fa-solid fa-house fa-2x"></i>
            <Link className="home-link" to="/">
                Add Contact
            </Link>
        </div>
    );
};

export default Home;
