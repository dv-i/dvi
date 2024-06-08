import { AboutHero } from "@/components/AboutHero";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesAlternatingWithIcons } from "@/components/FeaturesAlternatingWithIcons";
import { Values } from "@/components/Values";
import { Team } from "@/components/Team";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "About us - Dvi",
  description:
    "We're a creative, strategic and technically awesome tech agency. Our design team are experts, our developers are clever and our strategies are proven.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Diagonal section separator */}
      <div className="relative w-full h-16 md:h-32 lg:h-48">
        <svg
          className="absolute w-full h-full text-dark-800"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      {/* <FeaturesAlternatingWithIcons /> */}
      <Values />

      {/* Diagonal section separator */}
      <div className="relative w-full h-16 bg-dark-800 md:h-32 lg:h-48">
        <svg
          className="absolute w-full h-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      {/* <Values /> */}
      <Team />

      {/* REMOVED: We don't need this, it's in the home page */}
      {/* <SocialProof /> */}
      <CallToAction />
    </>
  );
}
