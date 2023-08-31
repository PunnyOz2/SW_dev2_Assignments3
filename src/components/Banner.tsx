import Image from 'next/image'

export default function Banner() {
  return (
    <div className='p-5 m-0 w-[100vw] h-[80vh] relative 
    after:content-[""] after:inset-0 after:absolute after:shadow-[inset_0px_0px_20px_7px_black] text-white 
    '>
      <Image src="/img/boosterdose.jpg" alt="Booster Dose" layout="fill" objectFit="cover" priority/>
      <div className='relative top-[100px] z-20 text-center'>
        <h1 className='text-5xl font-bold'>Covid-19 Booster Dose</h1>
        <h2 className='text-3xl font-light'>Get your booster dose today!</h2>
      </div>
    </div>
  )
}