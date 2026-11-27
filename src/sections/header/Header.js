"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const handleSmoothScroll = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("/#") && !href?.startsWith("#")) return;

    if (onHome) {
      event.preventDefault();
      const targetId = href.includes("#") ? `#${href.split("#")[1]}` : href;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className={styles.headerSection}>
      <a href="#main" className={styles.skipLink}>
        Eiti prie turinio
      </a>
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <Link href="/" className={styles.logoLink} aria-label="GKSvirtucom pradžia">
            <Image
              className={styles.logo}
              src="/logo.webp"
              alt="GKSvirtucom"
              width={400}
              height={100}
              priority
            />
          </Link>
          <div className={styles.topHeaderSecond}>
            <svg
              fill="#0299DC"
              viewBox="0 0 395.71 395.71"
              className={styles.svgIcon}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
            </svg>
            <a
              href="https://www.google.com/maps?q=S.+Daukanto+31,+Vilkaviškis"
              target="_blank"
              rel="noopener noreferrer"
            >
              S. Daukanto g. 31, Vilkaviškis
            </a>
          </div>
          <div className={styles.topHeaderThird}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={styles.svgIcon}
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#0299DC"
              />
              <path
                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                fill="#0299DC"
              />
            </svg>
            <span>I–V 9–18, VI 9–13</span>
          </div>
          <div className={styles.topHeaderLast}>
            <a href="tel:+37061271545">
              <svg
                viewBox="0 -5 25 25"
                fill="#0299DC"
                width="25"
                height="25"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                  stroke="#0299DC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +370 612 71545
            </a>
            <a href="mailto:uabgksvirtucom@gmail.com">
              uabgksvirtucom@gmail.com
            </a>
          </div>
        </div>
        <nav className={styles.headerBottom} aria-label="Pagrindinė navigacija">
          <Link href="/#about" className={styles.link} onClick={handleSmoothScroll}>
            Apie
          </Link>
          <Link
            href="/#services"
            className={styles.link}
            onClick={handleSmoothScroll}
          >
            Paslaugos
          </Link>
          <Link href="/#price" className={styles.link} onClick={handleSmoothScroll}>
            Kainos
          </Link>
          <Link
            href="/parduotuve"
            className={
              pathname?.startsWith("/parduotuve")
                ? `${styles.link} ${styles.linkActive}`
                : styles.link
            }
          >
            Parduotuvė
          </Link>
          <Link
            href="/#footer"
            className={styles.link}
            onClick={handleSmoothScroll}
          >
            Kontaktai
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
