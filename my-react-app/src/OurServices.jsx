

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurServices = () => {
  const services = [
    {
      icon: "\u{1F4BB}",
      title: "Web Development",
      description: "Building responsive and modern websites for businesses of all sizes.",
    },
    {
      icon: "\u{1F4E2}",
      title: "Digital Marketing",
      description: "Creating impactful campaigns to increase your online presence.",
    },
    {
      icon: "\u{1F680}",
      title: "SEO Optimization",
      description: "Improving search engine rankings to drive organic traffic.",
    },
    {
      icon: "\u{1F4C8}",
      title: "Data Analytics",
      description: "Providing insights from data to enhance decision-making processes.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Explore the wide range of services we offer to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
