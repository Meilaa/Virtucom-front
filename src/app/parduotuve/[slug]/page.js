import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";
import {
  formatPrice,
  getCategories,
  getProductBySlug,
  loadProducts,
} from "@/lib/acme/catalog";
import styles from "./product.module.css";

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await loadProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return { title: "Prekė nerasta" };
  }
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/parduotuve/${product.slug}` },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel =
    getCategories().find((c) => c.id === product.category)?.label ||
    product.category;

  return (
    <div className={styles.page}>
      <Header />
      <main id="main" className={styles.main}>
        <div className={styles.wrap}>
          <nav className={styles.crumbs} aria-label="Kelias">
            <Link href="/parduotuve">Parduotuvė</Link>
            <span aria-hidden="true">/</span>
            <Link href="/parduotuve">{categoryLabel}</Link>
            <span aria-hidden="true">/</span>
            <span>{product.shortName}</span>
          </nav>

          <article className={styles.layout}>
            <div className={styles.media}>
              <Image
                src={product.image}
                alt=""
                width={320}
                height={320}
                priority
                unoptimized
              />
            </div>
            <div className={styles.info}>
              <p className={styles.vendor}>{product.vendor}</p>
              <h1>{product.name}</h1>
              <p className={styles.code}>Kodas: {product.supplierCode}</p>
              <p className={styles.price}>
                {formatPrice(product.price, product.currency)}
              </p>
              <p
                className={
                  product.inStock ? styles.stockIn : styles.stockOut
                }
              >
                {product.inStock
                  ? `Yra sandėlyje (${product.quantity} vnt.)`
                  : "Šiuo metu nėra sandėlyje"}
              </p>
              <p className={styles.description}>{product.description}</p>

              <div className={styles.actions}>
                <a className={styles.ctaPrimary} href="tel:+37061271545">
                  Teirautis telefonu
                </a>
                <a
                  className={styles.ctaSecondary}
                  href={`mailto:uabgksvirtucom@gmail.com?subject=${encodeURIComponent(
                    `Užklausa: ${product.name} (${product.supplierCode})`
                  )}`}
                >
                  Klausti el. paštu
                </a>
              </div>
              <p className={styles.note}>
                Internetinis mokėjimas dar neįjungtas. Užsakymus ir kainų
                patvirtinimą tvarkome telefonu ar el. paštu.
              </p>
            </div>
          </article>

          <section className={styles.specs} aria-labelledby="specs-heading">
            <h2 id="specs-heading">Specifikacijos</h2>
            <dl className={styles.specList}>
              {product.specs.map((spec) => (
                <div key={spec.label} className={styles.specRow}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
