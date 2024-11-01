"use client";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

  const backgrounds = [ 
    {
      image: '/hero1.webp', 
      title: 'Kokybiškas kompiuterių remontas',
      subtitle: 'Greitas aptarnavimas ir prieinamos kainos',
      description: 'Remontuojame visų tipų kompiuterius, naudojame tik kokybiškas dalis.',
    },
    {
      image: '/hero2.png', 
      title: 'Naujausi sprendimai Jūsų išmaniesiems įrenginiams',
      subtitle: 'Patikimas išmaniųjų telefonų ir planšetinių kompiuterių remontas',
      description: 'Remontas su garantija.',
    },
    {
      image: '/hero3.webp',
      title: 'GPS Navigacijų atnaujinimas',
      subtitle: 'Visada naujausi žemėlapiai',
      description: 'Atnaujiname Jūsų GPS navigacijas, kad keliautumėte tiksliai, greitai ir saugiai.',
    },
    {
      image: '/hero4.webp',
      title: 'Spausdintuvų remontas ir priežiūra',
      subtitle: 'Išskirtinė priežiūra Jūsų biuro technikai',
      description: 'Teikiame spausdintuvų remonto paslaugas ir eksploatacines medžiagas.',
    },
    {
      image: '/hero5.jpg',
      title: 'Garso ir vaizdo sistemų diegimas',
      subtitle: 'Renginių įgarsinimas ir sistemų projektavimas',
      description: 'Projektuojame ir diegiame garso, vaizdo ir apšvietimo sistemas Jūsų šventėms bei įvairiems renginiams.',
    }
  ];
  


const PartsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000); // Change every 7 seconds

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
