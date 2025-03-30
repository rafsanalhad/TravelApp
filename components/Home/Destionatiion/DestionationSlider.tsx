"use client";
import { destinationData } from "@/data/data";
import { truncate } from "node:fs/promises";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DestionationSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((item, index) => (
        <div key={item.id} className="m-3">
          <div className="relative h-[400px]">
            {/* Overlay  */}
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            <Image
              src={item.image}
              alt={item.country}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />

          </div>
            <h1 className="text-lg font-semibold mt-4">{item.country}</h1>
            <p className="text-sm text-gray-600">{item.travelers} Travelers</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DestionationSlider;
