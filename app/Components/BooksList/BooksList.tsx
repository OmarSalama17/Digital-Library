import React from "react";

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: "Dune",
      author: "Frank Herbert",
      year: "1965",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYamE5PL3r1SfcySETwgl5uU33K08MZhwCPS83ezKxoIOn216iisj-ujdMwPtJ5Y5-Wogb37oxRGdLVP3PSSLRgeZCv_q-23SaCwTx7P3U3LcO5-5de21wEi_STswh8Wn_0TCWT6as3QnMmF4VM4v80VW49Hrm1F9M8pd8kAG8jMOj92nhPVUTW_FMiKQROvsBFPHhM9oX2QeUYaCqNt1nRJY3OArWuRRSL7xGslvfbTLdh9ftQgrw8f4AOfhysYu5RecLA5TkSvFI",
    },
    {
      id: 2,
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      year: "1969",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4dIG4YlnHJ4pDhO5mAgeqI6zQ-L5hJxEXNvU62lZTVU2qTnjqqcSIxi_qqcwXcXJNf2h8lodqk9N4Wa6BxKmehi2QlHFsZjszG215Aj3cKMTSzGVCWecKOredeUJiwpQOgxy6xfkur_bxlwq_uBCpusTUGrOevPu599ufbj7dhnfpH1SLKsrN_BZYqZwsfBJWZPSJRkUEduXQSFZ4YZ5FrIcxihN582UN-qELrGIVeJm3LPpn5fDX8ohwcV_rJuksSFwZARM9ppi9",
    },
    {
      id: 3,
      title: "Neuromancer",
      author: "William Gibson",
      year: "1984",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNp3_XXAnP2-CMm-7AHT83kpZ3YeRkb0iTYtgBKjC8MlxHNx-oYSu6gA0ut-R7A7bv1alIJCoIIA___WS8fvE_zEsHCZ7LBGPANXsc2_ZR_qOZqJqadOFOcMrz-1_aXh7wGiVlP1hgb9OHgNco-AsNbRV2hWTF7q7a-zWiTw4JfcStkkEpSW1m9WL7JtmQDC8zGby6AWr1THYn4ODt3DGs_CL1tB7eSTOFqwMYrdJ_PapNk8cRZ9_mq_3MsmzjMMlVqlbg3ihkZslf",
    },
    {
      id: 4,
      title: "The Hitchhiker's Guide",
      author: "Douglas Adams",
      year: "1979",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvIlM9CevkuRBtkPM9GUtqwk72SwLkCC_znHuIBWqtFDnwwLx5_jqqU1sVuS3CXg3xL_VnsCLOnCS654yev3dn-QGTW12niGw_Nlra9Q1dCbhGi8HAQhIEjL5nh3fu8Qn4mwBDzjPsc4PZdzC2z-apQpAD-F2Pm2kszyBmQEBXE70iR1ZqkY7DzaAdzOdsx0xXvjlYwT9InxOkzLn1djwnIxgzsp5lwrM4p-quh9ut_vBvWUf6D_rpHktX086NjdIlKJNatQpLNh5z",
    },
    {
      id: 5,
      title: "Foundation",
      author: "Isaac Asimov",
      year: "1951",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBalerk3sl3Ad1dQm2O2QmtphH0sbqLyB7p8wESLgMcywQdSdSSTM7AumwwfPAH0q0OjNeoDPTwF0hNpELLdEDSi76HmsvIjC16MccE-LLVhbNBl_gb7zborph1rZ87DZ7cuJutGFPqj5Oqt7dqxMWgNxVu70gg5vKfTOxymNpye10dkDYjipXytUrG4b427iOHpjwEDWafGu_40GwZwWagg1zx5SEcPsMhbFxJAxzEHnPO5OKRZ_x2mz6ZA6MOTqXWp-JPkAT7BEvX",
    },
    {
      id: 6,
      title: "Snow Crash",
      author: "Neal Stephenson",
      year: "",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtAiLHFNuDpXDXMr-f-UuK2jYmNfEZbM13HTrbVUg0ChY67tip3XjNwP5vP_4FXjuLBAnmXYEmcJN-tAmdzWwU2R5h_kORKhyKidPTt99bCnRnv-cTWpwLUmLSzN4jqk0ZIL4XLjjdiwmp6aNNrFZggjB092F8U-nHPOQG2QMorLCgj5o9CcRizwpsdBZ6aabjcz9GF4t3EtBgtGtVnhDQbprDWjj6L4itbRxatZZTztQzAAwyComeAnp5xPTEIdAlEF9WPpsCwPyU",
    },
    {
      id: 7,
      title: "Foundation",
      author: "Isaac Asimov",
      year: "",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBalerk3sl3Ad1dQm2O2QmtphH0sbqLyB7p8wESLgMcywQdSdSSTM7AumwwfPAH0q0OjNeoDPTwF0hNpELLdEDSi76HmsvIjC16MccE-LLVhbNBl_gb7zborph1rZ87DZ7cuJutGFPqj5Oqt7dqxMWgNxVu70gg5vKfTOxymNpye10dkDYjipXytUrG4b427iOHpjwEDWafGu_40GwZwWagg1zx5SEcPsMhbFxJAxzEHnPO5OKRZ_x2mz6ZA6MOTqXWp-JPkAT7BEvX",
    },
    {
      id: 8,
      title: "The Dune",
      author: "Frank Herbert",
      year: "",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYamE5PL3r1SfcySETwgl5uU33K08MZhwCPS83ezKxoIOn216iisj-ujdMwPtJ5Y5-Wogb37oxRGdLVP3PSSLRgeZCv_q-23SaCwTx7P3U3LcO5-5de21wEi_STswh8Wn_0TCWT6as3QnMmF4VM4v80VW49Hrm1F9M8pd8kAG8jMOj92nhPVUTW_FMiKQROvsBFPHhM9oX2QeUYaCqNt1nRJY3OArWuRRSL7xGslvfbTLdh9ftQgrw8f4AOfhysYu5RecLA5TkSvFI",
    },
    {
      id: 9,
      title: "Foundation",
      author: "Isaac Asimov",
      year: "",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBalerk3sl3Ad1dQm2O2QmtphH0sbqLyB7p8wESLgMcywQdSdSSTM7AumwwfPAH0q0OjNeoDPTwF0hNpELLdEDSi76HmsvIjC16MccE-LLVhbNBl_gb7zborph1rZ87DZ7cuJutGFPqj5Oqt7dqxMWgNxVu70gg5vKfTOxymNpye10dkDYjipXytUrG4b427iOHpjwEDWafGu_40GwZwWagg1zx5SEcPsMhbFxJAxzEHnPO5OKRZ_x2mz6ZA6MOTqXWp-JPkAT7BEvX",
    },
    {
      id: 10,
      title: "Snow Crash",
      author: "Neal Stephenson",
      year: "",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtAiLHFNuDpXDXMr-f-UuK2jYmNfEZbM13HTrbVUg0ChY67tip3XjNwP5vP_4FXjuLBAnmXYEmcJN-tAmdzWwU2R5h_kORKhyKidPTt99bCnRnv-cTWpwLUmLSzN4jqk0ZIL4XLjjdiwmp6aNNrFZggjB092F8U-nHPOQG2QMorLCgj5o9CcRizwpsdBZ6aabjcz9GF4t3EtBgtGtVnhDQbprDWjj6L4itbRxatZZTztQzAAwyComeAnp5xPTEIdAlEF9WPpsCwPyU",
    },
  ];

  return (
    <main className="flex-1">
      <h1 className="text-2xl font-bold text-black mb-6">
        Science Fiction Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {books.map((book) => (
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

            <button className="mt-auto w-full py-2 bg-[#d1e1f5] text-black text-sm font-medium rounded-md hover:bg-blue-200 transition-colors">
              Read
            </button>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BooksList;
