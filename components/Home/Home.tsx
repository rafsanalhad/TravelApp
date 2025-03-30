import React from "react";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import Destination from "./Destionatiion/Destination";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      {/* <SectionHeading heading="Explore Popular Hotels"></SectionHeading> */}
      {/* <HotelSlider></HotelSlider> */}
    </div>
  );
};

export default Home;
