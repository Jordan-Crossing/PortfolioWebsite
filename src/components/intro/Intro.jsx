import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      disableBackTyping: true,
      backSpeed: 15,
      typeSpeed: 75,
      backDelay: 2000,
      showCursor: true,
      strings: [
        "Software Engineering, Scalability, Innovation, Design, User Experience, People",

        "Lets just say....",
        "People & Software",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        {/* <div className="imgContainer">
          <img src="img/PeanutProfile.jpg" alt="cat" />
        </div> */}
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi, I'm</h3>
          <h1>Jordan.</h1>
          <h3>
            Self taught & passionate about
            {/* <br /> &nbsp;about */}
            {/* <br /> <span></span>&nbsp; */}
          </h3>
          <h2>
            <span ref={textRef}> </span>
          </h2>

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
