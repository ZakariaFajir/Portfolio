import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { AppContext } from "./context/AppContext";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <div className={`${theme}`}>
        <Header />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
