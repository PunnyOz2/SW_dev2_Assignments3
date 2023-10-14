'use client'
import Card from '@/components/Card'
import Link from 'next/link'
export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson
    return (
        <div className='my-[15px] flex justify-around content-around flex-wrap'>
                {hospitalJsonReady.data.map((hospital:Object)=>{
                    return (
                        <Link key={hospital.id} href={`/hospital/${hospital.id}`} className='w-1/5'>
                            <Card hospitalName={hospital.name} imgSrc={hospital.picture}
                            currentRating={0}
                            />
                        </Link>
                    )
                })}
            </div>
    )
}