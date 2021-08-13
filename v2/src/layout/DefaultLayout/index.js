import React, { useEffect, useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DefaultLayout({ headerShowOffset, children }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <SiteHeader
        className={`${
          headerShowOffset ? "fixed top-0 w-full z-50 duration-500" : ""
        } ${headerShowOffset && showHeader ? "" : "-top-full"}`}
      />
      <div className="flex-grow">{children}</div>
      <SiteFooter />
    </div>
  );
}
