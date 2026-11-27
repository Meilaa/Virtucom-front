"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const backgrounds = [
  {
    image: "/hero2.webp",
    title: "Kokybiškas kompiuterių remontas",
    subtitle: "Greitas aptarnavimas ir prieinamos kainos",
  },
  {
    image: "/programming-hero.webp",
    title: "Internetinių svetainių idėjų įgyvendinimas",
    subtitle: "Išskirtinis svetainių kūrimas ir nuolatinė priežiūra",
  },
  {
    image: "/tablet-hero.webp",
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
    image: "/hero5.webp",
    title: "Garso ir vaizdo sistemų diegimas",
    subtitle: "Renginių įgarsinimas ir sistemų projektavimas",
  },
];

const PartsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const next = backgrounds[(currentIndex + 1) % backgrounds.length];
    const img = new window.Image();
    img.src = next.image;
  }, [currentIndex]);

  const { image, title, subtitle } = backgrounds[currentIndex];

  return (
    <section
      className={styles.partsSection}
      style={{ backgroundImage: `url(${image})` }}
      aria-roledescription="carousel"
      aria-label="Paslaugų pristatymas"
    >
      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.textContainer} key={currentIndex} aria-live="polite">
        <h1 className={styles.brandMark}>GKSvirtucom</h1>
        <p className={styles.slideTitle}>{title}</p>
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
      <div className={styles.dots} role="tablist" aria-label="Skaidrės">
        {backgrounds.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Rodyti: ${slide.title}`}
            className={i === currentIndex ? styles.dotActive : styles.dot}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default PartsSection;
