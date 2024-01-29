import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  const { language } = useContext(AppContext);
  const [animate, setAnimate] = useState("slide-in-x");
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const subtitles = {
    en: {
      greeting: "Hi, I am",
      subtitles: ["Full Stack Dev", "Engineer Amoa"],
    },
    fr: {
      greeting: "Bonjour, je suis",
      subtitles: ["Développeur Full Stack", "Ingénieur Amoa"],
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("slide-out-x");
      setTimeout(() => {
        setCurrentSubtitleIndex(
          (prevIndex) => (prevIndex + 1) % subtitles[language].subtitles.length
        );
        setAnimate("slide-in-x");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white">
      <section className="intro relative mt-4" id="home">
        <img
          src="img/zakariafajir.jpg"
          alt="Zakaria Fajir"
          className="block object-cover rounded-lg shadow-lg intro_img animate-fade-in"
        />
        <h1 className="text-6xl font-light mb-1 md:grid-area-title">
          {subtitles[language].greeting}{" "}
          <strong className="block font-bold">Zakaria Fajir</strong>
        </h1>
        <div className="inline-block bg-orange-200 h-10 text-xl p-2 text-black mb-4 font-mono intro_subtitle">
          <p className={animate}>
            {subtitles[language].subtitles[currentSubtitleIndex]}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
