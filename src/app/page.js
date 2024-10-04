import styles from './page.module.css';  
import Header from '../sections/header/Header';
import List from '../sections/list/List';
import Footer from '../sections/footer/Footer';
import About from '../sections/about/About';
import OfficeLocation from '../sections/place/Place';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header /> 
        <About />
        <List />
        <OfficeLocation />
        <Footer />
      </main>
    </div>
  );
}

