import React, { useEffect, useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DefaultLayout({
  headerShowOffset,
  className,
  theme,
  title,
  sub,
  children,
}) {
  const [showHeader, setShowHeader] = useState(!headerShowOffset);

  const onPageScroll = (e) => {
    if (e.target.documentElement.scrollTop > headerShowOffset) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  // @TODO: switch to a better method eg. Intersection Observer.
  useEffect(() => {
    if (headerShowOffset) {
      window.addEventListener("scroll", onPageScroll);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <SiteHeader
        theme={theme}
        className={`${headerShowOffset ? "fixed top-0 w-full z-10 duration-500" : ""
          } ${headerShowOffset && showHeader ? "bg-white" : "-top-full"} ${className}`}
      />
      <main className="flex-grow">
        {title != null &&
          <div className="py-24 bg-gray-50 sm:py-32">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                {sub}
              </p>
            </div>
          </div>
        }
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
