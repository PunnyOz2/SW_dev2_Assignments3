'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Banner() {
  const covers = ['/img/b1.jpg', '/img/b2.jpg', '/img/b3.jpg', '/img/b4.jpg'];
  const [index, setIndex] = useState(0);
  return (
    <div className='p-5 m-0 w-[100vw] h-[80vh] relative 
    after:content-[""] after:inset-0 after:absolute after:shadow-[inset_0px_0px_20px_7px_black] text-white 
    ' onClick={() => setIndex(index+1)}>
      <Image src={covers[index%4]} alt="Booster Dose" layout="fill" objectFit="cover" priority/>
      <div className='relative top-[100px] z-20 text-center select-none'>
        <h1 className='text-5xl font-bold'>Covid-19 Booster Dose</h1>
        <h2 className='text-3xl font-light'>Get your booster dose today!</h2>
      </div>
    </div>
  )
}