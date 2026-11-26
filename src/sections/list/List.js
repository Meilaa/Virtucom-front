import Image from 'next/image';
import styles from './List.module.css';

const RepairCard = ({ imageSrc, altText, repairType, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <Image 
        src={imageSrc} 
        alt={altText} 
        width={200} 
        height={200} 
      />
      <div className={styles.text}>
        <h3>{repairType}</h3>
        {subtitle ? <p className={styles.repairText}>{subtitle}</p> : null}
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
      subtitle="Remontas"
      description="Visų tipų kompiuterių remontas, įskaitant stacionarius ir nešiojamus kompiuterius."
    />
    <RepairCard
      imageSrc="/tablet.svg"
      altText="Planšetinių kompiuterių"
      repairType="Planšetinių kompiuterių"
      subtitle="Remontas"
      description="Planšetinių kompiuterių remontas, apimantis įvairių gedimų diagnostiką ir jų šalinimą."
    />
    <RepairCard
      imageSrc="/phone.svg"
      altText="Telefonų"
      repairType="Telefonų"
      subtitle="Remontas"
      description="Išmaniųjų telefonų remontas, įskaitant ekrano keitimą ir baterijos problemas."
    />
    <RepairCard
      imageSrc="/printer.svg"
      altText="Spausdintuvų"
      repairType="Spausdintuvų"
      subtitle="Remontas"
      description="Spausdintuvų remontas, užtikrinantis jų efektyvų veikimą ir ilgaamžiškumą. Taip pat prekyba spausdintuvo kasetėmis."
    />
    <RepairCard
      imageSrc="/gps.svg"
      altText="GPS navigacijų žemėlapių"
      repairType="GPS navigacijų žemėlapių"
      subtitle="Naujinimas"
      description="GPS navigacijų žemėlapių atnaujinimas, užtikrinantis naujausią informaciją Jūsų prietaisuose."
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
