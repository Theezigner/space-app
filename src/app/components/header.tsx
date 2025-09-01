import HeaderLinks from "./headerLinks";
export default function Header() { 
    return (
      <header className="flex flex-row justify-between items-center lg:py-10 pl-10 md:pt-0 pt-5 w-full">
        <div>
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            className="lg:w-full lg:h-full w-10 h-10 "
          />
        </div>
        <div>
          <HeaderLinks />
        </div>
      </header>
    );
}