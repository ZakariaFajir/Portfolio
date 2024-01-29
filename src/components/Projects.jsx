import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Project = ({
  imgUrl,
  title,
  technologies,
  openLink,
  description,
  githubLink,
}) => {
  const { language } = useContext(AppContext);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg m-4 dark:bg-gray-700 dark:text-white flex flex-col h-full">
      <img src={imgUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <h3 className="text-md dark:text-gray-200 mb-2">
            <strong>
              {language === "en"
                ? "Technologies used:"
                : "Technologies utilisées:"}
            </strong>{" "}
            {technologies.join(", ")}
          </h3>
          <p className="dark:text-gray-300 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          {openLink && (
            <a
              className="text-blue-500 hover:text-blue-700"
              href={openLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en" ? "Open" : "Ouvrir"}
            </a>
          )}
          {githubLink && (
            <a
              className="dark:text-gray-200 dark:hover:text-gray-400 text-gray-800 hover:text-gray-600 transition !duration-0 flex items-center"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en" ? "Github" : "Github"}{" "}
              <i className="fa-brands fa-github ml-2 transition !duration-0"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const { language } = useContext(AppContext);
  const projectDescriptions = {
    en: {
      biblioApp:
        "I developed a Biblio web application using React, Tailwind CSS, Node.js, Express, Axios, and Redux. The app enables users to make purchases, sign in, reset passwords, and sign in with Google. When the order is confirmed, the library owner will be notified via email with comprehensive order details. Users can explore and track their purchase and shopping history within the app.",
      portfolio:
        "This portfolio project is powered by React and designed using Tailwind CSS, showcasing my web development abilities. It highlights a clean and responsive design.",
      project1:
        "The maintenance management project is an application designed to handle products and materials throughout their lifecycle. The application provides comprehensive features to create, track, and document maintenance interventions.",
    },
    fr: {
      biblioApp:
        "J'ai développé une application web Biblio en utilisant React, Tailwind CSS, Node.js, Express, Axios et Redux. L'application permet aux utilisateurs de faire des achats, de se connecter, de réinitialiser leur mot de passe et de se connecter avec Google. Lorsque la commande est confirmée, le propriétaire de la bibliothèque est informé par e-mail avec des détails de commande complets. Les utilisateurs peuvent explorer et suivre leurs achats et leur historique d'achat dans l'application.",
      portfolio:
        "Ce projet de portfolio est alimenté par React et conçu avec Tailwind CSS, mettant en valeur mes compétences en développement web. Il présente un design épuré et réactif.",
      project1:
        "Le projet de gestion de maintenance est une application conçue pour gérer les produits et les matériaux tout au long de leur cycle de vie. L'application offre des fonctionnalités complètes pour créer, suivre et documenter les interventions de maintenance.",
    },
  };

  const projectData = [
    {
      imgUrl: "img/biblioApp.jpeg",
      title: language === "en" ? "Biblio App" : "Application Biblio",
      technologies: [
        "React",
        "Tailwind CSS",
        "Nodejs",
        "Axios",
        "Redux/Toolkit",
        "Express",
        "Mongoose",
      ],
      description:
        language === "en"
          ? projectDescriptions.en.biblioApp
          : projectDescriptions.fr.biblioApp,
      openLink: "https://biblio-app-frontend.vercel.app/",
    },
    {
      imgUrl: "img/GestionMaintenance.jpeg",
      title:
        language === "en" ? "Maintenance management" : "Gestion de maintenance",
      technologies: [
        "React",
        "Node",
        "Express",
        "Mongoose",
        "Tailwind",
        "JSpdf",
      ],
      description:
        language === "en"
          ? projectDescriptions.en.project1
          : projectDescriptions.fr.project1,
      openLink: "https://gestion-maintenance.onrender.com/",
    },
    {
      imgUrl: "img/portfolio.PNG",
      title: language === "en" ? "Portfolio" : "Portfolio",
      technologies: ["React", "Tailwind CSS"],
      description:
        language === "en"
          ? projectDescriptions.en.portfolio
          : projectDescriptions.fr.portfolio,
      openLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="dark:bg-gray-800 dark:text-white p-6" id="work">
      <h2 className="text-4xl font-bold mb-6 text-center">
        {language === "en" ? "My work" : "Mon travail"}
      </h2>
      <p className="text-lg mb-8 text-center">
        {language === "en"
          ? "A selection of my range of work"
          : "Une sélection de mes travaux"}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
