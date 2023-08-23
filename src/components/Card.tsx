"use client";
import styles from './card.module.css'
import Image from 'next/image'
import { useState, ReactNode } from 'react'
interface Props {
  frontContent: ReactNode;
  backContent: ReactNode;
}

export default function Card({ frontContent, backContent }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card}`}
      onClick={handleCardClick}
    >
      <div className={`${styles.face} ${isFlipped ? "flipped" : ""}`} style={{backgroundColor: isFlipped ? "#1cac70" : "#ac1c1c"}}>
        {isFlipped ? backContent : frontContent}
      </div>
    </div>
  )
}