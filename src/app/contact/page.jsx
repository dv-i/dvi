import { SocialLink } from "@/components/SocialLink";
import ContactForm from "./ContactForm";

export const addresses = [
  {
    street: "123 West Kanye Street",
    city: "Boston",
    country: "United States of America",
    state: "MA",
    zip: "02120",
  },
  {
    street: "456 East Drake Street",
    city: "Toronto",
    country: "Canada",
    state: "ON",
    zip: "M5M2H4",
  },
  {
    street: "789 North Weezy Street",
    city: "Mumbai",
    country: "India",
    state: "MH",
    zip: 400058,
  },
];

export const metadata = {
  title: "Contact us - Dvi",
  description:
    "Get in touch with our team to discuss how we can help bring your creative vision to life. Reach out to us for collaborative, innovative, and strategic web design and development services.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
            {/* Section header */}
            <div>
              <div className="w-full text-left sm:text-center lg:text-left">
                <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                  Contact
                </p>
              </div>
              <div className="w-full mt-4 text-left md:mt-5 sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  Get in touch
                </h1>
                <p className="max-w-lg mx-auto mt-3 text-xl md:mt-5 text-dark-300 sm:max-w-2xl">
                  We'd love to hear from you. Fill in the form and we'll get
                  back to you shortly.
                </p>
              </div>
            </div>
            {/* Company locations */}
            <div className="grid gap-6 mt-8 sm:mt-10 lg:mt-0 sm:grid-cols-2 sm:grid-rows-2 sm:gap-12">
              {addresses.map((address, index) => (
                <div key={`address-${index}`}>
                  <h5 className="text-lg font-bold text-white">
                    {address.country}
                  </h5>
                  <p className="mt-1 text-base text-dark-300">
                    {/* TODO: Add this when we have an official address in all countries */}
                    {/* {address.street}
                    <br /> */}
                    {address.city}, {address.state} {address.zip}
                  </p>
                </div>
              ))}
            </div>
            {/* Social media links */}
            <div className="w-full mt-8 sm:mt-10 lg:mt-0">
              <h6 className="text-lg font-semibold text-left text-white sm:text-center lg:text-left">
                Follow us
              </h6>
              {/* Links container */}
              <div className="flex justify-start mt-3 space-x-4 sm:justify-center lg:justify-start">
                <SocialLink href="#0" icon="instagram" />
                <SocialLink href="#0" icon="facebook" />
                <SocialLink href="#0" icon="twitter" />
              </div>
            </div>
          </div>

          {/* ContactForm Card */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
