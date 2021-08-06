import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import LogoCloud from "../../components/LogoCloud";
import LinkButton from "../../components/LinkButton";
import FeatureListSection from "../../components/FeatureListSection";
import FeatureSectionGrid from "../../components/FeatureSectionGrid";

import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";

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
              <LinkButton href="/contact" theme="light">
                Read the case study
              </LinkButton>
              <LinkButton href="/contact" theme="dark">
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
      />

      <FeatureListSection
        features={[
          {
            title: "Reduce your Kubernetes total cost of ownership"
          },
          {
            title: "Increase your resilience against production failures"
          },
          {
            title: "Accelerate your delivery"
          },
          {
            title: "Improve your team’s knowledge & skills"
          },

          {
            title:
              "Access baked-in tools & best practices with known good configuration"
          }
        ]}
        title="Resilient Kubernetes. On your terms"
        subtitle="We use SRE and GitOps principles to optimise pipelines and deliver safe and tested clusters."
      />

      <FeatureSectionGrid
        features={[
          {
            name: "Chat",
            description: (
              <>
                We’re available in your chat-rooms<div>(Slack or MS Teams)</div>
              </>
            ),
            icon: InboxIcon
          },
          {
            name: "Joint Standups",
            description:
              "We join your standups to keep up-to-date about your environment",
            icon: UsersIcon
          },
          {
            name: "Issue Tracking",
            description: (
              <>
                Assign tasks directly to your extended team directly in the
                issue tracker of your choice. <div>(Jira, ClickUp, etc)</div>
              </>
            ),
            icon: TrashIcon
          }
        ]}
        title="Seamless collaboration and delivery"
        subtitle={
          <>
            <b>flank</b>source extends your team with CKA-certified principal
            and senior site reliability engineers (SREs). A proactive,
            development-focused approach to operations means we integrate into
            your environment. Not the other way around.
          </>
        }
        className="bg-indigo-700"
      />
    </DefaultLayout>
  );
}
