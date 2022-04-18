import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/PeanutProfile.jpg" alt="cat" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Jordan</h1>
          <h3>
            Front-end Software engineer <span>extraordinaire</span>
          </h3>
          <a href="#showcase">Next</a>
        </div>
      </div>
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave"
      />
    </div>
  );
}
