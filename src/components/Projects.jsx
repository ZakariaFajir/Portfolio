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
      libraLink:
        "I developed a Biblio web application using React, Tailwind CSS, Node.js, Express, Axios, and Redux. The app enables users to make purchases, sign in, reset passwords, and sign in with Google. When the order is confirmed, the library owner will be notified via email with comprehensive order details. Users can explore and track their purchase and shopping history within the app.",
      portfolio:
        "This portfolio project is powered by React and designed using Tailwind CSS, showcasing my web development abilities. It highlights a clean and responsive design.",
      infoSwift:
        "A maintenance management solution tailored for the industry, designed to provide instant access to detailed information on past interventions for a product. This platform generates a unique link intended to be integrated into an NFC chip or QR codes. Hence, clients can swiftly view the complete intervention history, including technical forms and technical details associated with the product.",
    },
    fr: {
      libraLink:
        "J'ai développé une application web Biblio en utilisant React, Tailwind CSS, Node.js, Express, Axios et Redux. L'application permet aux utilisateurs de faire des achats, de se connecter, de réinitialiser leur mot de passe et de se connecter avec Google. Lorsque la commande est confirmée, le propriétaire de la bibliothèque est informé par e-mail avec des détails de commande complets. Les utilisateurs peuvent explorer et suivre leurs achats et leur historique d'achat dans l'application.",
      portfolio:
        "Ce projet de portfolio est alimenté par React et conçu avec Tailwind CSS, mettant en valeur mes compétences en développement web. Il présente un design épuré et réactif.",
      infoSwift:
        "Une solution de gestion de maintenance dédiée à l'industrie, conçue pour fournir un accès instantané aux informations détaillées sur les interventions passées sur un produit. Cette plateforme permet de générer un lien unique destiné à être intégré dans une puce NFC ou des codes QR. Ainsi, les clients peuvent rapidement visualiser l'historique complet des interventions, y compris les formulaires techniques et les détails techniques associés au produit",
    },
  };

  const projectData = [
    {
      imgUrl: "img/LibraLink.jpeg",
      title: "LibraLink",
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
          ? projectDescriptions.en.libraLink
          : projectDescriptions.fr.libraLink,
      openLink: "https://libralink.vercel.app/",
      githubLink: "https://github.com/ZakariaFajir/LibraLink-frontend",
    },
    {
      imgUrl: "img/GestionMaintenance.jpeg",
      title: "InfoSwift",
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
          ? projectDescriptions.en.infoSwift
          : projectDescriptions.fr.infoSwift,
      openLink: "https://infoswift.onrender.com/",
      githubLink: "https://github.com/ZakariaFajir/InfoSwift",
    },
    {
      imgUrl: "img/portfolio.PNG",
      title: language === "en" ? "Portfolio" : "Portfolio",
      technologies: ["React", "Tailwind CSS"],
      description:
        language === "en"
          ? projectDescriptions.en.portfolio
          : projectDescriptions.fr.portfolio,
      openLink: "https://portfolio-zakaria-fajir.vercel.app",
      githubLink: "https://github.com/ZakariaFajir/Portfolio",
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
