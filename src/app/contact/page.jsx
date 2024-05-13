import clsx from "clsx";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SocialLink } from "@/components/SocialLink";

const addresses = [
  {
    street: "123 West Kanye Street",
    city: "Los Angeles",
    state: "CA",
    zip: 90001,
  },
  {
    street: "456 East Drake Street",
    city: "San Francisco",
    state: "CA",
    zip: 94111,
  },
  {
    street: "789 North Weezy Street",
    city: "New York",
    state: "NY",
    zip: 10001,
  },
  {
    street: "101 South Hova Street",
    city: "Miami",
    state: "FL",
    zip: 33101,
  },
];

const formFields = [
  {
    name: "name",
    label: "Name *",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email *",
    type: "email",
    placeholder: "john@email.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "(123) 456-789",
    required: false,
  },
  {
    name: "message",
    label: "Message *",
    type: "textarea",
    placeholder: "Message",
    required: true,
  },
];

export const metadata = {
  title: "Contact us - Crator",
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
                    {address.city}
                  </h5>
                  <p className="mt-1 text-base text-dark-300">
                    {address.street}
                    <br />
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
          {/* Contact form card */}
          <div className="w-full mt-12 lg:mt-0">
            <div className="w-full px-4 py-12 mx-auto shadow-xl rounded-3xl lg:mr-0 lg:ml-auto bg-dark-700 sm:p-16 lg:p-14 xl:p-16">
              {/* Contact form */}
              <form action="#">
                {formFields.map((field, index) => (
                  <div
                    key={`contact-form-field-${index}}`}
                    className={clsx(index > 0 && "mt-6")}
                  >
                    <label
                      htmlFor={field.name}
                      className="ml-0.5 text-dark-300 font-medium text-sm"
                    >
                      {field.label}
                    </label>

                    {field.type == "textarea" && (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full p-4 mt-2 text-sm font-medium text-white transition duration-200 ease-in-out border-2 border-solid outline-none rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                        required={field.required}
                      />
                    )}

                    {["text", "email"].includes(field.type) && (
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full p-4 mt-2 text-sm font-medium text-white transition duration-200 ease-in-out border-2 border-solid outline-none h-14 rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <div className="flex justify-start mt-6">
                  <PrimaryButton type="submit">Send message</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
