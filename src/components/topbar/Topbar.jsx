import "./topbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span>J</span>
            <p>ordan.</p>
            <span></span>
          </a>
          <div className="linksContainer">
            <a href="https://github.com/Jordan-Crossing">
              <GitHubIcon className="icon" />
              <p>Check out my&nbsp;</p>
              <span>GitHub.</span>
            </a>
            <a href="#contact">
              <EmailIcon className="icon" />
              <p>Get in&nbsp;</p>
              <span>Contact.</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
