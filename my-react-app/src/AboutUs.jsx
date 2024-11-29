

const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            Learn more about who we are and what we do.
          </p>
        </div>

        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-6 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 px-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              At MyApp, we are dedicated to providing top-notch solutions for our customers. Our team is comprised of talented professionals passionate about innovation and excellence.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              We strive to empower businesses and individuals by delivering cutting-edge technology and outstanding services that make a difference.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
