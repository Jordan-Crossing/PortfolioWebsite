import "./showcase.scss";
import laserCat from "../../assets/img/PeanutProfile.jpg";
import ShowcaseList from "../showcaseList/ShowcaseList.jsx";
import { useEffect, useState } from "react";
import {
  catShowcase,
  dogShowcase,
  rabbitShowcase,
  owlShowcase,
  goatShowcase,
  cowShowcase,
} from "../../data.js";

export default function Showcase() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    switch (selected) {
      case "cat":
        setData(catShowcase);
        break;
      case "dog":
        setData(dogShowcase);
        break;
      case "rabbit":
        setData(rabbitShowcase);
        break;
      case "owl":
        setData(owlShowcase);
        break;
      case "goat":
        setData(goatShowcase);
        break;
      case "cow":
        setData(cowShowcase);
        break;
      default:
        setData(cowShowcase);
    }
  }, [selected]);

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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" id="laserCat" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      {/* <img src={require("../../assets/img/PeanutProfile.jpg").default} /> */}
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave2"
      />
      {/* <p>showcase</p> */}
    </div>
  );
}
