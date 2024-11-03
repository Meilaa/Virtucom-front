import styles from './page.module.css';  
import Header from '../sections/header/Header';
import List from '../sections/list/List';
import Footer from '../sections/footer/Footer';
import About from '../sections/about/About';
import OfficeLocation from '../sections/place/Place';
import Hero from '../sections/hero/Hero';
import Services from '../sections/services/Services';
import Head from 'next/head';

export default function Home() {
  <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header /> 
        <Hero />
        <About />
        <Services />
        <List />
        <OfficeLocation />
        <Footer />
      </main>
    </div>
  );
}

