"use client";
import { useState } from "react";
import { bellefair, barlow } from "../layout";
import Image from "next/image"; // ✅ import Image

type Crew = {
  jobTitle: string;
  image: string;
  name: string;
  description: string;
};

const crews: Crew[] = [
  {
    jobTitle: "COMMANDER",
    image: "/assets/crew/image-douglas-hurley.webp",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    jobTitle: "Mission Specialist ",
    image: "/assets/crew/image-mark-shuttleworth.webp",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    jobTitle: "PILOT",
    image: "/assets/crew/image-victor-glover.webp",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    jobTitle: "Flight Engineer",
    image: "/assets/crew/image-anousheh-ansari.webp",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export default function Destination() {
  const [selectedCrew, setSelectedCrew] = useState<string>(crews[0].name);

  const selectedItem = crews.find((crew) => crew.name === selectedCrew);

  if (!selectedItem) {
    return null;
  }

  return (
    <main className="px-10 lg:px-50 ">
      <div className="flex justify-center md:justify-start text-base md:text-xl md:ml-20 lg:ml-0">
        <p>
          <span className="tracking-widest text-gray-600 font-bold ">02 </span>{" "}
          MEET YOUR CREW
        </p>
      </div>
      <section className="mt-10  mb-20 flex flex-col lg:flex-row flex-wrap items-center lg:gap-40  justify-between">
        <section className="flex flex-col  flex-wrap gap-10 lg:text-left text-center">
          {selectedItem ? (
            <div className="w-full max-w-md lg:text-left text-center">
              <p
                className={`${bellefair.className} uppercase text-gray-400 text-xl  pb-5`}
              >
                {selectedItem.jobTitle}
              </p>
              <h2
                className={`${bellefair.className} uppercase md:text-4xl  text-3xl font-semibold mb-2`}
              >
                {selectedItem.name}
              </h2>
              <p
                className={`${barlow.className} text-gray-400 mt-5  pb-5 lg:pb-10`}
              >
                {selectedItem.description}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Click a button to see the item.</p>
          )}
          <div className="flex flex-wrap gap-3 mb-5 justify-center lg:justify-start">
            {crews.map((crew) => (
              <button
                key={crew.name}
                onClick={() => setSelectedCrew(crew.name)}
                className={`w-2 h-2 rounded-full mx-1 transition ${
                  selectedCrew === crew.name ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </section>
        <div className="flex-1 flex justify-center flex-shrink-0">
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            width={400} 
            height={400} 
            className="w-full h-auto object-contain"
            priority 
          />
        </div>
      </section>
    </main>
  );
}
