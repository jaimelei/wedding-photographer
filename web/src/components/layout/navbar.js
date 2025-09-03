import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#behind-the-lens', label: 'Behind the Lens' },
    { href: '#what-i-offer', label: 'What I Offer' },
    { href: '#featured-works', label: 'Featured Works' },
    { href: '#metrics', label: 'Metrics' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="w-full bg-[#d4bbbb] shadow-md fixed top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-merriweather_bold">
          Lee Sumin
        </div>

        {/* Desktop Nav */}
        <nav className="hidden space-x-6 text-sm text-gray-700 md:flex font-inter_bold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:underline hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <nav className="flex flex-col items-center gap-4 px-6 py-4 font-inter_bold text-sm bg-[#f9eaea]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:underline hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
