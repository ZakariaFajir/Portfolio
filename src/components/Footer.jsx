function Footer() {
  return (
    <footer className="dark:bg-gray-950 dark:text-white bg-white border-t dark:border-gray-200 border-gray-900 text-center py-8">
      <a
        href="mailto:zakaria.fajir@gmail.com"
        className="text-blue-400 font-semibold hover:text-blue-300"
      >
        zakaria.fajir@gmail.com
      </a>
      <ul className="flex justify-center mt-4">
        <li className="mx-2">
          <a
            className="text-gray-400 hover:text-gray-300"
            href="https://github.com/ZakariaFajir/"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="mx-2">
          <a
            className="text-blue-400 hover:text-blue-300"
            href="https://www.linkedin.com/in/fajir-zakaria/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
