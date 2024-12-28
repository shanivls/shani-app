import { OptionCard } from "@/components/option-card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

const scenario =
  "You witness a stranger shoplifting food from a grocery store. They look desperate and in need.";
const option1 = "Save your family member.";
const option2 = "Save the stranger.";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-black to-gray-700">
      {/* Top message */}
      <header className="w-full p-9 text-center">
        <h1 className="text-4xl text-white font-bold">
          <TextGenerateEffect words={scenario}></TextGenerateEffect>
        </h1>
      </header>

      <main className="flex-grow flex">
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-5 max-w-7xl mx-auto w-full mb-5">
          <OptionCard text={option1} color="bg-red-800"></OptionCard>
          <OptionCard text={option2} color="bg-blue-800"></OptionCard>
        </div>
      </main>
    </div>
  );
}
