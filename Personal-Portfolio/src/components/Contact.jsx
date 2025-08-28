import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h2 className="text-6xl font-bold mb-12 text-center">Contact Me</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.form
          action="https://formspree.io/f/mrbabgng"
          method="POST"
          className="flex-1 grid gap-4 max-w-md mx-auto"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500 focus:outline-none bg-transparent text-gray-900 dark:text-gray-100 transition"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500 focus:outline-none bg-transparent text-gray-900 dark:text-gray-100 transition"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500 focus:outline-none bg-transparent text-gray-900 dark:text-gray-100 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500 focus:outline-none bg-transparent text-gray-900 dark:text-gray-100 transition"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition"
          >
            Send 📩
          </button>
        </motion.form>

        <motion.div
          className="flex-1 text-center space-y-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl md:text-3xl">
            Want to get in touch with me? 👋
            <br />
            Send me an email or find me on social media down below! 💻📱
          </p>

          <div className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300 mt-8">
            <a
              href="https://www.instagram.com/darko.milanovski/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaInstagram size={38} />
            </a>
            <a
              href="https://www.facebook.com/darko.milanovski.90"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaFacebook size={38} />
            </a>
            <a
              href="https://www.linkedin.com/in/darko-milanovski-39160231a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={38} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
