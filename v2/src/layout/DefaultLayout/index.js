import React from "react";
import SiteHeader from "../../components/SiteHeader";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className="">
      <div className="">
        <SiteHeader />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
