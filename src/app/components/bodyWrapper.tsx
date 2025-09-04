"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

const pageBackgrounds: Record<string, string> = {
  "/": `
    lg:bg-[url('/assets/home/background-home-desktop.jpg')] 
    md:bg-[url('/assets/home/background-home-tablet.jpg')] 
    bg-[url('/assets/home/background-home-mobile.jpg')]
  `,
  "/destination": `
    lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] 
    md:bg-[url('/assets/destination/background-destination-tablet.jpg')] 
    bg-[url('/assets/destination/background-destination-mobile.jpg')]
  `,
  "/crew": `
    lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] 
    md:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
    bg-[url('/assets/crew/background-crew-mobile.jpg')]
  `,
  "/technology": `
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] 
    md:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
    bg-[url('/assets/technology/background-technology-mobile.jpg')]
  `,
};

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bgClass = pageBackgrounds[pathname] ?? "bg-black";

  return (
    <body
      className={`link min-h-screen ${bgClass} bg-cover bg-no-repeat text-white`}
    >
      <Header />
      <div className="mt-10 lg:mt-0">{children}</div>
    </body>
  );
}
