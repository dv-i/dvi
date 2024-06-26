import Image from "next/image";

import teamImage from "/public/stock/team/team-alt.jpg";

export const AboutHero = () => {
  return (
    <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero text */}
        <div className="w-full max-w-4xl mx-auto text-center lg:max-w-5xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            About us
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">
            Your tech allies, Ready to build
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-xl md:mt-5 text-dark-300 md:max-w-3xl">
            Just us, a dynamic duo ready to tackle your tech challenges. We're
            all about understanding your needs and delivering beyond your
            expectations. Let's craft the future together, one project at a
            time.
          </p>
        </div>
        {/* Hero image */}
        <div className="max-w-screen-lg mx-auto mt-12 shadow-xl rounded-3xl">
          <Image
            className="rounded-3xl"
            src={teamImage}
            alt="Agency team"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};
