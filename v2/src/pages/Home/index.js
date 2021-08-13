import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import SiteHeader from "../../components/SiteHeader";
import HeroSectionRocket from "../../components/HeroSectionRocket";
import LinkButton from "../../components/LinkButton";
import { routes } from "../../routes";

export default function Home() {
  return (
    <DefaultLayout headerShowOffset={400}>
      <SiteHeader theme="transparent-dark" className="absolute w-full" />
      <main className="h-full">
        <HeroSectionRocket
          gradients
          title={
            <>
              <div>Kubernetes at</div>
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-400">
                  Full Speed.
                </span>
              </div>
            </>
          }
          subtitle="We help teams build and operationalise Kubernetes based platforms
          enabling faster, more resilient value delivery to customers at lower
          cost."
          actions={
            <>
              <LinkButton theme="light" href={routes.contact.path}>
                Get Started
              </LinkButton>
            </>
          }
        />
      </main>
    </DefaultLayout>
  );
}
