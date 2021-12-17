import "../styles/Header.css";
import { Link } from "react-router-dom";
import arrowBack from "../assets/arrow-back.svg";

const Header = ({ title, canReturn = false }) => {
  return (
    <header className="header">
      <div className="container header__container">
        {canReturn && (
          <Link to={"/"} className="header__return">
            <img src={arrowBack} alt="Back to home arrow icon" />
          </Link>
        )}
        <h2 className="header__title">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
