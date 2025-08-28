import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import cSharpLogo from "../assets/cSharp.svg";
import ssmsLogo from "../assets/ssms.svg";

const cardVariants = {
  hidden: { x: -150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,  
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-6xl font-bold text-center mb-12">My Skills</h2>

      <div className="flex flex-col gap-6">
        <motion.div
          className="relative rounded-lg p-8 bg-yellow-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold mb-2">Backend Development</h3>
          <p>C# .NET, API design, server-side logic, authentication, performance optimization.</p>
          <div className="absolute bottom-4 right-4">
            <img
              src={cSharpLogo}
              alt="C#"
              className="w-8 h-8 transform transition duration-300 hover:scale-125"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative rounded-lg p-8 bg-yellow-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold mb-2">Frontend Development</h3>
          <p>JavaScript, React, TypeScript, Tailwind CSS, responsive design, building interactive UIs.</p>
          <div className="mt-4 md:absolute md:bottom-4 md:right-4 flex space-x-2">
            <FaJsSquare className="transform transition duration-300 hover:scale-125 text-yellow-500 dark:text-yellow-400" size={28} />
            <SiTypescript className="transform transition duration-300 hover:scale-125 text-blue-600 dark:text-blue-400" size={28} />
            <FaReact className="transform transition duration-300 hover:scale-125 text-cyan-500 dark:text-cyan-400" size={28} />
            <FaCss3Alt className="transform transition duration-300 hover:scale-125 text-blue-500 dark:text-blue-400" size={28} />
            <FaHtml5 className="transform transition duration-300 hover:scale-125 text-orange-500 dark:text-orange-400" size={28} />
          </div>
        </motion.div>

        <motion.div
          className="relative rounded-lg p-8 bg-yellow-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold mb-2">SQL / Databases</h3>
          <p>Writing efficient queries, database design, working with MS SQL Server and relational databases.</p>
          <div className="absolute bottom-4 right-4">
            <img
              src={ssmsLogo}
              alt="SSMS"
              className="w-12 h-12 transform transition duration-300 hover:scale-125"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
