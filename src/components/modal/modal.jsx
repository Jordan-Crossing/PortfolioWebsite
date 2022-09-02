import Spotlight from "../spotlight/Spotlight";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import "./modal.scss";

console.log("Modal");

const paragraph = { message: "" };

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, project, data }) => {
  return (
    <Backdrop children={paragraph.message} onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ backgroundImage: `url(/img/neatlayered-steps-haikei.svg)` }}
      >
        <Spotlight
          text={text}
          project={project}
          data={data}
          style={{ backgroundImage: `url(/img/stacked-steps-haikei.svg)` }}
        />
      </motion.div>
      {/* <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      ></AnimatePresence> */}
    </Backdrop>
  );
};

export default Modal;
