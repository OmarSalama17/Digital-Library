import React from "react";
type Props = {
  selectedBook: string;
  setSelectedBook: React.Dispatch<React.SetStateAction<string>>;
};
const Filter = ({ selectedBook, setSelectedBook }:Props) => {
  const categories = [
    { name: "All Categories" },
    { name: "Epic Science Fiction" },
    { name: "Non-Fiction" },
    { name: "Science Fiction" },
    { name: "Mystery" },
    { name: "Romance" },
    { name: "History" },
    { name: "Self-Help" },
    { name: "Biography" },
    { name: "Young Adult" },
  ];

  return (
    <aside
      aria-label="Sidebar"
      className="w-full md:w-[190px] flex-shrink-0  md:block pt-3"
    >
      <nav>
        <ul className="space-y-3">
          {categories.map((cat, index) => (
            <li key={index} onClick={() => setSelectedBook(cat.name)}>
              <p
                className={`block px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  selectedBook === cat.name
                    ? "bg-[#d1e1f5] text-black font-semibold shadow-sm"
                    : "text-gray-800 font-medium hover:text-black hover:bg-white/50"
                }`}
              >
                {cat.name}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Filter;
