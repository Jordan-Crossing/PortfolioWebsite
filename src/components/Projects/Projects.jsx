import "./projects.scss";
import laserCat from "../../assets/img/PeanutProfile.jpg";
import ShowcaseList from "../showcaseList/ShowcaseList.jsx";
import { useEffect, useState } from "react";
import {
  reactShowcase,
  javascriptShowcase,
  portfolioShowcase,
  owlShowcase,
  goatShowcase,
  cowShowcase,
} from "../../data.js";

import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal/Modal.jsx";

export default function Projects() {
  const [selected, setSelected] = useState("reactShowcase");
  const [data, setData] = useState([]);
  const [modalDataId, setModalDataId] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);

  function open(dataId) {
    setModalOpen(true);
    setModalDataId(dataId);
    console.log(dataId);
    console.log(selected);
    console.log(modalDataId);
    console.log(data);
  }

  const list = [
    {
      id: "reactShowcase",
      title: "React.js",
    },
    {
      id: "javascriptShowcase",
      title: "JavaScript",
    },
    {
      id: "portfolio",
      title: "Portfolio site",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "reactShowcase":
        setData(reactShowcase);
        break;
      case "javascriptShowcase":
        setData(javascriptShowcase);
        break;
      case "portfolio":
        setData(portfolioShowcase);
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
              onClick={() => (modalOpen ? close() : open(d.id))}
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

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          text={modalDataId}
          project={selected}
          data={data}
        />
      )}
    </div>
  );
}
