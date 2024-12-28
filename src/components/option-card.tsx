import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WobbleCard } from "./ui/wobble-card";

export const OptionCard = ({
  className,
  color,
  text,
}: {
  className?: string;
  color?: string;
  text?: string;
}) => {
  return (
    <WobbleCard
      containerClassName={cn(
        "col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]",
        color
      )}
      className=""
    >
      <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          <TextGenerateEffect words={text ? text : ""}></TextGenerateEffect>
        </h2>
      </div>
    </WobbleCard>
  );
};
