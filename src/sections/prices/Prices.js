import styles from "./Prices.module.css";

function Prices() {
  return (
    <section className={styles.pricesSection} id="price">
      <div className={styles.pricesContainer}>
        <div className={styles.pricesLeft}>
          <h2>
            <span className={styles.highlight}>Diagnostikos </span>
            kainos (su PVM)
          </h2>
          <ul className={styles.checkList}>
            <li className={styles.checkListItem}>Kompiuterių – 29,99 Eur</li>
            <li className={styles.checkListItem}>
              Telefono / planšetinio kompiuterio – 22,99 Eur
            </li>
            <li className={styles.checkListItem}>Televizorių – 41,99 Eur</li>
            <li className={styles.checkListItem}>Robotų siurblių – 28,99 Eur</li>
            <li className={styles.checkListItem}>
              Smulkios buitinės technikos – 29 Eur
            </li>
            <li className={styles.checkListItem}>Paspirtukų – 29 Eur</li>
            <li className={styles.checkListItem}>
              Buitinių spausdintuvų – 29 Eur
            </li>
            <li className={styles.checkListItem}>
              Pramoninių spausdintuvų – 39 Eur
            </li>
            <li className={styles.checkListItem}>
              Plokštės, kiti komponentai – 24 Eur
            </li>
          </ul>
        </div>
        <div className={styles.pricesRight}>
          <h2>
            <span className={styles.highlight}>Remonto </span>
            darbų kaina (su PVM)
          </h2>
          <ul className={styles.checkList}>
            <li className={styles.checkListItem}>
              Kompiuterio remontas nuo 30 Eur
            </li>
            <li className={styles.checkListItem}>
              Telefono / planšetinio kompiuterio remontas nuo 29 Eur
            </li>
            <li className={styles.checkListItem}>
              Robotų siurblių remontas nuo 38 Eur
            </li>
            <li className={styles.checkListItem}>
              Smulkios buitinės technikos remontas nuo 29 Eur
            </li>
            <li className={styles.checkListItem}>
              Televizorių remontas nuo 48 Eur
            </li>
            <li className={styles.checkListItem}>
              Paspirtukų remontas nuo 38 Eur
            </li>
            <li className={styles.checkListItem}>
              Buitinių spausdintuvų remontas nuo 37 Eur
            </li>
            <li className={styles.checkListItem}>
              Pramoninių spausdintuvų remontas nuo 43 Eur
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Prices;
