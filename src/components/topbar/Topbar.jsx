import "./topbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jordan.
          </a>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href="https://github.com/Jordan-Crossing">Check out my code.</a>

            <EmailIcon className="icon" />
            <a href="#contact"> Get in contact.</a>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
