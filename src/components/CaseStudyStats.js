import clsx from "clsx";

import { SecondaryButton } from "@/components/buttons/SecondaryButton";

export const CaseStudyStats = ({ data }) => {
  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Key stats card */}
        <div className="relative py-16 shadow-xl rounded-3xl bg-dark-700 lg:py-20">
          {/* Right background diagonal */}
          <svg
            className="absolute inset-y-0 top-0 z-20 w-1/4 h-full right-1/4 text-dark-700"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentcolor"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <div className="absolute inset-y-0 z-10 w-1/2 h-full left-1/2 bg-dark-800 rounded-r-3xl" />

          {/* Card content */}
          <div className="relative z-30 flex flex-col items-center justify-center px-4 mx-auto text-center lg:px-16 lg:text-left">
            {/* Card header text */}
            <div className="relative max-w-screen-md mx-auto text-center">
              <p className="z-30 inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
                {data.tagline}
              </p>
              <h3 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                {data.headline}
              </h3>
              <p className="mt-6 text-xl text-dark-300">{data.text}</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center w-full mt-10 text-center md:mt-12 lg:-mx-4">
              {data.stats.slice(0, 3).map((stat, index) => (
                <div
                  key={`case-study-stat-${index}`}
                  className={clsx(
                    "relative w-full px-4 md:w-1/3 lg:px-8",
                    index > 0 && "mt-8 md:mt-0"
                  )}
                >
                  <p className="text-5xl font-extrabold text-center text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-lg font-medium text-dark-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Link to site */}
            <div className="flex justify-center w-full mt-12 lg:mt-16">
              <SecondaryButton href={data.action.href}>
                {data.action.label}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
