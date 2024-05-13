import Link from "next/link";

import { SocialLink } from "@/components/SocialLink";

const contact = {
  address: {
    street: "123 W. Kanye Street",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
  },
  phone: "(415) 555-1234",
  email: "hello@crator.com",
};

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact us", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="px-4 py-12 md:py-16 bg-dark-900 sm:px-6 lg:px-8">
      <div className="grid gap-8 mx-auto lg:max-w-screen-xl sm:max-w-3xl md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
        {/* Logo and copyright text */}
        <div className="flex flex-col lg:mx-auto">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black lg:block group">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">
                Crator{" "}
              </span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">
                Studio
              </span>
            </Link>
          </div>
          <div className="mt-6 text-lg md:mt-8 text-dark-300">
            © {new Date().getFullYear()} Crator Studio.
            <br /> All rights reserved.
          </div>
        </div>
        {/* Contact information */}
        <div className="lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">Get in touch</h6>
          <p className="mt-2 text-lg text-dark-300">
            {contact.address.street}
            <br />
            {contact.address.city}, {contact.address.state}{" "}
            {contact.address.zip}
          </p>
          <p className="mt-6 text-lg text-dark-300">{contact.phone}</p>
          <p className="text-lg text-dark-300">{contact.email}</p>
        </div>
        {/* Site links */}
        <div className="lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">Company</h6>
          <ul className="mt-2 space-y-1 text-lg">
            {footerLinks.map((link, index) => (
              <li
                key={`footer-links-${index}`}
                className="font-medium text-dark-300 hover:text-white"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social links */}
        <div className="sm:col-span-3 lg:col-span-1 lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">
            Follow us on social media
          </h6>
          <p className="mt-2 text-lg text-dark-300">
            Stay connected and updated on our latest projects.
          </p>
          <div className="w-full mt-4 lg:mt-6">
            {/* Social links container */}
            <div className="flex justify-start space-x-4">
              <SocialLink href="#0" icon="instagram" />
              <SocialLink href="#0" icon="facebook" />
              <SocialLink href="#0" icon="twitter" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
