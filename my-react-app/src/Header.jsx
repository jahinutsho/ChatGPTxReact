import { useState } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-blue-600 text-white">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-bold">
        <a href="/">MyApp</a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Toggle Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <nav className="md:hidden bg-blue-500">
        <ul className="space-y-2 py-3">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-400">Home</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-400">About</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-400">Services</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-400">Contact</a>
          </li>
        </ul>
      </nav>
    )}
  </header>
  )
}

export default Header