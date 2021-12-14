import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import Showcase from "./components/showcase/Showcase.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Works from "./components/works/Works.jsx";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Showcase />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
