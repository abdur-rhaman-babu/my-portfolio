const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-12"
    >
      <div data-aos="fade-down" className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block">
          Contact With <span className="text-[#058789]">Me</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-5 lg:p-8 bg-white rounded-xl shadow-sm max-w-4xl mx-auto">
        <div data-aos="fade-right" className="space-y-4 md:border-r-2 border-[#058789]">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>

          <div className="text-lg text-gray-700 font-semibold">
            <span className="text-xl font-bold">Email</span>
            <p>abdurrhamanbabu72@gmail.com</p>
          </div>
          <div className="text-lg text-gray-700 font-semibold">
            <span className="text-xl font-bold">Phone Number</span>
            <p>01905-753265</p>
          </div>
          <div className="text-lg text-gray-700 font-semibold">
            <span className="text-xl font-bold">Location</span>
            <p>Koyra,Khulna,Bangladesh</p>
          </div>
        </div>

        <form data-aos="fade-up" className="bg-white  rounded-xl space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-[#058789] rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 border-[#058789] rounded-md focus:outline-none"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full p-3 border-2 border-[#058789] rounded-md focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 resize-none border-2 border-[#058789] rounded-md focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] text-white p-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

{
  /* <div className="text-center">
  <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block">
    About <span className="text-[#058789]">Me</span>
  </h1>
</div>; */
}
