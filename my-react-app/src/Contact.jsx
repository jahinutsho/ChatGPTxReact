

const Contact = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 px-6 mb-6 md:mb-0">
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 px-6">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Feel free to contact us via phone or email, or visit us at our office.
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> contact@myapp.com
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;