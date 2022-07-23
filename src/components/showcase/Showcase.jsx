import "./showcase.scss";
import laserCat from "../../assets/LaserCat.jpg";
import ShowcaseList from "../showcaseList/ShowcaseList.jsx";
import { useEffect, useState } from "react";

export default function Showcase() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "cat",
      title: "cat",
    },
    {
      id: "dog",
      title: "dog",
    },
    {
      id: "rabbit",
      title: "rabbit",
    },
    {
      id: "owl",
      title: "owl",
    },
    {
      id: "goat",
      title: "goat",
    },
    {
      id: "cow",
      title: "cow",
    },
  ];

  return (
    <div className="showcase" id="showcase">
      <h1>Showcase</h1>
      <ul>
        {list.map((item) => (
          <ShowcaseList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
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
