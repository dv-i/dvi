import { Icon } from "@/components/Icon";

const values = [
  {
    value: "Quality",
    text: "We strive for excellence in all facets of our work, assuring high-end results.",
    icon: "flame",
  },
  {
    value: "Improvement",
    text: "We are committed to learning, adapting, and constantly elevating our game.",
    icon: "trendingUp",
  },
  {
    value: "Team work",
    text: "We believe in collective efforts, fostering a culture of collaboration and support.",
    icon: "users",
  },
];

export const Values = () => {
  return (
    <section className="px-4 pt-10 pb-12 md:pt-12 md:pb-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Section text */}
        <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            Our values
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            The values that guide and define our work
          </h2>
          <p className="mt-6 text-xl text-dark-300">
            We are driven by a unique ethos, firmly rooted in a cohesive set of
            shared values that guide all our decisions and actions.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid mt-12 gap-y-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
          {values.slice(0, 3).map((item, index) => (
            <div
              key={`value-${index}`}
              className="w-full max-w-lg px-4 mx-auto shadow-xl py-14 rounded-3xl lg:py-16 bg-dark-700 lg:px-6 xl:px-12"
            >
              <div className="max-w-sm mx-auto text-center">
                <span className="flex items-center justify-center mx-auto shadow-inner bg-gradient-to-r rounded-3xl w-18 h-18 from-dark-800 to-dark-900">
                  <Icon
                    name={item.icon}
                    className="w-10 h-10 mx-auto text-dark-300"
                  />
                </span>
                <div className="mt-8 text-2xl font-bold text-white ">
                  {item.value}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-dark-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
