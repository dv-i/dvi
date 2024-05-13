import Image from "next/image";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

import heroImage from "/public/stock/hero-home.jpg";

export const HomeHero = () => {
  return (
    <section className="px-4 pt-2 pb-12 mx-auto max-w-screen-2xl md:pb-16 sm:px-6 lg:px-8">
      {/* Hero card */}
      <div className="relative shadow-xl rounded-3xl sm:overflow-hidden bg-dark-700">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 z-20 w-1/4 h-full right-1/4 text-dark-700"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 z-10 w-1/2 h-full left-1/2 bg-dark-800 rounded-r-3xl" />
        {/* Hero card content */}
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-8 xl:gap-x-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          {/* Card content text*/}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="z-30 inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
              Welcome
            </p>
            <div className="z-30 w-full max-w-lg mx-auto mt-6 text-center lg:text-left lg:max-w-none md:max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Let’s make your product a success
              </h1>
              <p className="mt-6 text-xl text-dark-300">
                Crator is your partner in digital innovation. We fuse strategic
                thinking with standout design and development to deliver
                uniquely tailored solutions.
              </p>
            </div>
            {/* Hero buttons */}
            <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start">
              <PrimaryButton href="/contact">Let's get started</PrimaryButton>
              <SecondaryButton
                className="mt-5 ml-0 sm:ml-4 sm:mt-0"
                href="/services"
              >
                Learn more
              </SecondaryButton>
            </div>
          </div>
          {/* Hero image */}
          <div className="relative flex items-center justify-center w-full max-w-xl mx-auto mt-12 sm:mt-16 lg:mt-0 lg:max-w-none">
            <Image
              src={heroImage}
              alt="Crator studio office"
              priority
              className="z-30 object-cover w-auto h-full shadow-md rounded-3xl"
              sizes="(min-width: 1280px) 36.5rem, (min-width: 1024px) calc(50vw - 5rem), (min-width: 640px) 36rem, calc(100vw - 4rem)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
