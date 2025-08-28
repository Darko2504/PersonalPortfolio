import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects"

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}
