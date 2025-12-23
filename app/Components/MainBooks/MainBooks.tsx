"use client"
import { Book } from '@/types/Book';
import React, { use, useState } from 'react'
import Filter from '../Filter/Filter';
import BooksList from '../BooksList/BooksList';
import Pagination from '../Pagination/Pagination';
import { useSearchParams } from 'next/navigation';
type Props = {
    data: Book[];
    currentPage: number;
    totalPages: number;
}
const MainBooks = ({data, currentPage, totalPages}:Props) => {
  const searchParams = useSearchParams();
  const cat = searchParams.get("category") || "All Categories";
  console.log("cat",cat);
  const [selectedBook, setSelectedBook] = useState<string>(cat);
  
  const filteredData = data.filter((book) => {
    if("All Categories" === selectedBook){
      return book
    }else{
      return book.category === selectedBook
    }
  });
  return (
        <div className="container mx-auto px-4 md:px-8 py-6 grid grid-cols-1  md:grid-cols-24 gap-8">
      <div className=" md:col-span-8 lg:col-span-6  xl:col-span-5 2xl:col-span-4 md:border-r-1 md:border-[#d3d3d3]">
        <Filter selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>
      </div>
      <div className=" md:col-span-16 lg:col-span-18  xl:col-span-19 2xl:col-span-20">
        <BooksList books={filteredData} selectedBook={selectedBook}/>
      </div>
      {
        selectedBook === "All Categories" ?
          <div className="md:col-span-24">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        : ""
      }
    </div>
  )
}

export default MainBooks