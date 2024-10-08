"use client";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const backgrounds = [
  {
    image: '/hero1.webp', 
    title: 'Original Parts Only',
    subtitle: 'Fast, Affordable Prices',
    description: 'We only carry genuine OEM replacement parts',
  },
  {
    image: '/hero2.png', 
    title: 'New Collection Available',
    subtitle: 'Exclusive Deals on New Products',
    description: 'Get the latest and greatest parts',
  },
];

const PartsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 9000); // Change every 7 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { image, title, subtitle, description } = backgrounds[currentIndex];

  return (
    <div
      className={styles.partsSection}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className={styles.subtext}>{description}</p>
      </div>
    </div>
  );
};

export default PartsSection;
