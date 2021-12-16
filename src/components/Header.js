import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ({ title, canReturn = false }) => {
  return (
    <header className="header">
      <div className="container header__container">
        {canReturn && (
          <Link to={"/"} className="header__return">
            <p>Back</p>
          </Link>
        )}
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
