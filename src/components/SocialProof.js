import Image from "next/image";
import clsx from "clsx";

import testimonialImage1 from "/public/stock/testimonials/testimonial-01.jpg";
import testimonialImage2 from "/public/stock/testimonials/testimonial-02.jpg";
import testimonialImage3 from "/public/stock/testimonials/testimonial-03.jpg";
import testimonialImage4 from "/public/stock/testimonials/testimonial-04.jpg";

const stats = [
  {
    label: "Happy clients",
    value: 69,
  },
  {
    label: "Projects completed",
    value: 420,
  },
  {
    label: "Years in business",
    value: 20,
  },
];

const testimonials = [
  {
    name: "Katy Perry",
    jobTitle: "CEO, Spotify",
    testimonial:
      "Working with Crator was a game-changer. Their creative vision truly amplified our brand's potential.",
    image: testimonialImage1,
  },
  {
    name: "Henry Krasner",
    jobTitle: "CEO, Twitter",
    testimonial:
      "Crator's innovative design solutions played a key role in our product's successful launch.",
    image: testimonialImage2,
  },
  {
    name: "Bob Foster",
    jobTitle: "CEO, Amazon",
    testimonial:
      "Crator's team is exceptional. Their commitment to quality exceeded our highest expectations.",
    image: testimonialImage3,
  },
  {
    name: "Ema Roberts",
    jobTitle: "Founder, Dropbox",
    testimonial:
      "From concept to execution, Crator's approach was seamlessly integrated and highly efficient.",
    image: testimonialImage4,
  },
];

export const SocialProof = () => {
  return (
    <section className="max-w-screen-xl px-4 pt-10 pb-12 mx-auto md:pb-16 md:pt-12 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          Testimonials
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          What they say about us
        </h2>
        <p className="mt-6 text-xl text-dark-300">
          Discover first-hand accounts from our clients, who experienced the
          transformative power of our creative solutions.
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="grid gap-4 mt-12 lg:mt-14 xl:grid-cols-3 xl:grid-rows-2 sm:gap-6 lg:gap-8 md:grid-cols-2 md:grid-rows-3">
        {/* Stats */}
        <div className="md:row-span-2">
          <div className="w-full h-full px-4 py-12 shadow-xl rounded-3xl bg-dark-700 lg:py-16 lg:px-6">
            <div className="max-w-md mx-auto text-center lg:max-w-full">
              <h3 className="text-2xl font-bold text-white lg:text-4xl sm:text-3xl">
                Discover why so many companies trust us
              </h3>
              <p className="mt-3 text-lg text-dark-300 lg:mt-4">
                We pride ourselves on delivering exceptional and tangible
                results that matter to you.
              </p>
            </div>
            <div className="mt-8 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 md:block">
              {stats.slice(0, 3).map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  className={clsx(
                    "flex flex-col",
                    index > 0 && "mt-10 sm:mt-0 md:mt-10"
                  )}
                >
                  <p className="order-2 mt-2 text-lg font-medium leading-6 text-dark-400">
                    {stat.label}
                  </p>
                  <p className="order-1 text-5xl font-bold leading-none text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {testimonials.slice(0, 4).map((item, index) => (
          <div
            key={`testimonial-${index}`}
            className="relative flex w-full px-4 py-12 overflow-hidden shadow-xl rounded-3xl bg-dark-700 sm:px-6 lg:px-8"
          >
            {/* Quotation mark */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 w-32 h-32 text-dark-800 lg:w-40 lg:h-40"
            >
              <path
                fill="currentColor"
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              />
            </svg>
            <blockquote className="z-10 mx-auto">
              <p className="max-w-md mx-auto text-lg font-medium leading-9 text-center text-dark-300">
                {item.testimonial}
              </p>
              <footer className="mt-8">
                <Image
                  className="object-cover object-center w-12 h-12 mx-auto border-2 border-opacity-75 border-solid rounded-full border-dark-800"
                  width={44}
                  height={44}
                  src={item.image}
                  alt={item.name}
                  sizes="2.75rem"
                />
                <div className="mt-3 text-center">
                  <div className="text-base font-medium leading-6 text-white">
                    {item.name}
                  </div>
                  <div className="text-base font-medium leading-6 text-dark-400">
                    {item.jobTitle}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};
