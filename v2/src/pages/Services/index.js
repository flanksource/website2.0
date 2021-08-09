import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import LogoCloud from "../../components/LogoCloud";
import LinkButton from "../../components/LinkButton";
import FeatureSectionList from "../../components/FeatureSectionList";
import FeatureSectionGrid from "../../components/FeatureSectionGrid";
import FeatureSectionImage from "../../components/FeatureSectionImage";
import CardSection from "../../components/CardSection";
import FeatureSectionImageCard from "../../components/FeatureSectionImageCard";
import { Link } from "react-router-dom";

import {
  CollectionIcon,
  ChatIcon,
  UsersIcon,
  CurrencyDollarIcon,
  BadgeCheckIcon,
  TrendingUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
  CameraIcon
} from "@heroicons/react/outline";
import { routes } from "../../routes";
import HeaderSimpleCentered from "../../components/HeaderSimpleCentered";

export default function Services() {
  // const env = process.env.NODE_ENV;

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
              <LinkButton href="#" theme="light">
                Read the case study
              </LinkButton>
              <LinkButton href={routes.contact.path} theme="dark">
                Get started
              </LinkButton>
            </div>
          </>
        }
        bgColor="#263c6d"
      />

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
        className={"py-28"}
      />

      <FeatureSectionGrid
        title="Resilient Kubernetes. On your terms"
        subtitle="We use SRE and GitOps principles to optimise pipelines and deliver safe and tested clusters."
        features={[
          {
            name: "Reduce your Kubernetes total cost of ownership",
            icon: <CurrencyDollarIcon />
          },
          {
            name: "Increase your resilience against production failures",
            icon: <ShieldCheckIcon />
          },
          {
            name: "Accelerate your delivery",
            icon: <TrendingUpIcon />
          },
          {
            name: "Improve your team’s knowledge & skills",
            icon: <LightBulbIcon />
          },

          {
            name: "Access baked-in tools & best practices with known good configuration",
            icon: <LightningBoltIcon />
          }
        ]}
        className="pt-8 pb-28"
      />

      <FeatureSectionImage
        title="Seamless Collaboration and Delivery"
        subtitle={
          <>
            <b>flank</b>source extends your team with CKA-certified principal
            and senior site reliability engineers (SREs). A proactive,
            development-focused approach to operations means we integrate into
            your environment. Not the other way around.
          </>
        }
        features={[
          {
            name: "Chat",
            description: (
              <>
                We’re available in your chat-rooms<div>(Slack or MS Teams)</div>
              </>
            )
          },
          {
            name: "Joint Standups",
            description:
              "We join your standups to keep up-to-date about your environment"
          },
          {
            name: "Issue Tracking",
            description: (
              <>
                Assign tasks directly to your extended team directly in the
                issue tracker of your choice. (Jira, ClickUp, etc)
              </>
            )
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      />

      <FeatureSectionList
        title="Kubernetes, Simplified"
        subtitle={
          <>
            Streamlined, cost-effective platform solutions – customised for your
            business.
          </>
        }
        features={[
          {
            title:
              "GitOps-based Setup and configuration of Kubernetes platforms across the cloud, bare metal, and on-premises"
          },
          {
            title: "Hover tooltips on platforms"
          },
          {
            title:
              "Extended production-grade support for all  Kubernetes distributions and select Open Source software"
          },
          {
            title: "Kubernetes Operator Development & Support"
          },
          {
            title:
              "Migrations from on-premise to Cloud, Cloud to Cloud and Cloud to On Premise."
          },
          {
            title: "Production Readiness & Resilience Assessments"
          },
          {
            title: "Self-service, secure DevOps pipeline setup "
          }
        ]}
        className="pt-20 pb-12"
      />

      <CardSection />

      <HeaderSimpleCentered
        title="Unlimited scaling to fit your exact needs"
        description={
          <>
            Unlike many service providers, <b>flank</b>source offers unlimited
            scalability with monthly support credits based on your technology
            needs. Zero license fees or service contracts to get started.
          </>
        }
        className="py-20 pt-32 lg:pt-40 lg:py-24"
      />

      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
      />
      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
      />
      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
          </>
        }
        imageSrc={
          "https://d33wubrfki0l68.cloudfront.net/f419aba6979c68bf503e2c13505ab3a28202b11b/173b8/assets/img/resilience-review.svg"
        }
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </>
        }
        className="py-12 lg:py-20"
        noBorder
        noOverflow
      />
      <LogoCloud
        title="Technologies we Love"
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
            src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
            alt: "Mirage"
          },
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
            src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
            alt: "Workcation"
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
          },
          {
            src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
            alt: "Tuple"
          },

          {
            src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
            alt: "Mirage"
          }
        ]}
        className={"py-20"}
      />
    </DefaultLayout>
  );
}
