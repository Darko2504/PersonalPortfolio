import { motion } from "framer-motion";
import dareImage from "../assets/dare.jpg";

export default function Hero() {
  return (
    <section
      className="pt-60 min-h-screen flex flex-col md:flex-row items-center justify-center 
             px-6 md:px-20 bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
             relative transition-colors duration-500 pt-24 md:pt-32"
    >
      <motion.div
        className="space-y-6 md:mr-4 max-w-md z-10 text-center md:text-left"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Darko 👋</h2>
        <p className="text-lg md:text-xl">
          A passionate C# .NET developer with strong experience in backend
          development and application logic. I also have solid skills in
          JavaScript frontend development and am familiar with modern frontend
          frameworks like React and Angular. I enjoy building clean, efficient,
          and user-friendly web applications, and I’m always eager to learn new
          technologies and improve my craft.
        </p>
      </motion.div>

      <div className="mt-10 md:mt-0 relative max-w-sm flex justify-center w-full md:w-auto px-6">
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 dark:bg-blue-600 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-orange-400 dark:bg-orange-700 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute -top-6 right-16 w-12 h-12 bg-green-300 dark:bg-green-600 rounded-full opacity-60"></div>
        <div className="absolute -bottom-6 right-16 w-12 h-12 bg-green-300 dark:bg-green-600 rounded-full opacity-60 animate-bounce"></div>

        <motion.img
          src={dareImage}
          alt="Darko"
          className="rounded-xl shadow-lg max-h-80 md:max-h-96 object-contain relative z-10"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
