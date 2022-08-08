import "./projects.scss";
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

import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal/Modal";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
    <div className="projects" id="projects">
      <h1>Projects</h1>
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
      {/* <button onClick={() => (modalOpen ? close() : open())}>hello</button> */}
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
              id="laserCat"
              onClick={() => (modalOpen ? close() : open())}
            />
            {/* <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            ></AnimatePresence>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />} */}
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

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
}
