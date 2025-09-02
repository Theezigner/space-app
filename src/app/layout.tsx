import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import BodyWrapper from "./components/bodyWrapper";

export const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

export const barlow = Barlow({
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
    <html lang="en" className={barlowCondensed.className}>
      <body>
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  );
}
