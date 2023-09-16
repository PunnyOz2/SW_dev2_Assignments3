import Image from 'next/image'
export default function HospitalDetailPage({params}: {params: {hid:string}}){
    const mockHospital = new Map()
    mockHospital.set("001",{name:'Chulalongkorn Hospital', imgSrc:'/img/chula.jpg'})
    mockHospital.set("002",{name:'Rajavithi Hospital', imgSrc:'/img/rajavithi.jpg'})
    mockHospital.set("003",{name:'Thammasat University Hospital', imgSrc:'/img/thammasat.jpg'})
    return (
        <main className='text-center p-5'>
            <h1 className='text-lg font-medium'>Hospital ID {params.hid}</h1>
            <div className="flex flex-row my-5">
                <Image src={(mockHospital.get(params.hid)).imgSrc}
                    alt='Hospital Picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black'/>
                <div className='text-2xl mx-5 font-bold'>{(mockHospital.get(params.hid)).name}</div>
            </div>
        </main>
    )
}