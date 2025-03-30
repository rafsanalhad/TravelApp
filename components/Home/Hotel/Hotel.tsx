import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import HotelCard from './HotelCard'
const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Recommended Hotels"></SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData.map((data)=> (
            <div key={data.id}>
                <HotelCard hotel={data}></HotelCard>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Hotel
