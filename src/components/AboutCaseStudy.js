export const AboutCaseStudy = ({ data }) => {
  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-md mx-auto text-center lg:max-w-screen-xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          {data.tagline}
        </p>
        {/* Project description */}
        <div className="flex flex-wrap w-full mx-auto mt-6 text-center">
          <div className="w-full mx-auto lg:w-4/5">
            <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
