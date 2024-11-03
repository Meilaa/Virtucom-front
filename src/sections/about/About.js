import styles from './About.module.css';  
import Image from 'next/image';

function About() {
    return (
        <section className={styles.aboutSection} id='about'>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutLeft}>
                    <h1>Apie <span className={styles.highlight}>Mus</span></h1>
                    <p>UAB „GKSvirtucom“ įsteigėme jau 1995 metais, todėl siūlome aukščiausios kokybės klientų aptarnavimą ir profesionalias remonto paslaugas visai Jūsų technologinei ir muzikos įrangai. Nesvarbu, ar tai kompiuteris, išmanusis įrenginys, muzikos instrumentas – mes pasirūpinsime greitu ir patikimu remontu, kad Jūsų įranga vėl veiktų nepriekaištingai. Teikiame paslaugas tiek namų vartotojams, tiek verslui, todėl esame patikimas partneris bet kokio tipo technikai.</p>
                </div>
                <div className={styles.aboutRight}>
                <ul className={styles.checkList}>
                        <li className={styles.checkListItem}>Visų tipų kompiuterių remontas</li>
                        <li className={styles.checkListItem}>Išmaniųjų įrenginių remontas</li>
                        <li className={styles.checkListItem}>Spausdintuvų remontas ir priežiūra</li>
                        <li className={styles.checkListItem}>Muzikos instrumentų ir jų priedų pardavimas bei remontas</li>
                        <li className={styles.checkListItem}>GPS žemėlapių atnaujinimas</li>
                        <li className={styles.checkListItem}>Visų tipų įrenginių baterijų atnaujinimas</li>
                        <li className={styles.checkListItem}>Aukšto techninio lygio garso, vaizdo ir šviesos įrangos prekyba</li>
                        <li className={styles.checkListItem}>Internetinių svetainių kūrimas</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
