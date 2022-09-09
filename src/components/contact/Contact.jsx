import "./contact.scss";
import { motion } from "framer-motion";
import rainbowWaves from "./rainbow-stacked-waves-haikei.svg";
export default function Contact() {
  return (
    <div
      className="contact"
      id="contact"
      style={{ backgroundImage: `url(${rainbowWaves})` }}
    >
      <motion.div
        className="contact-card"
        initial={{ scale: 1, rotate: 355 }}
        animate={{ rotate: 365, scale: 1 }}
        transition={{
          type: "tween",
          stiffness: 20,
          damping: 10,
          repeat: Infinity,
          duration: 1,
        }}
      >
        <h1>Contact</h1>
        <p>j.crossing92@gmail.com</p>
      </motion.div>
    </div>
  );
}
