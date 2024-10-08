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
        width={250} // Use appropriate dimensions
        height={300} // Use appropriate dimensions
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
        imageSrc="/pc_repair.png"
        altText="Kompiuterių"
        repairType="Kompiuterių"
        description="We specialize in repairs for all Apple products, including MacBooks, iMacs, and more."
      />
      <RepairCard
        imageSrc="/tablet_repair.jpg"
        altText="Planšetinių kompiuterių"
        repairType="Planšetinių kompiuterių"
        description="Comprehensive repair services for PCs and desktops. Fast and reliable."
      />
      <RepairCard
        imageSrc="/phone_repair.jpg"
        altText="Telefonų"
        repairType="Telefonų"
        description="Laptop repairs including screen replacement, battery issues, and more."
      />
      <RepairCard
        imageSrc="/printer_repair.jpg"
        altText="Spausdintuvų"
        repairType="Spausdintuvų"
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
      <RepairCard
        imageSrc="/gps.png"
        altText="GPS navigacijų žemėlapių "
        repairType="GPS navigacijų žemėlapių "
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
      <RepairCard
        imageSrc="/selling.jpg"
        altText="Prekyba"
        repairType="Prekyba"
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
    </div>
  );
};

export default List;
