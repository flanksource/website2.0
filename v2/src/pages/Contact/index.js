import React from "react";
import Contact from "../../components/Contact";
import DefaultLayout from "../../layout/DefaultLayout";

export default function ContactPage() {
  return (
    <DefaultLayout className="bg-gray-50" title="Contact Us">
      <div>
        <Contact />
      </div>
    </DefaultLayout>
  );
}
