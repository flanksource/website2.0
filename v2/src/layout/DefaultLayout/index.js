import React from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className="h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
