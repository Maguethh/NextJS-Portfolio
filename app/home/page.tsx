import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
      <AuroraBackground backgroundColor="#18181b">
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-200 dark:text-neutral-100">
            Start collaborating with your next
            <FlipWords
              words={[
                "full-stack\u00A0developer",
                "innovation\u00A0leader",
                "strategic\u00A0problem-solver",
                "creative\u00A0technologist",
              ]}
              duration={2500}
            />
            <br className="text-3xl" />
            I'm Magueth, a full-stack expert crafting creative solutions.
          </div>
        </div>
      </AuroraBackground>
    </>
  );
}
