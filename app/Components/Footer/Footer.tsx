import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto  pt-7 pb-7 border-t border-[#e3e3e3] z-50">
      <div className="  px-4 text-center">
        <p className="text-sm text-gray-500">
          © 2024 E-LIB. All rights reserved. <a className="hover:text-elib-blue" href="#">Privacy Policy</a> | <a className="hover:text-elib-blue" href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;