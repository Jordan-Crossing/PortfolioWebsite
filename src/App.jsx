import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import Showcase from "./components/showcase/Showcase.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Works from "./components/works/Works.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Showcase />
        <Testimonials />
        <Contact />
        <Works />
      </div>
    </div>
  );
}

export default App;
