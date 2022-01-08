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
          <div className="itemContainer"></div>
          <GitHubIcon className="icon" />
          <span>https://github.com/Jordan-Crossing</span>
          <EmailIcon className="icon" />
          <span>Jordan@email.com</span>
        </div>
        <div className="right">this is right</div>
      </div>
    </div>
  );
}
