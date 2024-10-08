import styles from './Services.module.css';  
import Image from 'next/image';

function Services() {
    return (
        <div className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                <Image src="/services_sound.jpg" alt="Services" width={550} height={400} />
                <div className={styles.servicesRight}>
                    <span>Renginių įgarsinimo paslaugos</span>
                    <span>Garso, vaizdo sisteminių sprendimų, meninio apšvietimo </span>
                    <span>sistemų projektavimas ir diegimas, aptarnavimas</span>
                </div>
            </div>
        </div>
    );
}

export default Services;
