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
      <div className={styles.text}>
        <h3>{repairType}</h3>
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
        altText="Kompiuterių remontas"
        repairType="Kompiuterių remontas"
        description="We specialize in repairs for all Apple products, including MacBooks, iMacs, and more."
      />
      <RepairCard
        imageSrc="/tablet_repair.jpg"
        altText="PC & Computer Repair"
        repairType="PC & Computer Repair"
        description="Comprehensive repair services for PCs and desktops. Fast and reliable."
      />
      <RepairCard
        imageSrc="/phone_repair.jpg"
        altText="Laptop Repair"
        repairType="Laptop Repair"
        description="Laptop repairs including screen replacement, battery issues, and more."
      />
      <RepairCard
        imageSrc="/printer_repair.jpg"
        altText="Tablet Repair"
        repairType="Tablet Repair"
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
       <RepairCard
        imageSrc="/gps.png"
        altText="Tablet Repair"
        repairType="Tablet Repair"
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
       <RepairCard
        imageSrc="/selling.jpg"
        altText="Tablet Repair"
        repairType="Tablet Repair"
        description="Tablet repairs for all major brands, including iPads and Android tablets."
      />
    </div>
  );
};

export default List;
