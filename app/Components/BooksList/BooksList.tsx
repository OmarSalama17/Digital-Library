import { Link } from "@/src/i18n/navigation";
import { Book } from "@/types/Book";
import React from "react";
type Props = {
  books: Book[];
  selectedBook: string;
};
const BooksList = ({ books , selectedBook }: Props) => {
  return (
    <main className="flex-1">
      <h1 className="text-2xl font-bold text-black mb-6">
        {selectedBook === "All Categories" ? "All" : selectedBook} Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {books.map((book : Book) => (
          <article
            key={book.id}
            className="bg-[#EEF5FD] rounded-xl p-3 flex flex-col border border-gray-200 h-full shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-full aspect-[2/3] bg-gray-200 rounded-lg mb-3 overflow-hidden">
              <img
                alt={book.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={book.img}
              />
            </div>

            <h2 className="font-bold text-[15px] leading-tight text-gray-900 mb-1 line-clamp-2">
              {book.title}
            </h2>
            <p className="text-xs text-gray-600 font-medium truncate">
              {book.author}
            </p>
            <p className="text-xs text-gray-400 mb-3 h-4">{book.year}</p>

            <Link href={`books/${book.slug}`} className="mt-auto w-full py-2 text-center bg-[#d1e1f5] text-black text-sm font-medium rounded-md hover:bg-blue-200 transition-colors cursor-pointer">
              Read
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BooksList;
