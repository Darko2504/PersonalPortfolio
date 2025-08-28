import { useState, useEffect } from "react";
import { FaGithub, FaDownload, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          My Personal Portfolio
        </h1>

        <div className="flex items-center flex-wrap gap-2 md:gap-4">
          <a
            href="#skills"
            className="px-3 py-1 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 py-1 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-1 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="https://github.com/Darko2504"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="/cv.pdf"
            download="Darko_Milanovski_CV.pdf"
            className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 rounded-lg shadow hover:text-gray-200 transition"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-gray-800 dark:text-gray-200 text-xl transition-colors"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}
