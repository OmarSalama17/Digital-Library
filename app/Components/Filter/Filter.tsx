import React from "react";

const Filter = () => {
  const categories = [
    { name: "All Categories", active: false },
    { name: "Fiction", active: false },
    { name: "Non-Fiction", active: false },
    { name: "Science Fiction", active: true },
    { name: "Mystery", active: false },
    { name: "Romance", active: false },
    { name: "History", active: false },
    { name: "Self-Help", active: false },
    { name: "Biography", active: false },
    { name: "Young Adult", active: false },
  ];

  return (
    <aside
      aria-label="Sidebar"
      className="w-full md:w-[190px] flex-shrink-0  md:block pt-3"
    >
      <nav>
        <ul className="space-y-3">
          {categories.map((cat, index) => (
            <li key={index}>
              <p
                className={`block px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  cat.active
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
