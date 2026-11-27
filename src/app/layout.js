import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://virtucom.lt";
const description =
  "Kompiuterių, telefonų ir technikos remontas Vilkaviškyje. Diagnostika, GPS žemėlapių atnaujinimas, spausdintuvai ir internetinių svetainių kūrimas.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GKSvirtucom | Kompiuterių remontas Vilkaviškyje",
    template: "%s | GKSvirtucom",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: siteUrl,
    siteName: "GKSvirtucom",
    title: "GKSvirtucom | Kompiuterių remontas Vilkaviškyje",
    description,
    images: [
      {
        url: "/hero2.webp",
        width: 1920,
        height: 1080,
        alt: "GKSvirtucom – kompiuterių remontas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GKSvirtucom | Kompiuterių remontas Vilkaviškyje",
    description,
    images: ["/hero2.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "UAB GKSvirtucom",
  url: siteUrl,
  telephone: "+37061271545",
  email: "uabgksvirtucom@gmail.com",
  image: `${siteUrl}/hero2.webp`,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "S. Daukanto g. 31",
    addressLocality: "Vilkaviškis",
    addressCountry: "LT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
