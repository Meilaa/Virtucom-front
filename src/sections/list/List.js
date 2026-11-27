import Image from "next/image";
import Link from "next/link";
import styles from "./List.module.css";

const RepairCard = ({
  imageSrc,
  altText,
  repairType,
  subtitle,
  description,
  href,
}) => {
  const inner = (
    <>
      <Image src={imageSrc} alt={altText} width={200} height={200} />
      <div className={styles.cardBody}>
        <div className={styles.text}>
          <h3>{repairType}</h3>
          {subtitle ? <p className={styles.repairText}>{subtitle}</p> : null}
        </div>
        <div className={styles.overlay}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.card}>
        {inner}
      </Link>
    );
  }

  return (
    <article className={styles.card} tabIndex={0}>
      {inner}
    </article>
  );
};

const List = () => {
  return (
    <section className={styles.repair_list} id="repairs" aria-label="Remonto paslaugos">
      <RepairCard
        imageSrc="/computer.svg"
        altText=""
        repairType="Kompiuterių"
        subtitle="Remontas"
        description="Visų tipų kompiuterių remontas, įskaitant stacionarius ir nešiojamus kompiuterius."
      />
      <RepairCard
        imageSrc="/tablet.svg"
        altText=""
        repairType="Planšetinių kompiuterių"
        subtitle="Remontas"
        description="Planšetinių kompiuterių remontas, apimantis įvairių gedimų diagnostiką ir jų šalinimą."
      />
      <RepairCard
        imageSrc="/phone.svg"
        altText=""
        repairType="Telefonų"
        subtitle="Remontas"
        description="Išmaniųjų telefonų remontas, įskaitant ekrano keitimą ir baterijos problemas."
      />
      <RepairCard
        imageSrc="/printer.svg"
        altText=""
        repairType="Spausdintuvų"
        subtitle="Remontas"
        description="Spausdintuvų remontas, užtikrinantis jų efektyvų veikimą ir ilgaamžiškumą. Taip pat prekyba spausdintuvo kasetėmis."
      />
      <RepairCard
        imageSrc="/gps.svg"
        altText=""
        repairType="GPS navigacijų žemėlapių"
        subtitle="Naujinimas"
        description="GPS navigacijų žemėlapių atnaujinimas, užtikrinantis naujausią informaciją Jūsų prietaisuose."
      />
    <RepairCard
      imageSrc="/shop.svg"
      altText=""
      repairType="Prekyba"
      description="Kompiuteriai, TV, telefonai ir IT prekės – atidaryti katalogą."
      href="/parduotuve"
    />
    </section>
  );
};

export default List;
