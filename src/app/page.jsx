import { HomeHero } from "@/components/HomeHero";
import { LogoCloud } from "@/components/LogoCloud";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Process } from "@/components/Process";
import { FeaturedWork } from "@/components/FeaturedWork";
import { SocialProof } from "@/components/SocialProof";
import { CallToAction } from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoCloud />

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

      <ServicesOverview />

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

      <section className="pt-10 pb-12 bg-gradient-to-b md:pt-12 md:pb-16 from-dark-900 to-dark-800">
        <Process />
      </section>

      {/* Featured work wrapper */}
      <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-dark-800 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Featured work section header */}
          <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
              Our work
            </p>
            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Check out some of our recent & current work
            </h2>
          </div>

          <FeaturedWork />
        </div>
      </section>

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

      <SocialProof />
      <CallToAction />
    </>
  );
}
