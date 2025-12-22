import BooksList from "@/app/Components/BooksList/BooksList";
import Filter from "@/app/Components/Filter/Filter";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-6 grid grid-cols-1  md:grid-cols-24 gap-8">
      <div className=" md:col-span-8 lg:col-span-6  xl:col-span-5 2xl:col-span-4 md:border-r-1 md:border-[#d3d3d3]">
        <Filter />
      </div>
      <div className=" md:col-span-16 lg:col-span-18  xl:col-span-19 2xl:col-span-20">
        <BooksList />
      </div>
    </div>
  );
};

export default page;
