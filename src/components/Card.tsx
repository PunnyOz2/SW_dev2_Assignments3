import Image from 'next/image'

export default function Card({ hospitalName, imgSrc }: { hospitalName: string, imgSrc: string }) {

  return (
    <div className='w-1/5 h-[300px] bg-white  rounded-lg shadow-[0px_0px_20px_rgba(0,0,0,1)] transition-shadow hover:shadow-[0px_0px_15px_rgba(128,128,30,1)]'>
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
    </div>
  )
}