"use client";
import { useState } from "react";
import Image from "next/image";

type Technology = {
  id: number;
  imageLandscape: string;
  imagePortrait: string;
  name: string;
  description: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    imageLandscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    imagePortrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    imageLandscape: "/assets/technology/image-spaceport-landscape.jpg",
    imagePortrait: "/assets/technology/image-spaceport-portrait.jpg",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    id: 3,
    imageLandscape: "/assets/technology/image-space-capsule-landscape.jpg",
    imagePortrait: "/assets/technology/image-space-capsule-portrait.jpg",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ",
  },
];

export default function Destination() {
  const [selectedTechnology, setSelectedTechnology] = useState<string>(
    technologies[0].name
  );

  const selectedItem = technologies.find(
    (technology) => technology.name === selectedTechnology
  );

  if (!selectedItem) {
    return;
  }

  return (
    <>
      <main className="  lg:pl-50">
        <div className="flex justify-center md:justify-start text-base md:text-xl">
          <h2>
            <span className="tracking-widest text-gray-600 font-bold md:ml-20 lg:ml-0">
              03{" "}
            </span>{" "}
            SPACE LAUNCH 101
          </h2>
        </div>
        <section className="mt-20 mb-20 flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-25 items-center justify-center">
          <div className="flex lg:flex-col flex-wrap gap-3 mb-5 justify-center lg:justify-start">
            {technologies.map((technology) => (
              <button
                key={technology.name}
                onClick={() => setSelectedTechnology(technology.name)}
                className={` w-15 h-15 rounded-full mx-1 transition text-xl ${
                  selectedTechnology === technology.name
                    ? "bg-white text-black"
                    : "bg-transparent border-2 "
                }`}
              >
                {technology.id}
              </button>
            ))}
          </div>
          <section className="flex order-2 lg:order-1 flex-col  flex-wrap gap-10 lg:text-left text-center">
            {selectedItem ? (
              <div className="w-full max-w-md lg:text-left text-center">
                <h1
                  className={` uppercase text-gray-400 md:text-2xl  text-xl pb-5`}
                >
                  THE TERMINOLOGY...
                </h1>
                <h1
                  className={` uppercase md:text-5xl  text-3xl font-semibold mb-2`}
                >
                  {selectedItem.name}
                </h1>
                <p
                  className={` text-gray-400 mt-5  pb-5 lg:pb-10 px-5 md:px-0`}
                >
                  {selectedItem.description}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">Click a button to see the item.</p>
            )}
          </section>
          <div className="flex-1 order-1 lg:order-2 flex justify-center flex-shrink-0  ">
            <div className="relative w-full">
              {/* Desktop image (portrait) */}
              <Image
                src={selectedItem.imagePortrait}
                alt={selectedItem.name}
                width={515}
                height={527}
                className="hidden lg:block w-full h-auto object-contain"
                priority
              />
              {/* Mobile/Tablet image (landscape) */}
              <Image
                src={selectedItem.imageLandscape}
                alt={selectedItem.name}
                width={768}
                height={310}
                className="block lg:hidden w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
