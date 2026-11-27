import styles from "./Services.module.css";
import Image from "next/image";

function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.servicesContainer}>
        <Image
          src="/services_sound.jpg"
          alt="Renginių įgarsinimo ir scenos įranga"
          width={550}
          height={400}
        />
        <div className={styles.servicesTransmission} aria-hidden="true" />
        <div className={styles.servicesRight}>
          <h2>Renginių įgarsinimo paslaugos</h2>
          <p>
            Garso, vaizdo sisteminių sprendimų, meninio apšvietimo sistemų
            projektavimas ir diegimas, aptarnavimas
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
