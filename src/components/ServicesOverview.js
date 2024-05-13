import Image from "next/image";
import clsx from "clsx";

import { Icon } from "@/components/Icon";

import portraitImage from "/public/stock/what-we-do-image-01.jpg";
import squareImage1 from "/public/stock/what-we-do-image-02.jpg";
import squareImage2 from "/public/stock/what-we-do-image-03.jpg";

const services = [
  {
    label: "Web Design",
    description:
      "We craft visually stunning, unforgettable experiences with responsive design at the forefront.",
    icon: "artboard",
  },
  {
    label: "Web Development",
    description:
      "We excell at converting eye-catching designs into high-functioning, user-friendly web applications.",
    icon: "code",
  },
  {
    label: "Maintenance & Optimization",
    description:
      "We ensure your site remains an effective, optimized tool for your business needs, goals and growth.",
    icon: "tool",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="px-4 py-10 md:py-12 bg-dark-800 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          What we do
        </p>
        <div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              We create digital products that help you get ahead
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-dark-300">
              From fresh ideas to fully-realized designs, we cover every aspect
              of your digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* Section content */}
      <div className="grid justify-center w-full gap-12 mx-auto mt-12 lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start">
        {/* Features list */}
        <div>
          {/* Item */}
          {services.slice(0, 3).map((service, index) => (
            <div
              key={`service-${index}`}
              className={clsx(
                "w-full",
                index === 1 &&
                  "mt-8 lg:mt-5 xl:mt-8 2xl:mt-10 xl:pr-18 2xl:pr-28",
                index === 2 && "mt-8 lg:mt-5 xl:mt-8 2xl:mt-10"
              )}
            >
              <div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
                <div className="relative flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl sm:mx-0 from-dark-800 to-dark-900">
                        <Icon
                          name={service.icon}
                          className="w-6 h-6 text-dark-300"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-3 sm:mt-0">
                      <h5 className="text-lg font-semibold text-white">
                        {service.label}
                      </h5>
                      <p className="mt-1 text-base text-dark-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image collage */}
        <div className="flex items-center justify-center max-w-screen-md lg:max-w-full">
          <div className="grid w-full h-full grid-flow-col grid-rows-2 gap-4">
            <div className="relative row-span-2 shadow-xl rounded-3xl">
              <Image
                src={portraitImage}
                alt="Office work"
                className="object-cover object-right w-full h-full rounded-3xl"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative shadow-xl rounded-3xl">
              <Image
                src={squareImage1}
                alt="More office work"
                className="object-cover object-center w-full h-full rounded-3xl"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative shadow-xl rounded-3xl">
              <Image
                src={squareImage2}
                alt="Group brainstorming"
                className="object-cover object-center w-full h-full rounded-3xl"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
