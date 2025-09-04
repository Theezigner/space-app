"use client";
import { useState } from "react";
import Image from "next/image";


type Planet = {
  image: string;
  name: string;
  description: string;
  avgDistance: string;
  estTravelTime: string;
};

const planets: Planet[] = [
  {
    image: "/assets/destination/image-moon.png",
    name: "MOON",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400",
    estTravelTime: "3 DAYS",
  },
  {
    image: "/assets/destination/image-mars.png",
    name: "MARS",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    avgDistance: "225 MIL.",
    estTravelTime: "9 MONTHS",
  },
  {
    image: "/assets/destination/image-europa.png",
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL.",
    estTravelTime: "3 YEARS",
  },
  {
    image: "/assets/destination/image-titan.png",
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL.",
    estTravelTime: "7 YEARS",
  },
];

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState<string>(planets[0].name);

  const selectedItem = planets.find((planet) => planet.name === selectedPlanet);

  if (!selectedItem) {
    return;
  }

  return (
    <>
      <main className="px-10 lg:px-50">
        <div className="flex justify-center md:justify-start text-base md:text-xl md:ml-20 lg:ml-0">
          <h2>
            <span className="tracking-widest text-gray-600 font-bold ">
              01{" "}
            </span>{" "}
            PICK YOUR DESTINATION
          </h2>
        </div>
        <section className="mt-20 mb-20 flex flex-col lg:flex-row flex-wrap gap-20 items-center justify-center">
          <div className="flex-shrink-0">
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={384}
              height={384}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
              priority
            />
          </div>
          <section className="flex flex-col  flex-wrap gap-10 lg:text-left text-center">
            <div className="flex flex-wrap gap-2 mb-5 justify-center lg:justify-start">
              {planets.map((planet) => (
                <button
                  key={planet.name}
                  onClick={() => setSelectedPlanet(planet.name)}
                  className={`items-center ${
                    selectedPlanet === planet.name
                      ? "border-b-2 border-white"
                      : ""
                  }`}
                >
                  <h2>{planet.name}</h2>
                </button>
              ))}
            </div>
            {selectedItem ? (
              <div className="  rounded-lg shadow-md w-full max-w-md lg:text-left text-center">
                <h1 className={` text-6xl font-semibold mb-2`}>
                  {selectedItem.name}
                </h1>
                <p
                  className={` text-gray-400 mt-5 border-b-1 border-gray-700 pb-5 lg:pb-10`}
                >
                  {selectedItem.description}
                </p>
                <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-10 pt-5 lg:pt-10">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-sm text-gray-500">AVG. DISTANCE</h2>
                    <h1 className={` text-xl font-semibold`}>
                      {selectedItem.avgDistance} KM
                    </h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-sm text-gray-500">EST. TRAVEL TIME</h2>
                    <h1 className={` text-xl font-semibold`}>
                      {selectedItem.estTravelTime}
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Click a button to see the item.</p>
            )}
          </section>
        </section>
      </main>
    </>
  );
}
