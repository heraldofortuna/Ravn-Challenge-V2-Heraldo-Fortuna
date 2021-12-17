import "../styles/Header.css";
import arrowBack from "../assets/arrow-back.svg";

const Header = ({ title, canReturn = false, handleReturn }) => {
  return (
    <header className="header">
      <div className="header__container">
        {canReturn && (
          <img
            className="header__return"
            src={arrowBack}
            alt="Back to home arrow icon"
            onClick={handleReturn}
          />
        )}
        <h2 className="header__title">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
