"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; 

export default function HeaderLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", number: "00" },
    { href: "/destination", label: "Destination", number: "01" },
    { href: "/crew", label: "Crew", number: "02" },
    { href: "/technology", label: "Technology", number: "03" },
  ];

  return (
    <header className="flex items-center">
      <nav className="pr-20 pl-10 w-full hidden md:flex items-center justify-end bg-white/5 backdrop-blur-md uppercase">
        <ul className="flex gap-8 text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex flex-row cursor-pointer py-8 hover:border-b-2 hover:underline-offset-4 ${
                  pathname === link.href ? "border-b-2" : ""
                }`}
              >
                <p className="font-bold mr-2">{link.number}</p>
                <p>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden pr-10">
        <Hamburger links={links} pathname={pathname} />
      </div>
    </header>
  );
}

function Hamburger({
  links,
  pathname,
}: {
  links: { href: string; label: string; number: string }[];
  pathname: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="md:hidden cursor-pointer"
      aria-haspopup="menu"
      aria-expanded={open}
      tabIndex={0}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="space-y-1 w-4 h-4 grid place-items-center rounded"
      >
        <span className="bg-white block h-0.5 w-4"></span>
        <span className="bg-white block h-0.5 w-4"></span>
        <span className="bg-white block h-0.5 w-4"></span>
      </button>

      <aside
        className={[
          "fixed top-0 right-0 w-64 h-screen bg-white/5 backdrop-blur-md p-5 shadow-xl ring-1 ring-black/5 z-50 ",
          "origin-right transform-gpu transition-all duration-300 ease-out",
          open
            ? "opacity-100 scale-x-100 translate-x-0 pointer-events-auto"
            : "opacity-0 scale-x-0 translate-x-0 pointer-events-none",
        ].join(" ")}
        role="menu"
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className="font-bold pb-10 text-xl text-right "
        >
          <p>X</p>
        </div>
        <nav>
          <ul className="flex flex-col gap-10 text-sm uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex flex-row cursor-pointer hover:border-r-2 hover:underline-offset-4 ${
                    pathname === link.href ? "border-r-2" : ""
                  }`}
                  onClick={() => setOpen(false)} 
                >
                  <p className="font-bold mr-2">{link.number}</p>
                  <p>{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </main>
  );
}
