import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import LinkButton from "../../components/LinkButton";

export default function UnderConstruction() {
  return (
    <DefaultLayout>
      <div className="bg-blue-700 h-full">
        <div className="max-w-2xl mx-auto text-center py-44 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Work in Progress</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            {
              "Sorry, this page is still a work in progress. Do check back soon!"
            }
          </p>
          <LinkButton className="mt-8" theme="light" href="/">
            Back to Home
          </LinkButton>
        </div>
      </div>
    </DefaultLayout>
  );
}
