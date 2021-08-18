import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserIcon,
  ViewGridIcon,
  BriefcaseIcon,
  AdjustmentsIcon,
  CloudIcon,
  LightBulbIcon,
  AnnotationIcon,
  ShieldCheckIcon,
  LightningBoltIcon
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

import flanksourceLogo from "../../assets/images/flanksource.svg";
import flanksourceLogoWhite from "../../assets/images/flanksource-white.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader({ theme, ...props }) {
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
      name: "Careers",
      href: routes.careers.path,
      icon: BriefcaseIcon
    },
    {
      name: "Blog",
      href: routes.blog.path,
      icon: AnnotationIcon
    }
  ];

  const solutions = [
    {
      name: "Kubernetes Quickstart",
      href: `${routes.services.path}#quick-start`,
      icon: LightningBoltIcon
    },
    {
      name: "Managed Services",
      href: `${routes.services.path}#managed-services`,
      icon: ViewGridIcon
    },
    {
      name: "Migrations",
      href: `${routes.services.path}#migrations`,
      icon: CloudIcon
    },
    {
      name: "Internal Platforms",
      href: `${routes.services.path}#internal-platform-development`,
      icon: AdjustmentsIcon
    },
    {
      name: "Strategy",
      href: `${routes.services.path}#cloud-and-devops`,
      icon: LightBulbIcon
    },
    {
      name: "Resilience Reviews",
      href: `${routes.services.path}#resilience-assessment`,
      icon: ShieldCheckIcon
    }
  ];

  const cloud = [
    {
      name: "Kubernetes Quickstart",
      href: `${routes.services.path}#quick-start`,
      icon: LightningBoltIcon
    },
    {
      name: "Managed Services",
      href: `${routes.services.path}#managed-services`,
      icon: ViewGridIcon
    }
  ];

  let themeBgClass = "";
  switch (theme) {
    case "light":
      themeBgClass = "bg-gray";
      break;
    case "dark":
      themeBgClass = "bg-gray-700";
      break;
    case "transparent-light":
      themeBgClass = "";
      break;
    case "transparent-dark":
      themeBgClass = "";
      break;
    default:
      themeBgClass = "bg-gray"; // light
      break;
  }

  let themeNavTextClass = "";
  switch (theme) {
    case "light":
      themeNavTextClass = "text-gray-500 hover:text-gray-900";
      break;
    case "dark":
      themeNavTextClass = "text-gray-100 hover:text-gray-300";
      break;
    case "transparent-light":
      themeNavTextClass = "text-gray-500 hover:text-gray-900";
      break;
    case "transparent-dark":
      themeNavTextClass = "text-gray-100 hover:text-gray-300";
      break;
    default:
      themeNavTextClass = "text-gray-500 hover:text-gray-900"; // light
      break;
  }

  function PopoverDialogColumns({ title, columns }) {
    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                themeNavTextClass,
                "group rounded-md inline-flex items-center text-base font-medium "
              )}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden  bg-white">
                  <div className="flex flex-row">
                    {columns.map((column) => {
                      return (
                        <PopoverColumn
                          key={column.title}
                          title={column.title}
                          items={column.items}
                        />
                      );
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }

  function PopoverColumn({ title, items }) {
    return (
      <div className="relative flex flex-col p-6 sm:gap-8 p-6 flex-grow">
        <div className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
          {title}
        </div>
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="-m-3 p-2 flex items-start rounded-lg hover:bg-gray-50"
          >
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
            <div className="ml-4">
              <span className="text-base font-medium text-gray-900">
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <header {...props}>
      <Popover className={`relative ${themeBgClass} z-50`}>
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center py-3 md:space-x-10">
              <div className="flex justify-start">
                <a href={routes.home.path}>
                  <span className="sr-only">Flanksource Logo</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src={
                      theme === "dark" || theme === "transparent-dark"
                        ? flanksourceLogoWhite
                        : flanksourceLogo
                    }
                    alt=""
                  />
                </a>
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button
                  className={`${
                    theme === "dark" || theme === "transparent-dark"
                      ? "text-gray-100 hover:text-gray-300 "
                      : "bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-500 "
                  }rounded-md p-2 inline-flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {navbarItems.map((item) => {
                  if (item.name === "Services") {
                    return (
                      <PopoverDialogColumns
                        title={"Services"}
                        columns={[
                          { title: "KUBERNETES", items: solutions },
                          { title: "CLOUD & DEVOPS", items: cloud }
                        ]}
                      />
                    );
                  }
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-base font-medium ${themeNavTextClass}`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </Popover.Group>
              <div className="hidden lg:flex items-center justify-end">
                <a
                  href="mailto:hi@flanksource.com"
                  className={`text-base font-medium ${themeNavTextClass}`}
                >
                  hi@flanksource.com
                </a>
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
                          <Link
                            key={item.name}
                            to={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-blue-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <Link
                      to={`${routes.contact.path}?utm_content=header`}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
}
