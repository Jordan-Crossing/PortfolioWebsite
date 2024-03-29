import "./education.scss";
// import Scrimba from "./img/Scrimba.png";
import steps from "./stacked-steps-haikei.svg";

export default function Education() {
  return (
    <div
      className="education"
      id="education"
      style={{ backgroundImage: `url(${steps})` }}
    >
      <div className="title">
        <h1>Education</h1>
        <p>I cant thank these guys enough.</p>
      </div>
      <div className="container">
        <div className="card">
          <div className="top">
            <a href="https://cs50.harvard.edu/x/2022/">
              <img src="./img/Harvard-light.jpg" alt="Harvard CS:50" />
            </a>
          </div>
          <div className="center">
            <h4>Intro to Computer Science</h4>
          </div>
          <div className="bottom">
            <p>
              " Absolutly fantastic course. In particular the series of lectures
              and the energy that David J. Malan brings help to make at first
              duntingly complex topics such as algorithms & data structures or
              memory allocation in C very approachable. "
            </p>
          </div>
        </div>
        <div className="card featured">
          <div className="top">
            <a href="https://scrimba.com/learn/frontend">
              <img src="./img/Scrimba.png" alt="Scrimba" />
            </a>
          </div>
          <div className="center">
            <h4>Front-End Career Path</h4>
          </div>
          <div className="bottom">
            <p>
              " Scrimba's front-end career path is an absoute wealth of
              knowledge that helped to build my confidence by teaching though
              countless projects. Starting out with simple HTML and CSS all the
              way to managing state in react and making components reusable. "
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <a href="https://www.freecodecamp.org/">
              <img src="./img/FreeCodeCamp-light.jpg" alt="freeCodeCamp.org" />
            </a>
            {/* <h3>FreeCodeCamp</h3> */}
          </div>
          <div className="center">
            <h4>JavaScript Algorithms & Data Structures</h4>
          </div>
          <div className="bottom">
            <p>
              " It is almost unbelievable that such a in depth education can be
              free. While projects are great to see how things all work together
              I really appreciate how freeCodeCamp has individual modules for
              every little thing, its very useful of isolating knowledge gaps. "
            </p>
          </div>
        </div>
      </div>
      {/* <img
        src="./img/stacked-steps-haikei.svg"
        alt="svg decoration"
        className="svg"
      /> */}
    </div>
  );
}
