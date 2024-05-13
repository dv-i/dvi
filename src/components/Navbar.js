"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import clsx from "clsx";
import { Transition, Popover } from "@headlessui/react";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const navbar = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Case study", href: "/work/nedia" },
  ],
  action: {
    label: "Let's talk",
    href: "/contact",
  },
};

export const Navbar = () => {
  const pathname = usePathname();

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            "bg-dark-300 group-hover:bg-white absolute block h-1 rotate-0 transform rounded-full transition-all duration-300 ease-in-out opacity-100",
            open ? "top-2 left-1/2 w-0" : "w-full top-0 left-0"
          )}
        />
        <span
          className={clsx(
            "bg-dark-300 group-hover:bg-white absolute left-0 top-2 block h-1 w-full transform rounded-full transition-all duration-300 ease-in-out opacity-100",
            open ? "rotate-45" : "rotate-0"
          )}
        />
        <span
          className={clsx(
            "bg-dark-300 group-hover:bg-white absolute left-0 top-2 block h-1 w-full transform rounded-full transition-all duration-300 ease-in-out opacity-100",
            open ? "-rotate-45" : "rotate-0"
          )}
        />
        <span
          className={clsx(
            "bg-dark-300 group-hover:bg-white absolute block h-1 rotate-0 transform rounded-full transition-all duration-300 ease-in-out opacity-100",
            open ? "top-2 left-1/2 w-0" : "w-full left-0 top-4"
          )}
        />
      </>
    );
  }

  function MobileNav() {
    return (
      <div className="block md:hidden">
        <Popover>
          <Popover.Button
            className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="absolute top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-dark-800 to-dark-900"
            >
              <div className="flex flex-col items-center w-full p-4 mx-auto space-y-8 text-xl justify-evenly">
                {navbar.navigation.map((link, index) => (
                  <Link
                    href={link.href}
                    key={`mobile-nav-link-${index}`}
                    className={clsx(
                      "block px-6 py-2 font-medium rounded-full sm:inline-block",
                      pathname === link.href
                        ? "text-white bg-dark-700"
                        : "text-dark-300 hover:text-white hover:bg-dark-700 transition duration-200 ease-in-out"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <PrimaryButton
                  href={navbar.action.href}
                  className="text-lg h-14 hover:bg-dark-700"
                >
                  {navbar.action.label}
                </PrimaryButton>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }

  return (
    <header className="bg-dark-900">
      <nav className="flex items-center px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            {/* Large logo */}
            <Link
              href="/"
              className="block text-2xl font-black md:hidden lg:block group"
            >
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">
                Crator{" "}
              </span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">
                Studio
              </span>
            </Link>

            {/* Small logo for mobile screens */}
            <Link
              href="/"
              className="hidden text-3xl font-black md:block lg:hidden group"
            >
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">
                C
              </span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">
                S
              </span>
            </Link>
          </div>

          {/* Main menu for large screens */}
          <div className="hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base font-medium text-dark-300">
            {navbar.navigation.map((link, index) => (
              <Link
                href={link.href}
                key={`desktop-nav-link-${index}`}
                className={clsx(
                  "block px-4 py-1 rounded-full sm:inline-block",
                  pathname === link.href
                    ? "text-white bg-dark-700"
                    : "duration-200 ease-in-out hover:text-white hover:bg-dark-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <PrimaryButton
              href={navbar.action.href}
              className="hover:bg-dark-700"
            >
              {navbar.action.label}
            </PrimaryButton>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
