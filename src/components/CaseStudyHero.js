import Image from "next/image";
import { Icon } from "@/components/Icon";

export const CaseStudyHero = ({ data }) => {
  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero text */}
        <div className="w-full max-w-3xl mx-auto text-center lg:max-w-5xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            {data.hero.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">
            {data.hero.headline}
          </h1>
        </div>
        {/* Features container */}
        <div className="grid w-full max-w-lg gap-10 mx-auto mt-12 lg:grid-cols-3 lg:gap-x-12 lg:mt-16 lg:max-w-none">
          {data.hero.keyPoints.slice(0, 3).map((item, index) => (
            <div key={`case-study-key-point-${index}`} className="w-full">
              <span className="flex items-center justify-center w-16 h-16 mx-auto rounded-full shadow-xl bg-gradient-to-r from-dark-600 to-dark-700">
                <Icon name={item.icon} className="w-9 h-9 text-dark-300" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-center text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* Hero image */}
        <div className="relative mx-auto mt-12 shadow-xl rounded-3xl lg:mt-16 aspect-w-2 aspect-h-1">
          <Image
            className="absolute inset-0 object-cover object-center w-full h-full align-middle rounded-3xl"
            fill
            src={data.image}
            alt={data.name}
            sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), calc(100vw - 3rem), calc(100vw - 2rem)"
          />
        </div>
      </div>
    </section>
  );
};
