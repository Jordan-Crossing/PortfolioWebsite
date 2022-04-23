import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "Curious",
        "Friendly",
        "Gelato Connoisseur",
        "Lateral thinker",
        "Fitness Fanatic",
        "Extrovert",
        "Mindful",
        "Tinkerer",
        "Introspective",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/PeanutProfile.jpg" alt="cat" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <h2>&nbsp;Hi there, I'm</h2> */}
          <h1>&nbsp;Jordan</h1>
          <h3>
            &nbsp;Software Engineer
            <br /> &nbsp;+
            <br /> <span></span>&nbsp;
            <span ref={textRef}> </span>
          </h3>
          {/* <a href="#showcase">Next</a> */}
        </div>
      </div>
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave"
      />
    </div>
  );
}
