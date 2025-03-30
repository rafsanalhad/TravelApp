import React from 'react'
import { FaHeart } from 'react-icons/fa'

type Props = {
    hotel : {
        id: number,
        name: string,
        image: string,
        location: string,
        rating: number,
        price: string,
        reviews: string
    }
}
const HotelCard = ({hotel}: Props) => {
  return (
    <div>
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
                <FaHeart className="w-3 h-3" />
            </div>
        </div>
      
    </div>
  )
}

export default HotelCard
