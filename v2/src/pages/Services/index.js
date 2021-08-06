import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import Container from "../../components/Container";
import LogoCloud from "../../components/LogoCloud";
import LinkButton from "../../components/LinkButton";

export default function Services() {
  const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      <HeaderWithBackground
        title="Flexible, personalized Kubernetes services"
        subtitle={
          <>
            <b>flank</b>source makes it easy to build, manage, and operate a
            secure, open-source Kubernetes-based platform.
          </>
        }
        actions={
          <>
            <div className="rounded-md shadow flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <LinkButton href="/contact" theme="light">
                Read the case study
              </LinkButton>
              <LinkButton href="/contact" theme="dark">
                Get started
              </LinkButton>
            </div>
          </>
        }
      />

      <Container>
        <LogoCloud
          title="Happy Teams"
          srcList={[
            {
              src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
              alt: "Tuple"
            },
            {
              src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
              alt: "StaticKit"
            },
            {
              src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
              alt: "Transistor"
            },
            {
              src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
              alt: "Workcation"
            },
            {
              src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
              alt: "Mirage"
            }
          ]}
        />
      </Container>
    </DefaultLayout>
  );
}
