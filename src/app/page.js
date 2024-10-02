import styles from './page.module.css';  
import Header from '../sections/header/Header';
import List from '../sections/list/List';
import Footer from '../sections/footer/Footer';
import About from '../sections/about/About';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header /> 
        <About />
        <List />
        <Footer />
      </main>
    </div>
  );
}

