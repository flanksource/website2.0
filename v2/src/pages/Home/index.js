import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import HeroSimpleCentered from "../../components/HeroSimpleCentered";
// import Container from "../../components/Container";

export default function Home() {
  // const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      {/* <Container> */}
      <HeroSimpleCentered
        title={
          <>
            Kubernetes @ <span className="text-indigo-600">Full Speed</span>
          </>
        }
        subtitle={
          <>
            We help teams build and operationalise Kubernetes based platforms
            enabling faster, more resilient value delivery to customers at{" "}
            <i>
              <u>lower</u>
            </i>{" "}
            cost.
          </>
        }
        actions={
          <>
            <div className="rounded-md shadow">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get in Touch
              </a>
            </div>
          </>
        }
      />
      {/* </Container> */}
    </DefaultLayout>
  );
}
