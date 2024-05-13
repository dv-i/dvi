import Image from "next/image";
import clsx from "clsx";

export const CaseStudyFeatures = ({ data }) => {
  return (
    <section className="px-4 py-12 md:pt-16 sm:pb-24 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section text */}
        <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            {data.tagline}
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {data.headline}
          </h2>
          <p className="mt-6 text-xl text-dark-300">{data.text}</p>
        </div>
        {data.features.map((feature, index) => (
          <div
            key={`case-study-feature-${index}`}
            className={clsx(
              "relative lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-12",
              index === 0 ? "mt-12 lg:mt-20" : "mt-16 sm:mt-24 lg:mt-32"
            )}
          >
            {/* Feature text */}
            <div
              className={clsx(
                "flex flex-col items-center justify-center lg:items-start",
                index % 2 === 1 && "lg:order-2"
              )}
            >
              <div className="w-full max-w-lg text-left md:text-center lg:text-left md:max-w-2xl">
                <p className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                  {feature.tagline}
                </p>
                <h2 className="mt-4 text-2xl font-extrabold text-white lg:mt-6 sm:text-3xl md:text-4xl">
                  {feature.headline}
                </h2>
                <p className="mt-4 text-lg lg:mt-6 text-dark-300">
                  {feature.text}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "relative flex items-center justify-center max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none w-full",
                index % 2 === 1 && "lg:order-1"
              )}
            >
              <div
                className={clsx(
                  "absolute w-full h-full rounded-3xl bg-dark-700 2xl:top-10 lg:top-4 sm:top-8",
                  index % 2 === 0
                    ? "2xl:left-10 lg:left-4 sm:left-8"
                    : "2xl:right-10 lg:right-4 sm:right-8"
                )}
              >
                <svg
                  className="absolute inset-y-0 top-0 z-20 w-1/4 h-full right-1/4 text-dark-700"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                  fill="currentcolor"
                >
                  <polygon points="0,0 100,0 0,100" />
                </svg>
                <div className="absolute inset-y-0 z-10 w-1/2 h-full left-1/2 bg-dark-800 rounded-r-3xl" />
              </div>
              <div className="relative w-full aspect-w-3 aspect-h-2">
                {/* Feature image */}
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="absolute inset-0 z-30 object-cover w-full h-full shadow-xl rounded-3xl"
                  sizes="(min-width: 1280px) 38.5rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
