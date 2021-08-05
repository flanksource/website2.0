import React from "react";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className="bg-gray-400">
      <div className="">
        <div className="bg-red-300">header here</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
