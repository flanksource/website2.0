import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import HeaderWithMedia from "../../components/HeaderWithMedia";
import LogoCloud from "../../components/LogoCloud";
import LinkButton from "../../components/LinkButton";
import FeatureSectionList from "../../components/FeatureSectionList";
import FeatureSectionGrid from "../../components/FeatureSectionGrid";
import FeatureSectionImage from "../../components/FeatureSectionImage";
import CardSection from "../../components/CardSection";
import FeatureSectionImageCard from "../../components/FeatureSectionImageCard";
import { Link } from "react-router-dom";

import {
  CurrencyDollarIcon,
  TrendingUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  LightningBoltIcon
} from "@heroicons/react/outline";

import quickstartImage from "../../assets/images/illustrations/quickstart.svg";
import internalPlatformsImage from "../../assets/images/illustrations/internal-platforms.svg";
import platformOperationsImage from "../../assets/images/illustrations/platform-operations.svg";
import cloudDevopsImage from "../../assets/images/illustrations/cloud-devops-acceleration.svg";
import costValueImage from "../../assets/images/illustrations/cost-value.svg";
import resilienceReviewImage from "../../assets/images/illustrations/resilience-review.svg";

import { routes } from "../../routes";
import HeaderSimpleCentered from "../../components/HeaderSimpleCentered";

export default function Services() {
  // const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      <HeaderWithMedia
        title={
          <>
            <span className="md:block">Flexible, Personalized</span>
            <span className="text-indigo-400 md:block">
              Kubernetes services
            </span>
          </>
        }
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
        media={<>test</>}
      />
      {/* <HeaderWithBackground
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
      /> */}

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
        className={"py-20 bg-gray-50"}
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
        className="pt-20 lg:pt-28 pb-28"
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
        className="bg-gray-50 pb-8"
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
        className="pt-8 pb-12"
      />

      <CardSection
        caption="Customer Story:"
        title="From slowed deployment to a secure on-premise platform"
        description="See how flanksource streamlined and improved the Kubernetes
      infrastructure for a leading insurance and financial services
      company."
        actions={
          <Link
            to="/" // @TODO: Change to a correct link
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-indigo-50"
          >
            Read the case study
          </Link>
        }
        className="pb-24"
      />

      <HeaderSimpleCentered
        title="Unlimited scaling to fit your exact needs"
        description={
          <>
            Unlike many service providers, <b>flank</b>source offers unlimited
            scalability with monthly support credits based on your technology
            needs. Zero license fees or service contracts to get started.
          </>
        }
        className="pt-8 lg:pt-20"
      />

      <FeatureSectionImageCard
        title="Kubernetes Quickstart"
        description={
          <>
            Be production ready in 60 days. GitOps managed clusters on-premise
            or in the cloud and delivered via the IaC tooling of your choice.
            <ul className="mt-4 list-disc list-outside ml-6 space-y-2">
              <li>Production-grade with built-in security and monitoring</li>
              <li>
                Operational playbooks for day-to-day operations and disaster
                recovery
              </li>
              <li>
                Accelerated, guardrail-driven onboarding of new applications and
                teams
              </li>
            </ul>
          </>
        }
        imageSrc={quickstartImage}
        actions={
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-y-0 md:space-x-4">
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex self-start whitespace-nowrap px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex self-start whitespace-nowrap px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm border-gray-400"
            >
              Meet Karina, our flagship toolkit
            </Link>
          </div>
        }
        className="py-12 lg:py-16"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Internal Platform Development"
        description={
          <>
            Internal Platform development and operations raises the watermark,
            freeing developers from the need to become experts in CI/CD and
            infrastructure, letting them focus on delivering better business
            value.
          </>
        }
        imageSrc={internalPlatformsImage}
        actions={
          <>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse our template library
            </Link>
          </>
        }
        className="py-12 lg:py-16"
        noBorder
        noOverflow
      />
      <FeatureSectionImageCard
        title="Managed Services"
        description={
          <>
            For teams without the capability or capacity for production
            operations, get end-to-end service based on an SRE mindset and
            principles.
            <ul className="py-6 list-disc space-y-2 list-inside">
              <li>
                <b>24/7/365 availability</b>
              </li>
              <li>
                <b>Two-Tier Oncall</b>
              </li>
            </ul>
            You get a dedicated email address linked to our OpsGenie on-call
            rotation, enabling rapid response. Optionally, we join your on-call
            system.
          </>
        }
        imageSrc={platformOperationsImage}
        actions={
          <div className="space-x-4">
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm border-gray-400"
            >
              Explore Canary Checker
            </Link>
          </div>
        }
        className="py-12 lg:py-16"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Kubernetes Migrations"
        description={
          <>
            Migrating from on-premise, another cloud, or a less mature cloud
            environment.
          </>
        }
        imageSrc={cloudDevopsImage}
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
        className="py-12 lg:py-16"
        noBorder
        noOverflow
      />
      <FeatureSectionImageCard
        title="Cloud & Dev-Ops Strategy Development"
        description={
          <>
            Get the most out of your Kubernetes with actionable cloud and
            vendor-agnostic recommendations for short, medium and long-term
            value optimization.
          </>
        }
        imageSrc={costValueImage}
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
        className="py-12 lg:py-16"
        noBorder
        noOverflow
        flipped
      />
      <FeatureSectionImageCard
        title="Resilience & operational assessments"
        description={
          <>
            Address resilience from multiple angles. Fully customized
            operational readiness checklist, resilience reviews & built-in
            safety assessments.
          </>
        }
        imageSrc={resilienceReviewImage}
        actions={
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-y-0 md:space-x-4">
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex self-start whitespace-nowrap px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/" // @TODO: Change to a correct link
              className="inline-flex self-start whitespace-nowrap px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm border-gray-400"
            >
              Learn about the science behind resilience
            </Link>
          </div>
        }
        className="py-12 lg:py-16"
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
        className="bg-gray-50 py-20"
      />
    </DefaultLayout>
  );
}
