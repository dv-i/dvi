"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { Icon } from "@/components/Icon";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

export const ArchivedCaseStudies = ({ caseStudies, categories }) => {
  const [archivedCaseStudies, setArchivedCaseStudies] = useState(
    caseStudies.filter((caseStudy) => !caseStudy.featured)
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setArchivedCaseStudies(
      selectedCategory === "all"
        ? caseStudies
        : caseStudies.filter(
            (caseStudy) => caseStudy.category === selectedCategory
          )
    );
  }, [selectedCategory, caseStudies]);

  function CaseStudy({ caseStudy }) {
    const caseStudyPath = `/work/${caseStudy.slug}`;

    return (
      <div className="max-w-lg mx-auto shadow-xl rounded-3xl bg-dark-700">
        <Link href={caseStudyPath}>
          <div className="relative w-full h-64 bg-center bg-cover rounded-t-3xl">
            <Image
              src={caseStudy.image}
              alt={caseStudy.name}
              fill
              className="object-cover object-center w-full h-full rounded-t-3xl"
              sizes="(min-width: 1280px) 28.5rem, (min-width: 1024px) 37.5vw, (min-width: 640px) 32rem, calc(100vw - 2rem)"
            />
            <p className="inline-flex items-center justify-center px-6 py-2 mt-4 ml-6 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r lg:ml-4 xl:ml-6 from-dark-700 to-dark-800">
              {caseStudy.category}
            </p>
          </div>
        </Link>

        <div className="w-full p-6 lg:p-4 xl:p-6">
          <div className="flex flex-wrap w-full">
            <div className="flex items-center justify-start w-1/2">
              <Icon name="calendar" className="w-5 h-5 text-dark-400" />

              <div className="ml-2 text-base font-medium leading-6 text-dark-400">
                {caseStudy.date}
              </div>
            </div>
            <div className="flex justify-end w-1/2 space-x-1">
              {caseStudy.stack.map((tech, j) => (
                <Icon
                  name={tech.tech}
                  className="w-6 h-6 text-dark-400"
                  key={`caseStudy-${caseStudy.name}-tech-stack-${j}`}
                />
              ))}
            </div>
          </div>
          <Link href={caseStudyPath}>
            <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
              {caseStudy.name}
            </h3>
          </Link>

          <p className="mt-1 text-base leading-relaxed text-dark-300">
            {caseStudy.shortDescription}
          </p>
          <div className="flex mt-8">
            <SecondaryButton size="sm" href={caseStudyPath}>
              Case study
            </SecondaryButton>
          </div>
        </div>
      </div>
    );
  }

  function Filters() {
    return (
      <div className="order-1 md:order-2 md:col-span-3">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Filter Projects</h3>

          {/* Filters container */}
          <div className="flex flex-wrap justify-center mt-3 space-x-3 space-y-3 md:mt-6 md:justify-start md:flex-col md:space-x-0">
            {/* Filter */}
            <div className="mt-3 ml-3 md:m-0">
              <button
                className={clsx(
                  "inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide rounded-r-full rounded-tl-full md:text-base text-white",
                  selectedCategory == "all"
                    ? "bg-dark-700"
                    : "bg-dark-600 hover:bg-dark-700 duration-200 ease-in-out"
                )}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>
            </div>

            {/* Filter */}
            {categories.map((category, index) => {
              return (
                <div key={`category-${index}`}>
                  <button
                    className={clsx(
                      "inline-flex items-center justify-center px-6 py-2 text-sm font-bold tracking-wide rounded-r-full rounded-tl-full md:text-base text-white",
                      selectedCategory == category
                        ? "bg-dark-700"
                        : "bg-dark-600 hover:bg-dark-700 duration-200 ease-in-out"
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          Explore
        </p>
        <div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl md:leading-tight sm:leading-tight">
              Filter through hundreds of our projects by industry
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-dark-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="max-w-screen-xl mx-auto mt-10 md:mt-12 lg:mt-16">
        <div className="grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Projects container */}
          <div className="order-2 mt-12 overflow-hidden md:mt-0 md:order-1 md:col-span-9">
            {/* Projects container */}
            <div className="grid gap-6 lg:grid-cols-2 md:gap-8">
              {archivedCaseStudies.map((caseStudy, index) => (
                <CaseStudy
                  key={`archived-case-study-${index}`}
                  caseStudy={caseStudy}
                />
              ))}
            </div>
          </div>

          {/* Filters */}
          <Filters />
        </div>
      </div>
    </section>
  );
};
