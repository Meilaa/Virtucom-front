"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './List.module.css'; 

const RepairCard = ({ imageSrc, altText, repairType, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.hovered : ''}`} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image 
        src={imageSrc} 
        alt={altText} 
        width={200} 
        height={200} 
      />
      <div className={hovered ? styles.hiddenText : styles.text}>
        <h3>{repairType}</h3>
        {repairType === "GPS navigacijų žemėlapių naujinimas" ? (
          <p className={styles.repairText}>Naujinimas</p> 
        ) : (
          repairType !== "Prekyba" && (
            <p className={styles.repairText}>Remontas</p> 
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
      imageSrc="/computer.svg"
      altText="Kompiuterių"
      repairType="Kompiuterių"
      description="Visų tipų kompiuterių remontas, įskaitant stacionarius ir nešiojamuosius kompiuterius."
    />
    <RepairCard
      imageSrc="/tablet.svg"
      altText="Planšetinių kompiuterių"
      repairType="Planšetinių kompiuterių"
      description="Planšetinių kompiuterių remontas, įskaitant visų populiariausių firmų, tokių kaip iPad ir Android."
    />
    <RepairCard
      imageSrc="/phone.svg"
      altText="Telefonų"
      repairType="Telefonų"
      description="Išmaniųjų telefonų remontas, įskaitant ekrano keitimą ir baterijos problemas."
    />
    <RepairCard
      imageSrc="/printer.svg"
      altText="Spausdintuvų"
      repairType="Spausdintuvų"
      description="Spausdintuvų remontas, užtikrinant jų efektyvų veikimą ir ilgaamžiškumą."
    />
    <RepairCard
      imageSrc="/gps.svg"
      altText="GPS navigacijų žemėlapių"
      repairType="GPS navigacijų žemėlapių naujinimas"
      description="GPS navigacijų žemėlapių atnaujinimas, kad jūsų prietaisai visada turėtų naujausią informaciją."
    />
    <RepairCard
      imageSrc="/shop.svg"
      altText="Prekyba"
      repairType="Prekyba"
      description="Prekyba įvairiais technologiniais ir elektroniniais prietaisais."
    />

    </div>
  );
};

export default List;
