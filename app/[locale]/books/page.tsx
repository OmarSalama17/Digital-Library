import BooksList from "@/app/Components/BooksList/BooksList";
import Filter from "@/app/Components/Filter/Filter";
import Pagination from "@/app/Components/Pagination/Pagination";
import React from "react";
import { Book } from "@/types/Book";
import MainBooks from "@/app/Components/MainBooks/MainBooks";
type Props = {
  params: Promise<{ locale: string }>; 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
const page = async (props : Props) => {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const res = await fetch(
    `https://69494a851282f890d2d5c793.mockapi.io/api/books?limit=10&page=${currentPage}&title=${search}`,
    { cache: "no-cache" }
  );
const data: Book[] = res.ok ? await res.json() : []

  const resAll  = await fetch(
    `https://69494a851282f890d2d5c793.mockapi.io/api/books`,
    { cache: "no-store" }
  );
  const allData : Book[]= await resAll.json();
  const totalItems = allData.length;

  const totalPages = Math.ceil(totalItems / 10);
  return (
      <MainBooks data={data} currentPage={currentPage} totalPages={totalPages}/>
  );
};

export default page;
