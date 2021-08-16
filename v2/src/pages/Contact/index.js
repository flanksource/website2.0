import React from "react";
import Contact from "../../components/Contact";
import DefaultLayout from "../../layout/DefaultLayout";

export default function ContactPage() {
  // eslint-disable-next-line no-undef

  return (
    <DefaultLayout className="bg-gray-50" title="Contact Us">
      <div>
        <Contact />
      </div>
    </DefaultLayout>
  );
}
