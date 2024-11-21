import styles from './Programming.module.css';  
import Image from 'next/image';

function Programming() {
    return (
        <section className={styles.programmingSection}>
            <div className={styles.programmingContainer}>
                <Image src="/programming.jpg" alt="programming" width={550} height={400} />
                <div className={styles.programmingTransmission}></div>
                <div className={styles.programmingRight}>
                    <span>Unikalūs tinklapiai pritaikyti pagal Jūsų poreikius. Galime pasiūlyti sprendimus reprezentaciniams, standartiniams bei profesionaliems tinklapiams.</span>
                </div>
            </div>
        </section>
    );
}

export default Programming;
