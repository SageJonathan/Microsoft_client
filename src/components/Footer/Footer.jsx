import "./Footer.scss";
import Logo from "../../assets/BrainFlix-logo.svg";

function Footer() {
  return (
    <section className="container">
      <div className="foot">
        <div className="foot__sec1">
          <h4 className="foot__sec1-subt">Footer subtitle</h4>
          <p className="foot__sec1-email">email: ...../link:....</p>
        </div>
        <div className="foot__sec2">
          <h4 className="foot__sec2-subt">Footer subtitle</h4>
          <p className="foot__sec2-email">email: ...../link:....</p>
        </div>

        <div className="foot__logo">
          <img src={Logo} />
        </div>
      </div>
    </section>
  );
}

export default Footer;
