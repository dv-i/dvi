import Image from "next/image";
import { SocialLink } from "@/components/SocialLink";

import bhavyaImage from "/public/stock/team/bhavya.jpeg";
import jaimishImage from "/public/stock/team/jaimish.jpeg";

const team = [
  {
    name: "Bhavya Shah",
    job: "Co-founder",
    image: bhavyaImage,
    socials: [
      { name: "linkedin", href: "https://www.linkedin.com/in/bshah4397/" },
    ],
  },
  {
    name: "Jaimish Ashar",
    job: "Co-founder",
    image: jaimishImage,
    socials: [
      { name: "linkedin", href: "https://www.linkedin.com/in/jaimish-ashar/" },
      // TODO: Add them when we want to expand in the future
      // { name: "instagram", href: "#0" },
      // { name: "facebook", href: "#0" },
      // { name: "twitter", href: "#0" },
    ],
  },
];

export const Team = () => {
  return (
    <section className="px-4 pt-12 pb-14 md:pt-16 md:pb-20 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section text */}
        <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            The team
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Designing Tomorrow, Today
          </h2>
          <p className="mt-6 text-xl text-dark-300">
            Two minds, boundless potential. With over a decade of combined
            experience in design and development, we offer diverse expertise
            across industries like healthcare, e-commerce, IT, and AI. Let's
            shape the future together.
          </p>
        </div>

        {/* Team section */}
        <div className="grid max-w-6xl mx-auto mt-12 gap-x-6 gap-y-12 lg:mt-16 sm:grid-cols-2 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {team.map((member, i) => (
            <div
              key={`team-member-${i}`}
              className="flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="object-cover object-center w-64 h-64 shadow-xl rounded-3xl"
                sizes="16rem"
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-white">
                  {member.name}
                </div>
                <div className="text-lg font-medium text-dark-400">
                  {member.job}
                </div>

                {/* Social media links */}
                <div className="flex justify-center mt-2 space-x-2">
                  {member.socials.map((socialLink, j) => (
                    <SocialLink
                      key={`member-${i}-social-link-${j}`}
                      size="sm"
                      href={socialLink.href}
                      icon={socialLink.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
