import "./showcase.scss";
import laserCat from "../../assets/LaserCat.jpg";
import PortfolioList from "../portfolioList/PortfolioList.jsx";

export default function Showcase() {
  const list = [
    {
      id: "featured",
      title: "not featured",
    },
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "featured",
      title: "featured",
    },
  ];

  return (
    <div className="showcase" id="showcase">
      <h1>Showcase</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src={laserCat} alt="" id="laserCat" />
          <h3>myBank</h3>
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
