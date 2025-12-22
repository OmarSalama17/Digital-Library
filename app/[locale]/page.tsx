import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home({ params }: { params: { locale: string } }) {
  let { locale } = await params;
  console.log(locale);
  let t = await getTranslations("home");

  return (
<div className="background-container">
        <div className="shape-top-right"></div>
        
        <div className="dots-top-right"></div>

        <div className="dots-bottom-left"></div>

        <div className="blue-glow"></div>

        <div className="stripes-bottom-right"></div>

        <div className="content">
            <h1>ضع محتواك هنا</h1>
        </div>
    </div>
  );
}
