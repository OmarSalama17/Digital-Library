import BooksList from "@/app/Components/BooksList/BooksList";
import Filter from "@/app/Components/Filter/Filter";
import Pagination from "@/app/Components/Pagination/Pagination";
import React from "react";
import { Book } from "@/types/Book";
type Props = {
  params: Promise<{ locale: string }>; 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
const page = async (props : Props) => {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const res = await fetch(
    `https://69494a851282f890d2d5c793.mockapi.io/api/books?limit=10&page=${currentPage}`,
    { cache: "no-cache" }
  );
  const data : Book[] = await res.json();

  const resAll  = await fetch(
    `https://69494a851282f890d2d5c793.mockapi.io/api/books`,
    { cache: "no-store" }
  );
  const allData : Book[]= await resAll.json();
  const totalItems = allData.length;

  const totalPages = Math.ceil(totalItems / 10);
  return (
    <div className="container mx-auto px-4 md:px-8 py-6 grid grid-cols-1  md:grid-cols-24 gap-8">
      <div className=" md:col-span-8 lg:col-span-6  xl:col-span-5 2xl:col-span-4 md:border-r-1 md:border-[#d3d3d3]">
        <Filter />
      </div>
      <div className=" md:col-span-16 lg:col-span-18  xl:col-span-19 2xl:col-span-20">
        <BooksList books={data} />
      </div>
      <div className="md:col-span-24">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default page;
