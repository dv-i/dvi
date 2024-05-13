import Image from "next/image";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

import image1 from "/public/stock/hero-services-01.jpg";
import image2 from "/public/stock/hero-services-02.jpg";

export const ServicesHero = () => {
  return (
    <section className="px-4 pt-12 pb-10 md:pt-16 md:pb-20 sm:px-6 lg:px-8 bg-dark-900 lg:pb-64">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero header */}
        <div>
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            Our services
          </p>
          <h1 className="mt-6 text-4xl font-extrabold text-left text-white sm:text-5xl md:text-6xl">
            We Create meaningful digital solutions that level up your business
          </h1>
        </div>
        {/* Hero content */}
        <div className="relative mt-6 md:mt-8 lg:mt-12 xl:mt-16">
          <div className="z-10 grid gap-x-8 lg:grid-cols-2 lg:absolute">
            <div>
              <p className="max-w-lg text-xl lg:mx-auto text-dark-300 sm:max-w-3xl">
                Elevating businesses with expertly designed and executed digital
                strategies. Crator is here to help you conquer the online space
                one pexel at a time.
              </p>
              <div className="mt-8 sm:flex sm:justify-start">
                <PrimaryButton
                  className="hover:bg-dark-700 h-14"
                  href="/contact"
                >
                  Let's get started
                </PrimaryButton>
              </div>
            </div>
            {/* Hero images */}
            <div className="grid mx-auto mt-10 md:mt-12 sm:grid-cols-2 sm:gap-x-4 lg:mt-0 sm:mx-0">
              <Image
                src={image1}
                alt="Service 01"
                className="object-cover object-center w-full shadow-xl rounded-3xl lg:h-96"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 640px) calc(50vw - 2rem), calc(100vw - 2rem)"
              />
              <Image
                src={image2}
                alt="Service 02"
                className="hidden object-cover object-center w-full mt-6 shadow-xl rounded-3xl sm:block sm:mt-0 lg:h-96"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 640px) calc(50vw - 2rem), calc(100vw - 2rem)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
