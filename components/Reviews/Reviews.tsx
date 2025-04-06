import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex-items-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
            <h1 className="text-2x1 font-semibold text-white">What our customers are saying us</h1>
            <p className="mt-6 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 flex-items-center space-x-6">
                <div>
                    <p className="text-2xl font-bold text-white">4.88</p>
                    <p className="text-white mb-2">Overall Rating</p>
                    <div className="flex-items-center">
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                    </div> 
                </div>
            </div>
        </div>
        <div className="overflow-hidden">
            <ReviewsSlider />
        </div>
      </div>
    </div>
  )
}

export default Reviews
