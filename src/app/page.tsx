import Link from "next/link";
export default function Home() {
  return (
    <main
      className={`px-10 lg:px-50 w-full flex flex-col lg:flex-row items-center justify-center h-auto lg:pt-30 gap-20 md:gap-15`}
    >
      <section className="flex flex-col flex-1 gap-5 text-center lg:text-left items-center lg:items-start">
        <h2 className="tracking-widest uppercase text-sm md:text-lg md:mt-20">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1
          className={` uppercase lg:text-9xl md:text-7xl text-5xl`}
        >
          space
        </h1>
        <p className={` max-w-md lg:max-w-lg text-gray-400`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well, sit
          back, and relax because we’ll give you a truly out-of-this-world
          experience!
        </p>
      </section>

      <Link
        href="/destination"
        className={`px-15 py-21 md:px-20 md:py-30 text-black bg-white  rounded-full`}
      >
        <button className="uppercase md:text-3xl text-xl">explore</button>
      </Link>
    </main>
  );
}
