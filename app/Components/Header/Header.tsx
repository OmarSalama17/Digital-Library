import React from 'react';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Books', href: '/books' },
    { name: 'My Library', href: '/library' },
    { name: 'About', href: 'about' },
  ];

  return (
    <header className="bg-[#B8D7E9] sticky top-0 z-50 ">
      <div className="container mx-auto px-4 md:px-8 h-17 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a className="text-2xl font-extrabold text-blue-900 tracking-tight" href="#">
            E-LIB
          </a>
        </div>

        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-3 pl-3 flex items-center cursor-pointer">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <input 
              className="input-shadow block w-full pl-4 pr-3 py-2 border-none rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-elib-blue/50  bg-[#F0F2F5]" 
              placeholder="Search..." 
              type="text" 
            />
          </div>
        </div>

        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-900 font-medium hover:text-elib-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;