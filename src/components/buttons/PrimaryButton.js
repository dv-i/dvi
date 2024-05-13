import Link from "next/link";
import clsx from "clsx";

export function PrimaryButton({
  className = "hover:bg-dark-900 h-14",
  href,
  children,
  ...props
}) {
  return href ? (
    <Link
      href={href}
      className={clsx(
        "flex justify-center items-center py-3 px-8 w-auto font-semibold leading-snug bg-white rounded-full transition ease-in-out duration-250 text-dark-900 hover:text-white focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={clsx(
        className,
        "flex justify-center items-center py-3 px-8 w-auto text-base font-semibold leading-snug bg-white rounded-full transition ease-in-out duration-250 text-dark-900 hover:text-white focus:outline-none"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
