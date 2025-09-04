import Link from "next/link";
import Image from "next/image";
import HeaderLinks from "./headerLinks";
export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center lg:py-10 pl-10 md:pt-0 pt-5 w-full">
      <Link href="/" className="link flex items-center">
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>
      <div>
        <HeaderLinks />
      </div>
    </header>
  );
}
