import Image from "next/image";
import clsx from "clsx";

import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const FeaturedWork = () => {
  const caseStudies = getAllCaseStudies().filter(
    (caseStudy) => caseStudy.featured
  );

  return (
    <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-56 lg:pb-24">
      {caseStudies.map((caseStudy, index) => (
        <div
          key={`featured-case-study-${index}`}
          className="relative max-w-lg mx-auto lg:max-w-none lg:mx-0"
        >
          <div
            className={clsx(
              "relative w-full h-64 bg-center bg-cover shadow-xl lg:rounded-3xl rounded-t-3xl lg:pt-[46%] lg:w-[90%] lg:h-full",
              index % 2 === 1 && "lg:ml-auto"
            )}
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.name}
              className="absolute inset-0 object-cover object-center w-full h-full lg:rounded-3xl rounded-t-3xl"
              fill
              sizes="(min-width: 1280px) 72rem, (min-width: 1024px) 90vw, (min-width: 640px) 32rem, calc(100vw - 2rem)"
            />
            <p className="inline-flex items-center justify-center px-6 py-2 mt-4 ml-6 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r sm:ml-8 lg:hidden from-dark-800 to-dark-900">
              {caseStudy.category}
            </p>
          </div>
          <div
            className={clsx(
              "relative bottom-0 z-20 block w-full h-auto p-6 shadow-xl lg:rounded-3xl rounded-b-3xl sm:p-8 lg:p-12 bg-dark-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full",
              index % 2 === 0 ? "right-0" : "left-0"
            )}
          >
            <div className="h-full lg:flex lg:flex-col lg:justify-between">
              <div className="hidden lg:block">
                <p className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
                  {caseStudy.category}
                </p>
              </div>
              <div className="flex flex-wrap w-full">
                <h3 className="text-3xl font-bold text-white lg:text-4xl">
                  {caseStudy.name}
                </h3>
                <p className="mt-2 text-base lg:mt-4 text-dark-300 md:text-lg">
                  {caseStudy.shortDescription}
                </p>
              </div>
              <div className="flex mt-8 xl:mt-4">
                <SecondaryButton size="sm" href={`/work/${caseStudy.slug}`}>
                  Case study
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
