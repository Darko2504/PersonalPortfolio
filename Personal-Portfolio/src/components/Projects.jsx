import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import guitarImg from "../assets/guitarshop.png";
import bookImg from "../assets/book.png"

const projects = [
  {
    title: "Guitar Shop",
    description:
      "A modern web app for browsing and buying guitars! Built with React + TypeScript ⚛️📘, powered by GraphQL + Apollo 🚀 for smooth and fast data fetching. Fully responsive and designed for a seamless shopping experience 🛒✨.",
    image: guitarImg,
    demoLink: "https://guitar-shopp.vercel.app/",
    githubLink: "https://github.com/Darko2504/Guitar-Shop",
  },
  {
    title: "Book Rental App",
    description: "📚 Book Store – A modern online bookstore built with ASP.NET MVC 🖥️💙. Browse, search, and buy books with ease! Integrated C# backend for robust server-side logic 🔧, authentication for secure user accounts 🔐, and a responsive design that works beautifully on all devices 📱💻. Perfect for book lovers looking for a smooth and interactive shopping experience ✨📖🛒.",
    image: bookImg,
    demoLink: "https://bulkywebapp.azurewebsites.net/",
    githubLink: "https://github.com/Darko2504/MVC/tree/main/Bulky",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-32 pb-20 px-6 md:px-20 bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h2 className="text-6xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:opacity-90 transition rounded-lg"
              />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                🔗 Click the image to view the project
              </p>
            </a>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-auto bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition"
              >
                <FaGithub size={20} />
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
