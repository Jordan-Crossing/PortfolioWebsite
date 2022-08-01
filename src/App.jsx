import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Cats from "./components/cats/Cats.jsx";
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
        <Projects />
        <Education />
        <Contact />
        <Cats />
      </div>
    </div>
  );
}

export default App;
