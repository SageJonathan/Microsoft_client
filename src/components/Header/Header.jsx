import "./Header.scss";
import Logo from "../../assets/BrainFlix-logo.svg";

function Header() {
  return (
    <section className="container">
      <div className="head">
        <div className="head__items">
          <div className="head__items-logo">
            <img src={Logo}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
