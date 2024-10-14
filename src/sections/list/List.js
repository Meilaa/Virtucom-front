"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './List.module.css'; // Import your CSS module for styles

const RepairCard = ({ imageSrc, altText, repairType, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.hovered : ''}`} // Using CSS module for styling
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image 
        src={imageSrc} 
        alt={altText} 
        layout="responsive" 
        width={200} // Use appropriate dimensions
        height={200} // Use appropriate dimensions
      />
      <div className={hovered ? styles.hiddenText : styles.text}>
        <h3>{repairType}</h3>
        {/* Conditional rendering for "Remontas" and "Naujinimas" */}
        {repairType === "GPS navigacijų žemėlapių naujinimas" ? (
          <p className={styles.repairText}>Naujinimas</p> // Show "Naujinimas" for the fifth card
        ) : (
          repairType !== "Prekyba" && (
            <p className={styles.repairText}>Remontas</p> // Show "Remontas" for the first four cards
          )
        )}
      </div>
      <div className={styles.overlay}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const List = () => {
  return (
    <div className={styles.repair_list}>
     <RepairCard
      imageSrc="/computer.webp"
      altText="Kompiuterių"
      repairType="Kompiuterių"
      description="Visų tipų kompiuterių remontas, įskaitant stacionarius ir nešiojamuosius kompiuterius."
    />
    <RepairCard
      imageSrc="/ipad.png"
      altText="Planšetinių kompiuterių"
      repairType="Planšetinių kompiuterių"
      description="Planšetinių kompiuterių remontas, įskaitant visų populiariausių firmų, tokių kaip iPad ir Android."
    />
    <RepairCard
      imageSrc="/phone_repair.jpg"
      altText="Telefonų"
      repairType="Telefonų"
      description="Išmaniųjų telefonų remontas, įskaitant ekrano keitimą ir baterijos problemas."
    />
    <RepairCard
      imageSrc="/printer_repair.jpg"
      altText="Spausdintuvų"
      repairType="Spausdintuvų"
      description="Spausdintuvų remontas, užtikrinant jų efektyvų veikimą ir ilgaamžiškumą."
    />
    <RepairCard
      imageSrc="/gps.png"
      altText="GPS navigacijų žemėlapių"
      repairType="GPS navigacijų žemėlapių naujinimas"
      description="GPS navigacijų žemėlapių atnaujinimas, kad jūsų prietaisai visada turėtų naujausią informaciją."
    />
    <RepairCard
      imageSrc="/selling.jpg"
      altText="Prekyba"
      repairType="Prekyba"
      description="Prekyba įvairiais technologiniais ir elektroniniais prietaisais."
    />

    </div>
  );
};

export default List;
