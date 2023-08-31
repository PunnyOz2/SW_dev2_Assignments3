import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='my-[10px] flex ml-20px justify-around content-around flex-wrap'>
        <Card 
          hospitalName="Chulalongkorn Hospital" 
          imgSrc="/img/chula.jpg"
        />
        <Card 
          hospitalName="Rajavithi Hospital" 
          imgSrc="/img/rajavithi.jpg"
        />
        <Card 
          hospitalName="Thammasat University Hospital" 
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  )
}