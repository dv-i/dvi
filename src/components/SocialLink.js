import clsx from "clsx";
import Link from "next/link";

import { SocialIcon } from "@/components/SocialIcon";

export function SocialLink({ className, href, icon, size = "lg" }) {
  return (
    <Link
      className={clsx(
        "flex items-center justify-center transition duration-300 ease-in-out rounded-full bg-dark-700 hover:bg-white text-dark-300 group",
        size === "lg" ? "w-12 h-12" : "w-10 h-10",
        className
      )}
      href={href}
    >
      <SocialIcon
        name={icon}
        className={clsx(
          "transition duration-300 ease-in-out group-hover:text-dark-900",
          size === "lg" ? "w-6 h-6" : "w-5 h-5"
        )}
      />
    </Link>
  );
}
