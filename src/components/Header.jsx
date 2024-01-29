import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../context/AppContext";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { HiMoon, HiSun } from "react-icons/hi2";

const Header = () => {
  const { theme, setTheme, language, setLanguage } = useContext(AppContext);


  const text = "<ZakariaFajir />";
  const characters = text.split("");


  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };
 


  return (
    <header
      className='dark:bg-gray-800 bg-gray-200 z-50 dark:text-white text-black fixed top-0 right-0 left-0 p-4 flex justify-between items-center'
    >
      <div className="inline-block font-medium bg-gray-800 border text-lg border-orange-400 cursor-default py-2 px-4 rounded shadow-md">
        {characters.map((char, index) => (
          <span
            key={index}
            className="text-animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>

      <div className="switches flex space-x-4">
        <button
          onClick={toggleLanguage}
          className="dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded flex items-center"
        >
          <FontAwesomeIcon icon={faLanguage} className="mr-2" />
          {language === "en" ? "Eng" : "Fr"}
        </button>
        <div className="flex items-center">
          {theme == "dark" ? (
            <HiMoon
              className="text-[35px] bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-sm cursor-pointer"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          ) : (
            <HiSun
              className="text-[35px] bg-gray-300 hover:bg-gray-500 text-black p-1 rounded-sm cursor-pointer"
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
