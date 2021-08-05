import React from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className="h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-grow">{children}</div>
      <SiteFooter />
    </div>
  );
}
