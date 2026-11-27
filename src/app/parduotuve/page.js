import Header from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";
import ShopCatalog from "@/components/shop/ShopCatalog";
import {
  getCategories,
  getCategoryCounts,
  loadProducts,
} from "@/lib/acme/catalog";
import styles from "./shop.module.css";

export const metadata = {
  title: "Parduotuvė",
  description:
    "Kompiuteriai, televizoriai, telefonai ir IT prekės Vilkaviškyje. Katalogas pagal ACME/ACC distribucijos asortimentą – teiraukitės telefonu.",
  alternates: {
    canonical: "/parduotuve",
  },
};

export const revalidate = 3600;

export default async function ShopPage() {
  const [products, categories, counts] = await Promise.all([
    loadProducts(),
    Promise.resolve(getCategories()),
    getCategoryCounts(),
  ]);

  return (
    <div className={styles.page}>
      <Header />
      <main id="main" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Internetinė parduotuvė</p>
            <h1>IT prekių katalogas</h1>
            <p className={styles.lead}>
              Kompiuteriai, TV, telefonai ir priedai. Šiuo metu rodomas ACME tipo
              katalogas be mokėjimo – dėl užsakymo skambinkite arba rašykite.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="tel:+37061271545">
                Skambinti
              </a>
              <a className={styles.ctaSecondary} href="mailto:uabgksvirtucom@gmail.com">
                Rašyti el. laišką
              </a>
            </div>
          </div>
        </section>
        <ShopCatalog
          products={products}
          categories={categories}
          counts={counts}
        />
      </main>
      <Footer />
    </div>
  );
}
