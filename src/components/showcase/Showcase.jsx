import "./showcase.scss";
import laserCat from "../../assets/LaserCat.jpg";

export default function Showcase() {
  return (
    <div className="showcase" id="showcase">
      <h1>Showcase</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>bank</h3>
        </div>
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>banktime</h3>
        </div>
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>bank</h3>
        </div>
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>bank</h3>
        </div>
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>bank</h3>
        </div>
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>bank</h3>
        </div>
      </div>
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave2"
      />
      {/* <p>showcase</p> */}
    </div>
  );
}
