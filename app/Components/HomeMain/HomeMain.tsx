import { Link } from '@/src/i18n/navigation';
import { Book } from '@/types/Book';
import React from 'react';

const categories = [
  { name: "All Categories", icon: "♾️" , href:"/all Categories"},
  { name: "Fiction", icon: "📖" , href:"/fiction"},
  { name: "Non-Fiction", icon: "🧠" , href:"/non-fiction"},
  { name: "Science Fiction", icon: "🚀" , href:"/science fiction"},
  { name: "Mystery", icon: "🕵️" , href:"/mystery"},
  { name: "Romance", icon: "❤️" , href:"/romance"},
  { name: "History", icon: "⏳" , href:"/history"},
  { name: "Self-Help", icon: "🌱" , href:"/self-help"},
  { name: "Biography", icon: "✍️" , href:"/biography"},
  { name: "Young Adult", icon: "🌟" , href:"/young adult"},
];

const staffPicks = [
  {
    id: 1,
    title: "Design Patterns",
    author: "Sarah Jenkins",
    category: "Non-Fiction / Tech",
    desc: "Explore foundational patterns for building scalable...",
    image: "https://placehold.co/150x220/264653/FFF?text=Design", 
  },
  {
    id: 2,
    title: "Cosmos & Mind",
    author: "Dr. A. Sharma",
    category: "Non-Fiction / Science",
    desc: "An exploration of the universe's origins...",
    image: "https://placehold.co/150x220/2a9d8f/FFF?text=Cosmos",
  },
  {
    id: 3,
    title: "The Hidden Garden",
    author: "Maria Sanchez",
    category: "Fiction / Fantasy",
    desc: "Two siblings discover a magical, forgotten garden...",
    image: "https://placehold.co/150x220/e9c46a/333?text=Garden",
  },
];

type Props = {
  popularBooks: Book[];
};  

const HomeMain = ({popularBooks}:Props) => {
  return (
    <main className="w-full bg-[#FDFBF7] text-gray-800 overflow-hidden">
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
              New Arrivals Available
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] leading-[1.1]">
              Discover worlds <br />
              <span className="text-[#7C9CC9]">unturned.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our vast digital collection of fiction, science, and history. 
              Read previews, save your favorites, and dive into your next adventure today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="cursor-pointer px-8 py-3.5 bg-[#7C9CC9] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all font-medium">
                Browse Collection
              </button>
              <button className="cursor-pointer px-8 py-3.5 bg-[#F4F1EA] text-gray-700 border border-[#E5E0D5] rounded-full hover:bg-[#eaddc5] transition-all font-medium">
                View Categories
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="cursor-pointer relative z-10 w-[280px] h-[420px] bg-[#1a4a43] rounded-r-2xl rounded-l-md shadow-2xl flex flex-col p-8 text-white transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="border border-white/20 h-full p-6 flex flex-col justify-between rounded-sm">
                <div className="text-center mt-12 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Featured Book</p>
                  <h3 className="font-serif text-3xl font-medium leading-tight">The Quiet Sea</h3>
                  <p className="text-emerald-100/80 text-sm italic">Elias Thorne</p>
                </div>
                <div className="text-[10px] text-center text-emerald-200/50 uppercase tracking-widest mt-auto">
                  New Documentary work
                </div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/40 to-transparent rounded-l-md pointer-events-none"></div>
            </div>
            <div className="absolute top-4 right-8 lg:right-4 w-[280px] h-[420px] bg-white rounded-2xl shadow-xl z-0 rotate-[4deg]"></div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-[#1F2937]">Explore Categories</h2>
            <a href="#" className="cursor-pointer text-sm font-medium text-[#7C9CC9] hover:underline flex items-center gap-1">
              View all <span>→</span>
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, index) => (
              <Link 
                href={`/books?category=${cat.name}`} 
                key={index} 
                className="cursor-pointer group flex items-center gap-3 px-6 py-3 bg-[#F3F4F6] hover:bg-[#e5e7eb] rounded-full text-gray-700 transition-all text-sm font-medium min-w-[130px] justify-center"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA]/60 my-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-3">Staff Picks</h2>
            <p className="text-gray-500">Curated selections from our editors this month.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffPicks.map((book) => (
              <div key={book.id} className="bg-white p-5 rounded-2xl flex gap-5 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-24 h-36 flex-shrink-0 overflow-hidden rounded-md shadow-sm">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7C9CC9] font-bold mb-1.5">{book.category}</p>
                    <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">{book.title}</h3>
                    <p className="text-xs text-gray-500 mb-2 font-medium">{book.author}</p>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed opacity-80">{book.desc}</p>
                  </div>
                  <button className="cursor-pointer w-full mt-3 py-1.5 bg-[#7C9CC9]/10 text-[#5a7ca8] hover:bg-[#7C9CC9] hover:text-white text-xs font-bold rounded-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-2">Popular Now</h2>
              <p className="text-gray-500 text-sm">Books that are trending in our community.</p>
            </div>
            <div className="relative">
              <select className="cursor-pointer appearance-none border border-gray-200 bg-white pl-4 pr-10 py-2.5 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-200 shadow-sm">
                  <option>Sort by: Popularity</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularBooks.map((book) => (
              <div key={book.id} className="group flex flex-col h-full bg-[#FDFBF7] rounded-3xl p-4 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[3/4] shadow-md">
                  <img 
                    src={book.img} 
                    alt={book.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="space-y-1 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#7C9CC9] transition-colors">{book.title}</h3>
                  <p className="text-xs font-semibold text-gray-500">{book.author}</p>
                  <p className="text-[10px] text-[#7C9CC9] uppercase font-bold pt-1">{book.category}</p>
                  <p className="text-xs text-gray-600 line-clamp-3 mt-3 leading-relaxed opacity-80">
                    {book.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link href={`books/${book.slug}`} className="block text-center cursor-pointer w-full py-2.5 bg-[#7C9CC9] text-white text-sm font-semibold rounded-xl hover:bg-[#6082b0] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
              <Link href="/books" className="cursor-pointer px-8 py-3 bg-white border border-gray-200 text-gray-600 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  View All Books
              </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;