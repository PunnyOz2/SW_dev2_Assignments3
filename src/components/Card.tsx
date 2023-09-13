import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState, useEffect } from 'react'
import { Divider } from '@mui/material'
export default function Card({ hospitalName, imgSrc, onRating, currentRating }: { hospitalName: string, imgSrc: string, onRating: Function, currentRating: number }) {
  const [rating, setRating] = useState<number>(currentRating)
  useEffect(() => {
    setRating(currentRating)
  }, [currentRating])
  return (
    <InteractiveCard>
        <div className='w-full h-[60%] relative rounded-t-lg'>
          <Image src={imgSrc} 
          alt={hospitalName} 
          fill={true}
          className='rounded-t-lg object-cover'
          />
        </div>
        <Rating name="simple-controlled" value={rating} onChange={(e, newvalue) => {e.stopPropagation(), onRating(hospitalName, newvalue)}} 
        className='w-full p-[5px]' size="large"/>
        <Divider light/>
        <div className='w-full h-[30%] py-[5px] pl-[10px] text-black font-semibold text-xl'>
          {hospitalName}
        </div>
        {/* <button onClick={()=>console.log(currentRating)} className='bg-black h-5 w-5 top-[-40px] relative'/> */}
    </InteractiveCard>
  )
}