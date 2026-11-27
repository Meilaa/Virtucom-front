import styles from "./Programming.module.css";
import Image from "next/image";

function Programming() {
  return (
    <section className={styles.programmingSection} aria-labelledby="programming-heading">
      <div className={styles.programmingContainer}>
        <Image
          src="/programming.jpg"
          alt="Internetinių svetainių kūrimas"
          width={550}
          height={400}
        />
        <div className={styles.programmingTransmission} aria-hidden="true" />
        <div className={styles.programmingRight}>
          <h2 id="programming-heading">Internetinių svetainių kūrimas</h2>
          <p>
            Unikalūs tinklapiai, pritaikyti pagal Jūsų poreikius. Galime
            pasiūlyti sprendimus reprezentaciniams, standartiniams bei
            profesionaliems tinklapiams.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programming;
