import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UAB GKSvirtucom",
  description: "Siūlome aukščiausios kokybės klientų aptarnavimą ir profesionalias remonto paslaugas visai Jūsų technologinei ir muzikos įrangai. Nesvarbu, ar tai kompiuteris, išmanusis įrenginys, muzikos instrumentas – mes pasirūpinsime greitu ir patikimu remontu, kad Jūsų įranga vėl veiktų nepriekaištingai. Teikiame paslaugas tiek namų vartotojams, tiek verslui, todėl esame patikimas partneris bet kokio tipo technikai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
