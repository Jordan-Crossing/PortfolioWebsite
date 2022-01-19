import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave"
      />
    </div>
  );
}
