import styles from './Place.module.css';  
import Image from 'next/image';

function Place() {
    return (
        <div className={styles.placeSection}>
            <div className={styles.placeContainer}>
                <div className={styles.placeLeft}>
                    <h3>Darbo laikas</h3>
                    <span>Pirmadienis 9.00-18.00</span>
                    <span>Antradienis 9.00-18.00</span>
                    <span>Trečiadienis 9.00-18.00</span>
                    <span>Ketvirtadienis 9.00-18.00</span>
                    <span>Penktadienis 9.00-18.00</span>
                    <span>Šeštadienis 9.00-13.00</span>
                    <span>Sekmadienis NEDIRBAME</span>
                    
                </div> 
               <div className={styles.placeRight}>
                    <Image src="/location.png" alt="Logo" width={550} height={400} />
                </div> 
            </div>
        </div>
    );
}

export default Place;
