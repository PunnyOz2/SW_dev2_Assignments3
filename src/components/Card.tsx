import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({ hospitalName, imgSrc }: { hospitalName: string, imgSrc: string }) {

  return (
    <InteractiveCard>
        <div className='w-full h-[70%] relative rounded-t-lg'>
          <Image src={imgSrc} 
          alt={hospitalName} 
          fill={true}
          className='rounded-t-lg object-cover'
          />
        </div>
        <div className='w-full h-[30%] p-[10px] text-black font-semibold text-xl'>
          {hospitalName}
        </div>
    </InteractiveCard>
  )
}