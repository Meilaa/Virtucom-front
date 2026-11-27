"use client";

import { useMemo, useState, useDeferredValue } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ShopCatalog.module.css";
import { formatPrice } from "@/lib/acme/catalog";

export default function ShopCatalog({ products, categories, counts }) {
  const [category, setCategory] = useState("visi");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");
  const [inStockOnly, setInStockOnly] = useState(false);
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    let list = products.filter((product) => {
      if (category !== "visi" && product.category !== category) return false;
      if (inStockOnly && !product.inStock) return false;
      if (!q) return true;
      const haystack = [
        product.name,
        product.shortName,
        product.vendor,
        product.supplierCode,
        product.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "vendor") return a.vendor.localeCompare(b.vendor, "lt");
      return a.name.localeCompare(b.name, "lt");
    });
    return list;
  }, [products, category, deferredQuery, sort, inStockOnly]);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} aria-label="Kategorijos">
        <h2 className={styles.sideTitle}>Kategorijos</h2>
        <ul className={styles.categoryList}>
          {categories.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={
                  category === item.id ? styles.categoryActive : styles.category
                }
                onClick={() => setCategory(item.id)}
              >
                <span>{item.label}</span>
                <span className={styles.count}>{counts[item.id] || 0}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <label className={styles.searchLabel}>
            <span className={styles.srOnly}>Ieškoti prekių</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ieškoti pagal pavadinimą, gamintoją, kodą…"
              className={styles.search}
            />
          </label>
          <div className={styles.toolbarRight}>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              Tik sandėlyje
            </label>
            <label className={styles.sortLabel}>
              <span className={styles.srOnly}>Rikiuoti</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={styles.sort}
              >
                <option value="name">Pagal pavadinimą</option>
                <option value="price-asc">Kaina ↑</option>
                <option value="price-desc">Kaina ↓</option>
                <option value="vendor">Gamintojas</option>
              </select>
            </label>
          </div>
        </div>

        <p className={styles.resultMeta}>
          Rasta <strong>{visible.length}</strong> prekių
          {category !== "visi"
            ? ` · ${categories.find((c) => c.id === category)?.label}`
            : ""}
        </p>

        {visible.length === 0 ? (
          <div className={styles.empty}>
            <p>Pagal pasirinktus filtrus prekių nerasta.</p>
            <button
              type="button"
              className={styles.reset}
              onClick={() => {
                setCategory("visi");
                setQuery("");
                setInStockOnly(false);
              }}
            >
              Išvalyti filtrus
            </button>
          </div>
        ) : (
          <ul className={styles.grid}>
            {visible.map((product) => (
              <li key={product.supplierCode}>
                <Link
                  href={`/parduotuve/${product.slug}`}
                  className={styles.card}
                >
                  <div className={styles.media}>
                    <Image
                      src={product.image}
                      alt=""
                      width={160}
                      height={160}
                      unoptimized
                    />
                    {!product.inStock ? (
                      <span className={styles.badgeOut}>Nėra sandėlyje</span>
                    ) : (
                      <span className={styles.badgeIn}>Yra sandėlyje</span>
                    )}
                  </div>
                  <div className={styles.body}>
                    <p className={styles.vendor}>{product.vendor}</p>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.code}>{product.supplierCode}</p>
                    <p className={styles.price}>
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
