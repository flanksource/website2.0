import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserIcon,
  ViewGridIcon,
  LightBulbIcon,
  BriefcaseIcon,
  AnnotationIcon
} from "@heroicons/react/outline";
import { routes } from "../../routes";
import flanksourceLogo from "../../assets/images/flanksource.svg";

export default function SiteHeader() {
  const navbarItems = [
    {
      name: "About",
      description: "About Flanksource",
      href: routes.about.path,
      icon: UserIcon
    },
    {
      name: "Services",
      description: "Services we offer",
      href: routes.services.path,
      icon: ViewGridIcon
    },
    {
      name: "Open Source",
      description: "Services we offer",
      href: routes.openSource.path,
      icon: LightBulbIcon
    },
    {
      name: "Careers",
      description: "Services we offer",
      href: routes.careers.path,
      icon: BriefcaseIcon
    },
    {
      name: "Blog",
      description: "Services we offer",
      href: routes.blog.path,
      icon: AnnotationIcon
    }
  ];

  return (
    <Popover className="relative bg-white z-10">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 md:space-x-10">
              <div className="flex justify-start">
                <a href={routes.home.path}>
                  <span className="sr-only">Flanksource Logo</span>
                  <img
                    className="h-10 w-auto sm:h-12"
                    src={flanksourceLogo}
                    alt=""
                  />
                </a>
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {navbarItems.map((item) => {
                  return (
                    <a
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  );
                })}
              </Popover.Group>
              <div className="hidden lg:flex items-center justify-end">
                <a
                  href="mailto:hi@flanksource.com"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  hi@flanksource.com
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src={flanksourceLogo}
                        alt="Flanksource Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navbarItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <a
                    href={routes.contact.path}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
