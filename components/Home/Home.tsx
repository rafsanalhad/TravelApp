import React from "react";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import Destination from "./Destionatiion/Destination";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "@/components/Reviews/Reviews";
import News from "./News/News";
import NewsLetter from "./News/NewsLetter";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetter />
    </div>
  );
};

export default Home;
