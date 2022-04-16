import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/PeanutProfile.jpg" alt="cat" />
        </div>
      </div>
      <div className="right">"right"</div>
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave"
      />
    </div>
  );
}
