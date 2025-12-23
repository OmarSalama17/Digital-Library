"use client";
import { Link, useRouter } from "@/src/i18n/navigation";
import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  console.log(search);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    // { name: "My Library", href: "/library" },
    { name: "About", href: "/about" },
  ];

  function toggle() {
    setOpen(!open);
  }

  return (
    <header className="bg-[#B8D7E9] sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 h-17 flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo.png" width={150} height={80} />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <SearchBar />
          </div>
        </div>

        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-900 font-medium hover:text-elib-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => toggle()}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex space-x-10 justify-center p-4 border-t border-gray-200/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-900 font-medium hover:text-elib-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 max-w-lg mx-8 p-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-3 pl-3 flex items-center cursor-pointer">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <input
              className="input-shadow block w-full pl-4 pr-3 py-2 border-none rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-elib-blue/50 bg-[#F0F2F5]"
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
