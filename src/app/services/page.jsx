import { ServicesHero } from "@/components/ServicesHero";
import { SimpleFeaturesAlternating } from "@/components/SimpleFeaturesAlternating";
import { ServiceList } from "@/components/ServiceList";
import { FeaturesWithList } from "@/components/FeaturesWithList";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "Services - Crator",
  description:
    "We help you develop a website that is custom-made for your business. Our services include, but are not limited to: Web design, Web Development and SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Diagonal section separator */}
      <div className="relative w-full h-16 md:h-32 bg-dark-900">
        <svg
          className="absolute w-full h-full text-dark-800"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <SimpleFeaturesAlternating />

      {/* Diagonal section separator */}
      <div className="relative w-full h-16 bg-dark-800 md:h-32 lg:h-48">
        <svg
          className="absolute w-full h-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      <ServiceList />

      {/* Diagonal section separator */}
      <div className="relative w-full h-16 md:h-32 bg-dark-900">
        <svg
          className="absolute w-full h-full text-dark-800"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <FeaturesWithList />

      <section className="pt-12 pb-12 bg-gradient-to-b md:pt-16 md:pb-16 lg:pt-28 from-dark-800 to-dark-900">
        <Process />
      </section>

      <CallToAction />
    </>
  );
}
