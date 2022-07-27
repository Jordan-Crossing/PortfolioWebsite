import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Education</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <h3>Harvard</h3>
            <h4>CS50: Introduction to Computer Science</h4>
          </div>
          <div className="center"></div>
          <div className="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia eveniet, magni sunt ipsa consequuntur ex iure fuga delectus
            quo eligendi porro voluptates asperiores, eum modi possimus cumque
            enim! Consectetur.
          </div>
        </div>
        <div className="card featured">
          <div className="top">
            <h3>Scrimba</h3>
            <h4>Front-End Career Path</h4>
          </div>
          <div className="center"></div>
          <div className="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia eveniet, magni sunt ipsa consequuntur ex iure fuga delectus
            quo eligendi porro voluptates asperiores, eum modi possimus cumque
            enim! Consectetur.
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>FreeCodeCamp</h3>
            <h4>Front-End Career Path</h4>
          </div>
          <div className="center"></div>
          <div className="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia eveniet, magni sunt ipsa consequuntur ex iure fuga delectus
            quo eligendi porro voluptates asperiores, eum modi possimus cumque
            enim! Consectetur.
          </div>
        </div>
      </div>
    </div>
  );
}
