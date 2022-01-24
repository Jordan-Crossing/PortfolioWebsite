import "./showcase.scss";

export default function Showcase() {
  return (
    <div className="showcase" id="showcase">
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave2"
      />
      {/* <p>showcase</p> */}
    </div>
  );
}
