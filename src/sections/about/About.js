import styles from './About.module.css';  
import Image from 'next/image';

function About() {
    return (
        <section className={styles.aboutSection} id='about'>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutLeft}>
                    <h1>Apie <span className={styles.highlight}>Mus</span></h1>
                    <p>„UAB GKSvirtucom“ įsteigta 1995 metais. Įmonė įsipareigoja teikti aukščiausios kokybės klientų aptarnavimą ir profesionalias remonto paslaugas visiems Jūsų technologijų ir muzikos įrangos poreikiams. Nesvarbu, ar tai kompiuteris, išmanusis įrenginys, ar muzikos instrumentas – mes pasirūpinsime greitu ir patikimu remontu, kad Jūsų įranga vėl veiktų nepriekaištingai. Teikiame paslaugas tiek namų vartotojams, tiek verslui, todėl esame patikimas partneris bet kokio tipo technikai.</p>
                </div>
                <div className={styles.aboutRight}>
                <ul className={styles.checkList}>
                        <li className={styles.checkListItem}>Visų tipų kompiuterių kompiuterių remontas</li>
                        <li className={styles.checkListItem}>Išmaniųjų įrenginių ir planšetinių kompiuterių remontas</li>
                        <li className={styles.checkListItem}>Spausdintuvų remontas ir priežiūra</li>
                        <li className={styles.checkListItem}>Muzikos instrumentų remontas ir jų priedų pardavimas</li>
                        <li className={styles.checkListItem}>GPS žemėlapių atnaujinimas</li>
                        <li className={styles.checkListItem}>Įrenginių baterijų atnaujinimas</li>
                        <li className={styles.checkListItem}>Aukšto techninio lygio garso, vaizdo ir šviesos produktų prekyba</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
