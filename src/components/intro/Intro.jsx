import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      disableBackTyping: false,
      backSpeed: 0,
      typeSpeed: 75,
      loop: true,
      backDelay: 2000,
      showCursor: true,
      strings: ["JavaScript", "React", "HTML", "CSS", "Reponsive Design"],
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
            Welcome to my porfolio.
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
      {/* <svg
        height="600"
        id="visual"
        width="900"
        version="1.1"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(456.7177542766683 318.91799555843994)">
          <path
            id="blob1"
            d="M177.8 -183.9C214.1 -141.4 216 -70.7 211.4 -4.6C206.9 61.5 195.7 123 159.4 156.2C123 189.4 61.5 194.2 2 192.2C-57.5 190.2 -115 181.4 -159.5 148.2C-204 115 -235.5 57.5 -224.4 11.1C-213.4 -35.4 -159.7 -70.7 -115.2 -113.2C-70.7 -155.7 -35.4 -205.4 17.7 -223C70.7 -240.7 141.4 -226.4 177.8 -183.9"
            fill="#BB004B"
          />
        </g>
        <g transform="translate(431.0366489681838 278.6078126889008)">
          <path
            id="blob2"
            d="M129.7 -115.9C172.2 -87.2 213.6 -43.6 216.4 2.8C219.3 49.3 183.5 98.5 141 138.4C98.5 178.2 49.3 208.6 -10.7 219.3C-70.7 230 -141.4 221.1 -166.4 181.3C-191.4 141.4 -170.7 70.7 -168.6 2.1C-166.5 -66.5 -182.9 -132.9 -157.9 -161.6C-132.9 -190.3 -66.5 -181.1 -11.4 -169.7C43.6 -158.3 87.2 -144.5 129.7 -115.9"
            fill="#BB004B"
          />
        </g>
      </svg> */}
      <img
        src={require("./layered-waves-haikei.svg").default}
        alt="svg decoration"
        className="svgWave flip"
      />
    </div>
  );
}
