import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation: any[] = [
  // { name: "Find jobs", href: "/" },
  // { name: "Post job", href: "/jobs/create" },
  // { name: "About us", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const router = useRouter();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-xl font-sans font-semibold tracking-tight leading-normal text-black">
                    Fintan.io
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const current = item.href === router.pathname;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            current
                              ? "bg-gray-800 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:flex">
                <Link href="#subscribe" className="ml-3">
                  Subscribe for updates
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const current = item.href === router.pathname;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
