import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function About() {
  const { language } = useContext(AppContext);

  const aboutText = {
    en: [
      "I just love working with websites. It all started because I'm super curious about how things work in the online world.",
      "I know how to use cool tools like React, Node.js, PHP, and Tailwind CSS. They help me create awesome websites that look good and work smoothly.",
      "I'm passionate about web development because I believe technology can make things better for people. That's why I chose to dive into this field and learn all about it.",
      "I do a bit of everything - making things pretty on the front of the website with React and handling the behind-the-scenes stuff with Node.js. Every bit of code I write is my way of making the web a better place.",
      "Currently, as an AMOA student, I'm exploring the exciting world where technology meets business needs. It's more than just a study; it's a journey of discovery in creating digital solutions that make a real impact.",
    ],
    fr: [
      "J'adore travailler avec des sites web. Tout a commencé parce que je suis super curieux de comprendre comment les choses fonctionnent dans le monde en ligne.",
      "Je sais comment utiliser des outils cool comme React, Node.js, PHP et Tailwind CSS. Ils m'aident à créer des sites web géniaux qui ont l'air bien et fonctionnent en douceur.",
      "Je suis passionné par le développement web parce que je crois que la technologie peut améliorer les choses pour les gens. C'est pourquoi j'ai choisi de me plonger dans ce domaine et d'en apprendre tous les aspects.",
      "Je fais un peu de tout - rendre les choses jolies à l'avant du site avec React et gérer les coulisses avec Node.js. Chaque ligne de code que j'écris est ma façon de rendre le web meilleur.",
      "Actuellement, en tant qu'étudiant AMOA, j'explore le monde passionnant où la technologie répond aux besoins des entreprises. Ce n'est pas seulement une étude ; c'est un voyage de découverte pour créer des solutions numériques qui ont un impact réel.",
    ],
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("slide-out");
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % aboutText[language].length);
        setAnimate("slide-in");
      }, 500);
    }, 14000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="dark:bg-gray-700 bg-gray-100 dark:text-white w-full">
      <section
        className="max-w-4xl mx-auto dark:bg-gray-800 bg-gray-200 rounded-ss-[40%] dark:text-white p-6 md:grid md:grid-cols-2 md:gap-8 items-center"
        id="about"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {language === "en" ? "Who I am" : "Qui je suis"}
          </h2>
          <p className="text-lg md:text-xl font-semibold dark:text-gray-400 text-gray-700 mb-6">
            {language === "en" ? "Amoa Engineer & Full-Stack Developer" : "Ingénieur AMOA et Développeur Full Stack"}
          </p>
          <div className={`${animate} transition-all duration-500`}>
            <p className="text-base md:text-lg h-20 p-4 leading-relaxed">
              {aboutText[language][currentTextIndex]}
            </p>
          </div>
        </div>

        <img
          src="img/Zakariafajir-1.jpeg"
          alt="Zakaria fajir"
          className="shadow-lg rounded-lg transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl"
        />
      </section>
    </div>
  );
}
