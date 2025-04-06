import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Travel News For You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-center mt-20">
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Bangladesh"
            date="10 November 2024"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Australia"
            date="11 November 2024"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Vietnam"
            date="16 November 2024"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Swiss"
            date="8 November 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
