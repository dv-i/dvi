import Image from "next/image";
import clsx from "clsx";

import image1 from "/public/stock/features-alternating-simple-01.jpg";
import image2 from "/public/stock/features-alternating-simple-02.jpg";
import image3 from "/public/stock/features-alternating-simple-03.jpg";

const features = [
  {
    tagline: "Product development",
    headline: "Innovative digital solutions",
    text: "We specialize in crafting top-tier digital products that are perfectly tailored to your brand's needs. From ideation to execution, we turn ideas into tangible realities.",
    image: {
      src: image1,
      alt: "Casual work meeting",
    },
  },
  {
    tagline: "Design",
    headline: "Designing for better user experiences",
    text: "Our approach leverages the power of aesthetics to create unparalleled user experiences. By balancing beauty and functionality, we make the complex simple, and the ordinary extraordinary.",
    image: {
      src: image2,
      alt: "Customer Journey Map",
    },
  },
  {
    tagline: "Optimization",
    headline: "State of the art performance",
    text: "We're committed to maximizing efficiency and performance through the use of cutting-edge technologies. We strive to ensure that each solution we provide is optimized for success.",
    image: {
      src: image3,
      alt: "Communicating on slack",
    },
  },
];

export const SimpleFeaturesAlternating = () => {
  return (
    <section className="pt-10 pb-10 md:pb-12 md:pt-20 lg:pt-36 bg-dark-800">
      {/* Features container */}
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Feature */}
        {features.map((feature, index) => (
          <div
            key={`simple-feature-${index}`}
            className={clsx(
              "w-full px-0 md:grid md:grid-cols-2 lg:gap-x-12 xl:gap-x-36 md:gap-8 lg:px-6",
              index > 0 && "mt-20 md:mt-24 lg:mt-32"
            )}
          >
            {/* Feature text */}
            <div
              className={clsx(
                "flex flex-col justify-center px-4 sm:px-6 lg:px-0",
                index % 2 === 0 ? "md:pl-0 md:order-2" : "md:pr-0"
              )}
            >
              <div>
                <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                  {feature.tagline}
                </p>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold text-white md:mt-6 sm:text-4xl lg:text-5xl">
                {feature.headline}
              </h3>
              <p className="mt-4 text-xl md:mt-6 text-dark-300">
                {feature.text}
              </p>
            </div>
            {/* Feature image */}
            <div
              className={clsx(
                "relative w-full mt-10 md:mt-0 aspect-w-12 aspect-h-11",
                index % 2 === 0
                  ? "md:rounded-r-3xl lg:rounded-l-3xl md:order-1"
                  : "md:rounded-l-3xl lg:rounded-r-3xl"
              )}
            >
              <Image
                src={feature.image.src}
                fill
                alt={feature.image.alt}
                className={clsx(
                  "absolute inset-0 object-cover object-center w-full h-full shadow-xl",
                  index % 2 === 0
                    ? "md:rounded-r-3xl lg:rounded-l-3xl"
                    : "md:rounded-l-3xl lg:rounded-r-3xl"
                )}
                sizes="(min-width: 1280px) 34rem, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
