import "./cats.scss";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import images from "../../images";

export default function Cats() {
  return (
    <div className="cats" id="cats">
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="carousel-item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
