import styles from './Services.module.css';  
import Image from 'next/image';

function Services() {
    return (
        <section className={styles.servicesSection} id='services'>
            <div className={styles.servicesContainer}>
                <Image src="/services_sound.jpg" alt="Services" width={550} height={400} />
                <div className={styles.servicesTransmission}></div>
                <div className={styles.servicesRight}>
                    <span>Renginių įgarsinimo paslaugos</span>
                    <span>Garso, vaizdo sisteminių sprendimų, meninio apšvietimo </span>
                    <span>sistemų projektavimas ir diegimas, aptarnavimas</span>
                </div>
            </div>
        </section>
    );
}

export default Services;
