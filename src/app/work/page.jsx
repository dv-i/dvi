import { FeaturedWork } from "@/components/FeaturedWork";
import { ArchivedCaseStudies } from "@/components/ArchivedCaseStudies";
import { CallToAction } from "@/components/CallToAction";

import { getAllCaseStudies, getCaseStudyCategories } from "@/lib/caseStudies";

export const metadata = {
  title: "Our work - Crator",
  description:
    "Crator has worked with a large array of clients in various industries: Consumer goods, fashion, b2b, entertainment, etc.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  const categories = getCaseStudyCategories();

  return (
    <>
      {/* Featured work wrapper */}
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Hero header */}
          <div className="w-full max-w-3xl mx-auto text-center lg:max-w-5xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
              Our work
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">
              Check out some of our recent work
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-xl md:mt-5 text-dark-300 md:max-w-3xl">
              Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
              dapibus. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus.
            </p>
          </div>

          {/* Featured work */}
          <FeaturedWork />
        </div>
      </section>

      <ArchivedCaseStudies caseStudies={caseStudies} categories={categories} />

      <CallToAction data={global.ctaSection} />
    </>
  );
}
