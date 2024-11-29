
const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-wrap items-center px-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Build Your Future with <span className="text-blue-600">Our Solutions</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We provide innovative and customized solutions to help your business grow. Join us to unlock your full potential.
          </p>
          <div className="flex space-x-4">
            <a
              href="#services"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;