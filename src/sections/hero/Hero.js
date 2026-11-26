"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const backgrounds = [
  {
    image: "/hero2.png",
    title: "Kokybiškas kompiuterių remontas",
    subtitle: "Greitas aptarnavimas ir prieinamos kainos",
  },
  {
    image: "/programming.jpg",
    title: "Internetinių svetainių idėjų įgyvendinimas",
    subtitle: "Išskirtinis svetainių kūrimas ir nuolatinė priežiūra",
  },
  {
    image: "/tablet_repair.jpg",
    title: "Naujausi sprendimai Jūsų išmaniesiems įrenginiams",
    subtitle: "Patikimas telefonų ir planšetinių kompiuterių remontas",
  },
  {
    image: "/hero3.webp",
    title: "GPS Navigacijų atnaujinimas",
    subtitle: "Visada naujausi žemėlapiai",
  },
  {
    image: "/hero4.webp",
    title: "Spausdintuvų remontas ir priežiūra",
    subtitle: "Išskirtinė priežiūra Jūsų biuro technikai",
  },
  {
    image: "/hero5.jpg",
    title: "Garso ir vaizdo sistemų diegimas",
    subtitle: "Renginių įgarsinimas ir sistemų projektavimas",
  },
];

const PartsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    backgrounds.forEach(({ image }) => {
      const img = new window.Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = backgrounds[currentIndex];

  return (
    <section
      className={styles.partsSection}
      style={{ backgroundImage: `url(${image})` }}
      aria-live="polite"
    >
      <div className={styles.veil} />
      <div className={styles.textContainer} key={currentIndex}>
        <p className={styles.brandMark}>GKSvirtucom</p>
        <h1>{title}</h1>
        <p className={styles.subtext}>{subtitle}</p>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href="tel:+37061271545">
            Skambinti
          </a>
          <a className={styles.ctaSecondary} href="#services">
            Paslaugos
          </a>
        </div>
      </div>
      <div className={styles.dots} aria-hidden="true">
        {backgrounds.map((_, i) => (
          <span
            key={i}
            className={i === currentIndex ? styles.dotActive : styles.dot}
          />
        ))}
      </div>
    </section>
  );
};

export default PartsSection;
