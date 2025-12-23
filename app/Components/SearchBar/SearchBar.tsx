"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useDebounce from "@/app/Hooks/useDebounce";
import { Book } from "@/types/Book";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const debouncedQuery = useDebounce(query, 500);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://69494a851282f890d2d5c793.mockapi.io/api/books?title=${debouncedQuery}`
        );
        
        if (res.ok) {
          const data = await res.json();
          setResults(data);
          setShowDropdown(true);
        } else {
          setResults([]);
          setShowDropdown(false);
        }
      } catch (error) {
        console.error("Search error", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [debouncedQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMainSearch = () => {
    setShowDropdown(false);
    router.push(`/books?search=${query}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <div 
          onClick={handleMainSearch}
          className="absolute inset-y-0 right-3 pl-3 flex items-center cursor-pointer hover:text-elib-blue"
        >
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          className="input-shadow block w-full pl-4 pr-10 py-2 border-none rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-elib-blue/50 bg-[#F0F2F5]"
          placeholder="Search for books..."
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if(e.target.value === "") setShowDropdown(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleMainSearch()}
        />
      </div>

      {showDropdown && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-[100]">
          <ul>
            {results.slice(0, 5).map((book) => (
              <li key={book.id} className="border-b border-gray-50 last:border-none">
                <Link 
                  href={`/books/${book.slug}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setShowDropdown(false)}
                >
                  <div className="relative w-10 h-14 flex-shrink-0">
                    <Image 
                      src={book.img || "/placeholder.png"} 
                      alt={book.title} 
                      fill 
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800 line-clamp-1">{book.title}</span>
                    <span className="text-xs text-gray-500">{book.author}</span>
                  </div>
                </Link>
              </li>
            ))}
            
            <li 
              onClick={handleMainSearch}
              className="p-3 text-center text-xs font-bold text-elib-blue cursor-pointer hover:bg-gray-50"
            >
              View all results for "{query}"
            </li>
          </ul>
        </div>
      )}
      
      {loading && query && (
         <div className="absolute top-3 right-10">
            <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-elib-blue rounded-full"></div>
         </div>
      )}
    </div>
  );
};

export default SearchBar;