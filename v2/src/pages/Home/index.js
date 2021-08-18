import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import SiteHeader from "../../components/SiteHeader";
import HeroSectionRocket from "../../components/HeroSectionRocket";
import LinkButton from "../../components/LinkButton";

import { routes } from "../../routes";
import Contact from "../../components/Contact";

import FeatureSectionGridIcons from "../../components/FeatureSectionGridIcons";

import resilienceIcon from "../../assets/icons/noun_connection_3197916.svg";
import supportIcon from "../../assets/icons/noun_support_354610.svg";
import quickstartIcon from "../../assets/icons/noun_laptop cursor_3197866.svg";
import strategyIcon from "../../assets/icons/noun_strategy_4155446.svg";
import trainingIcon from "../../assets/icons/noun_education_1262936.svg";
import networkIcon from "../../assets/icons/noun_Network_3197919.svg";

export default function Home() {
  return (
    <DefaultLayout headerShowOffset={700}>
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
          subtitle={
            <>
              We help teams build and operationalise Kubernetes based platforms
              enabling faster, more resilient value delivery to customers at{" "}
              <u>lower</u> cost.
            </>
          }
          actions={
            <LinkButton
              theme="light"
              href={`${routes.contact.path}?utm_content=home_hero`}
            >
              Get Started
            </LinkButton>
          }
        />
        <FeatureSectionGridIcons
          features={[
            {
              name: "Resilience Review",
              icon: resilienceIcon,
              description:
                "Not sure what you need to be production-ready? We can help with a fault-domain analysis and a customized checklist.",
              actions: (
                <LinkButton className="shadow-lg" href={routes.services.path}>
                  Learn More
                </LinkButton>
              )
            },
            {
              name: "SRE driven Platform Operations",
              icon: supportIcon,
              description:
                "Don't have a team of Certified Kubernetes Administrators on-call? We can help with augmented or fully managed operations.",
              actions: (
                <LinkButton className="shadow-lg" href={routes.services.path}>
                  Learn More
                </LinkButton>
              )
            },
            {
              name: "Kubernetes Quickstart",
              icon: quickstartIcon,
              description: (
                <>
                  Beginning your journey? We can get you production-ready in
                  just 60 days*.
                  <div className="mt-4 text-sm">{`* T&C's Apply`}</div>
                </>
              ),
              actions: (
                <LinkButton
                  className="shadow-lg"
                  href={`${routes.contact.path}?utm_content=home_quickstart`}
                >
                  Get in Touch
                </LinkButton>
              )
            },
            {
              name: "Strategy & Value Optimisation",
              icon: strategyIcon,
              description:
                "Don't have a team of Certified Kubernetes Administrators on-call? We can help with augmented or fully managed operations.",
              actions: (
                <LinkButton className="shadow-lg" href={routes.services.path}>
                  Learn More
                </LinkButton>
              )
            },
            {
              name: "SRE focused Training",
              icon: trainingIcon,
              description:
                "We conduct both classroom based training and more hands-on SRE focused game days practicing incident response.",
              actions: (
                <LinkButton
                  className="shadow-lg"
                  href={`${routes.contact.path}?utm_content=home_training`}
                >
                  Get in Touch
                </LinkButton>
              )
            },
            {
              name: "Infrastructure Continuous Delivery",
              icon: networkIcon,
              description:
                "Are your environments more like pets than cattle? We can help with pipelines that deliver safe and tested clusters - continuously.",
              actions: (
                <LinkButton className="shadow-lg" href={routes.services.path}>
                  Learn More
                </LinkButton>
              )
            }
          ]}
        />

        <Contact />
      </main>
    </DefaultLayout>
  );
}
