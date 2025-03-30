import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import DestinationSlider from './DestionationSlider'

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Exploring Popular Destination"></SectionHeading>

      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider></DestinationSlider>
      </div>
    </div>
  )
}

export default Destination
