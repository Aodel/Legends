import React from "react";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

function DetailPage() {
  return (
    <>
      <Header />
      <Search />
      <Card />
      <div>DetailPage</div>
      <Footer />
    </>
  );
}

export default DetailPage;
