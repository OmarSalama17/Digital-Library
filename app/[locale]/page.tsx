import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HomeMain from "../Components/HomeMain/HomeMain";

export default async function Home({ params }: { params: { locale: string } }) {
  let { locale } = await params;
  console.log(locale);
  let t = await getTranslations("home");

  return (
    <HomeMain/>
  );
}
