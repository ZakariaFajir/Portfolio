import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Skill = ({ skill, icon }) => (
  <li className="flex flex-col items-center justify-center bg-gray-200 text-black dark:bg-gray-700 dark:text-white p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:opacity-90">
    <strong className="mb-2">{skill}</strong>
    <i className={`fa-brands ${icon}`}></i>
  </li>
);

function Skills() {
  const { language } = useContext(AppContext);

  const worksText = {
    en: {
      sectionTitle: "Skills",
      buttonLabel: "My Works",
    },
    fr: {
      sectionTitle: "Compétences",
      buttonLabel: "Mes Projets",
    },
  };
  const skills = [
    { skill: "JavaScript", icon: "fa-js" },
    { skill: "React", icon: "fa-react" },
    { skill: "Node JS", icon: "fa-node" },
    { skill: "HTML", icon: "fa-html5" },
    { skill: "CSS", icon: "fa-css3" },
    { skill: "PHP", icon: "fa-php" },
    { skill: "Laravel", icon: "fa-laravel" },
    { skill: "GIT", icon: "fa-square-git" },
  ];
  return (
    <section
      className="my-skills bg-cover dark:bg-gray-800 dark:text-white text-center p-10"
      id="skills"
    >
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold mb-6 border-b-2 border-gray-900">
          {worksText[language].sectionTitle}
        </h2>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </ul>
      <a
        href="#work"
        className="inline-block bg-gray-200 text-black dark:text-white dark:bg-gray-700 no-underline cursor-pointer text-sm uppercase tracking-wide font-bold transition-transform duration-200 ease-in-out transform hover:scale-110 px-10 py-2 mt-8"
      >
        {worksText[language].buttonLabel}
      </a>
    </section>
  );
}

export default Skills;
