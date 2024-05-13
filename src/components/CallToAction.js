import { PrimaryButton } from "@/components/buttons/PrimaryButton";

export const CallToAction = () => {
  return (
    <section className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
      {/* CTA card */}
      <div className="relative py-16 rounded-3xl bg-dark-700 lg:py-20">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 top-0 z-20 w-1/4 h-full right-1/4 text-dark-700"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 z-10 w-1/2 h-full left-1/2 bg-dark-800 rounded-r-3xl" />
        {/* CTA content */}
        <div className="relative z-30 flex flex-col items-center justify-center px-4 mx-auto text-center sm:px-16 lg:flex-row lg:text-left">
          <div className="max-w-lg text-2xl font-bold sm:text-4xl lg:w-1/2">
            <h5 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's make something great together.
            </h5>
          </div>
          <div className="flex justify-center max-w-lg mt-10 lg:w-1/2 lg:mt-0 lg:justify-end">
            <PrimaryButton href="#0">Let's connect</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
