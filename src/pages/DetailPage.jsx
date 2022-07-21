import React from "react";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import ComicCard from "../components/comicCard/ComicCard";
import Footer from "../components/footer/Footer";

function DetailPage() {
  return (
    <>
      <Header />
      <Search />
      <ComicCard />
      <div>DetailPage</div>
      <Footer />
    </>
  );
}

export default DetailPage;
