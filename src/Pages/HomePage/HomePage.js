/** @format */

import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ListMovie from "./ListMovie/ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import CarouselHomepage from "./Carousel/CarouselHomePage";

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <CarouselHomepage />
      <ListMovie />
      {/* <TabsMovie /> */}
      <Footer />
    </div>
  );
}
