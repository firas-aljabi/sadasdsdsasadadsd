import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";
import Categories from "./Categories";

function HomePage() {
  return (
   
    <div className=" mx-auto min-h-screen max-w-5xl py-6 bg-[#2F2424]">
      <Header />
      <TopOffers />
      <Categories />
    </div>
  );
}

export default HomePage;
