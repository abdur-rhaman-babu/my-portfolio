import { motion } from "framer-motion";
import fadeIn from "../../variants";
const Contact = () => {
  return (
    <section id="contact" className="mb-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block dark:border-gray-400">
          Contact With{" "}
          <span className="text-[#058789] dark:text-gray-300">Me</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-5 lg:p-8 dark:bg-gray-900 bg-white rounded-xl shadow-sm max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-4 md:border-r-2 border-[#058789] dark:border-gray-300"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>

          <div className="text-lg text-gray-700 font-semibold dark:text-white">
            <span className="text-xl font-bold dark:text-white">Email</span>
            <p>abdurrhamanbabu72@gmail.com</p>
          </div>
          <div className="text-lg text-gray-700 font-semibold dark:text-white">
            <span className="text-xl font-bold">Phone Number</span>
            <p>01905-753265</p>
          </div>
          <div className="text-lg text-gray-700 font-semibold dark:text-white">
            <span className="text-xl font-bold">Location</span>
            <p>Koyra,Khulna,Bangladesh</p>
          </div>
        </motion.div>

        <motion.form
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-white  rounded-xl space-y-4 dark:bg-gray-900"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-[#058789] dark:bg-gray-900 dark:border-gray-300 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 border-[#058789] dark:bg-gray-900 dark:border-gray-300 rounded-md focus:outline-none"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full p-3 border-2 border-[#058789] dark:bg-gray-900 dark:border-gray-300 rounded-md focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 resize-none border-2 border-[#058789] dark:bg-gray-900 dark:border-gray-300 rounded-md focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white w-full gap-2 bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-700"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
