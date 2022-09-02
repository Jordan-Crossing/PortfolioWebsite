import "./cats.scss";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import images from "../../images";

export default function Cats() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="cats" id="cats">
      <div className="carousel-container">
        <h1>Bonus Cat Photos.</h1>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
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
    </div>
  );
}
