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

export const metadata = {
  title: "UAB GKSvirtucom",
  description:
    "Siūlome aukščiausios kokybės klientų aptarnavimą ir profesionalias remonto paslaugas visai Jūsų technologinei ir muzikos įrangai. Nesvarbu, ar tai kompiuteris, išmanusis įrenginys, muzikos instrumentas – mes pasirūpinsime greitu ir patikimu remontu, kad Jūsų įranga vėl veiktų nepriekaištingai. Teikiame paslaugas tiek namų vartotojams, tiek verslui, todėl esame patikimas partneris bet kokio tipo technikai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
