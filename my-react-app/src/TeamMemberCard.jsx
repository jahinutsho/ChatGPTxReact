
const TeamMemberCard = ({ image, name, role }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alice Johnson",
      role: "CEO",
    },
    {
      image: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bob Smith",
      role: "CTO",
    },
    {
      image: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Carol Williams",
      role: "Project Manager",
    },
    {
      image: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "David Brown",
      role: "Software Engineer",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the talented individuals behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
