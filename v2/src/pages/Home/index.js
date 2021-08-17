import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import SiteHeader from "../../components/SiteHeader";
import HeroSectionRocket from "../../components/HeroSectionRocket";
import LinkButton from "../../components/LinkButton";

import { routes } from "../../routes";
import FeatureSectionImageCard from "../../components/FeatureSectionImageCard";
import Contact from "../../components/Contact";

import quickstartImage from "../../assets/images/illustrations/quickstart.svg";
import platformOperationsImage from "../../assets/images/illustrations/platform-operations.svg";
import costValueImage from "../../assets/images/illustrations/cost-value.svg";
import resilienceReviewImage from "../../assets/images/illustrations/resilience-review.svg";
import trainingImage from "../../assets/images/illustrations/training.svg";
import cicdImage from "../../assets/images/illustrations/cicd.svg";

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
        <FeatureSectionImageCard
          title="Resilience Review"
          description={
            <>
              Not sure what you need to be production-ready? We can help with a
              fault-domain analysis and a customized checklist.
            </>
          }
          imageSrc={resilienceReviewImage}
          actions={
            <div className="flex flex-col items-start md:flex-row space-y-4 md:space-y-0 space-y-0 md:space-x-4">
              <LinkButton href={routes.services.path}>Learn More</LinkButton>
            </div>
          }
          className="py-12 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          title="SRE driven Platform Operations"
          description={
            <>
              {`Don't have a team of Certified Kubernetes Administrators on-call?
              We can help with augmented or fully managed operations.`}
            </>
          }
          imageSrc={platformOperationsImage}
          actions={
            <LinkButton href={routes.services.path}>Learn More</LinkButton>
          }
          className="py-12"
          noBorder
          noOverflow
        />
        <FeatureSectionImageCard
          title="Kubernetes Quickstart"
          description={
            <>
              Beginning your journey? We can get you production-ready in just 60
              days*.
              <div className="mt-4 text-sm">{`* T&C's Apply`}</div>
            </>
          }
          imageSrc={quickstartImage}
          actions={
            <div className="flex items-start flex-col md:flex-row space-y-4 md:space-y-0 space-y-0 md:space-x-4">
              <LinkButton
                href={`${routes.contact.path}?utm_content=home_quickstart`}
              >
                Get in Touch
              </LinkButton>
            </div>
          }
          className="py-12 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          title="Strategy & Value Optimisation"
          description={
            <>
              {`Don't have a team of Certified Kubernetes Administrators on-call?
              We can help with augmented or fully managed operations.`}
            </>
          }
          imageSrc={costValueImage}
          actions={
            <>
              <LinkButton href={routes.services.path}>Learn More</LinkButton>
            </>
          }
          className="py-12"
          noBorder
          noOverflow
        />
        <FeatureSectionImageCard
          title="SRE focused Training"
          description={
            <>
              We conduct both classroom based training and more hands-on SRE
              focused game days practicing incident response.
            </>
          }
          imageSrc={trainingImage}
          actions={
            <div className="flex items-start flex-col md:flex-row space-y-4 md:space-y-0 space-y-0 md:space-x-4">
              <LinkButton
                href={`${routes.contact.path}?utm_content=home_training`}
              >
                Get in Touch
              </LinkButton>
            </div>
          }
          className="py-12 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          title="Infrastructure Continuous Delivery"
          description={
            <>
              Are your environments more like pets than cattle? We can help with
              pipelines that deliver <i>safe</i> and tested clusters -
              continuously.
            </>
          }
          imageSrc={cicdImage}
          actions={
            <>
              <LinkButton href={routes.services.path}>Learn More</LinkButton>
            </>
          }
          className="py-12"
          noBorder
          noOverflow
        />
        <Contact />
      </main>
    </DefaultLayout>
  );
}
