import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import BodyWrapper from "./components/bodyWrapper";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${bellefair.variable} ${barlow.variable}`}>
      <body>
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  );
}
