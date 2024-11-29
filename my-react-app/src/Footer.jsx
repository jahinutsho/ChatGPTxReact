

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Brand */}
            <div className="text-lg font-bold mb-4 md:mb-0">
              <a href="/">MyApp</a>
            </div>
  
            {/* Navigation Links */}
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center text-sm mt-4">
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;