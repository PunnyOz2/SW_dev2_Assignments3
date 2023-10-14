import Image from 'next/image'
import getHospital from '@/libs/getHospital'
export default async function HospitalDetailPage({params}: {params: {hid:string}}){
    const hospitalDetail = await getHospital(params.hid)
    // const mockHospital = new Map()
    // mockHospital.set("001",{name:'Chulalongkorn Hospital', imgSrc:'/img/chula.jpg'})
    // mockHospital.set("002",{name:'Rajavithi Hospital', imgSrc:'/img/rajavithi.jpg'})
    // mockHospital.set("003",{name:'Thammasat University Hospital', imgSrc:'/img/thammasat.jpg'})
    return (
        <main className='text-center p-5'>
            {/* <h1 className='text-lg font-medium'>Hospital ID {hospitalDetail.data.name}</h1> */}
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                    alt='Hospital Picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black shadow-xl shadow-gray-400'/>
                <div className='text-left'>
                    <h1 className='text-2xl mx-5 font-bold'>{hospitalDetail.data.name}</h1>
                    <h2 className='pl-2 text-lg mx-5 font-medium'>{hospitalDetail.data.address}</h2>
                    <h2 className='pl-2 text-lg mx-5 font-medium'>{hospitalDetail.data.district}</h2>
                    <h2 className='pl-2 text-lg mx-5 font-medium'>{hospitalDetail.data.province}</h2>
                    <h2 className='pl-2 text-lg mx-5 font-medium'>{hospitalDetail.data.postalcode}</h2>
                    <h2 className='pl-2 text-lg mx-5 font-medium'>{hospitalDetail.data.tel}</h2>
                </div>
            </div>
        </main>
    )
}