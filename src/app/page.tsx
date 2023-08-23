import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div style={{margin: "5px 20px", textAlign:"center"}}>
        <h1>COVID-19 Vaccine Myths vs. Facts</h1>
        <h2>Click to reveal the truth!</h2>
      </div>
      <div style={{display: "flex", marginLeft: "20px", justifyContent:"space-around", alignContent:"space-around", flexWrap:"wrap"}}>
        <Card 
          frontContent={<h3>MYTH: Getting a COVID-19 vaccine will cause me to test positive on a viral test.</h3>}
          backContent={<h3>FACT: None of the authorized and recommended COVID-19 vaccines can cause you to test positive on viral tests, which are used to see if you have a current infection.​</h3>}
        />
        <Card 
          frontContent={<h3>MYTH: The ingredients in COVID-19 vaccines are dangerous.</h3>}
          backContent={<h3>FACT: Nearly all the ingredients in COVID-19 vaccines are also ingredients in many foods – fats, sugars, and salts.</h3>}
        />
        <Card 
          frontContent={<h3>MYTH: The natural immunity I get from being sick with COVID-19 is better than the immunity I get from COVID-19 vaccination.</h3>}
          backContent={<h3>FACT: Getting a COVID-19 vaccination is a safer and more dependable way to build immunity to COVID-19 than getting sick with COVID-19.</h3>}
        />
      </div>
    </main>
  )
}
