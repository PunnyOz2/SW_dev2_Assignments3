import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src="/img/boosterdose.jpg" alt="Booster Dose" layout="fill" objectFit="cover" priority/>
      <div className={styles.bannerText}>
        <h1>Covid-19 Booster Dose</h1>
        <h2>Get your booster dose today!</h2>
      </div>
    </div>
  )
}