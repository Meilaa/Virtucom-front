import styles from './page.module.css';  
import Header from '../sections/header/Header';
import List from '../sections/list/List';
import Footer from '../sections/footer/Footer';
import About from '../sections/about/About';
import OfficeLocation from '../sections/place/Place';
import Hero from '../sections/hero/Hero';
import Services from '../sections/services/Services';
import Prices from '../sections/prices/Prices';
import Programming from '../sections/programming/Programming';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header /> 
        <Hero />
        <About />
        <Services />
        <List />
        <Programming />
        <Prices />
        <OfficeLocation />
        <Footer />
      </main>
    </div>
  );
}

