import { Icon } from "@/components/Icon";

const steps = [
  {
    label: "1. Collect Ideas",
    description:
      "We gather comprehensive insights about your product to fully understand your unique needs and vision.",
    icon: "clipboardList",
  },
  {
    label: "2. Design Concept",
    description:
      "We creatively transform your vision and ideas into design drafts. We iterate until you are satisfied.",
    icon: "artboard",
  },
  {
    label: "3. Finalize Product",
    description:
      "Upon your approval, we finalize and refine the design and launch your uniquely tailored product to the market.",
    icon: "rocket",
  },
];

export const Process = () => {
  return (
    <div className="w-full max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          Our process
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Experience our simple design process
        </h2>
        <p className="mt-6 text-xl text-dark-300">
          Uncover the essence of your brand, through our highly collaborative
          and intuitively structured design process.
        </p>
      </div>
      {/* Process steps */}
      <div className="grid max-w-xl gap-10 mx-auto mt-12 lg:mt-16 lg:grid-cols-3 lg:gap-x-12 lg:max-w-none">
        {steps.slice(0, 3).map((step, index) => (
          <div key={`service-process-setp-${index}`} className="w-full">
            <span className="flex items-center justify-center mx-auto shadow-xl bg-gradient-to-r rounded-3xl w-18 h-18 from-dark-600 to-dark-700">
              {/* TablerIcon name: clipboard-list */}
              <Icon name={step.icon} className="w-10 h-10 text-dark-300" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-center text-white">
              {step.label}
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
