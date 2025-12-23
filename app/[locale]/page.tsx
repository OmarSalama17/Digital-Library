import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HomeMain from "../Components/HomeMain/HomeMain";
import { Book } from "@/types/Book";

export default async function Home({ params }: { params: { locale: string } }) {
  let { locale } = await params;
  console.log(locale);
  let t = await getTranslations("home");
  const res = await fetch("https://69494a851282f890d2d5c793.mockapi.io/api/books?limit=4&page=1" , { cache: "no-cache" });
  const data: Book[] = await res.json();
  return (
    <HomeMain popularBooks={data}/>
  );
}
