import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import LogoCloud from "../../components/LogoCloud";
import LinkButton from "../../components/LinkButton";
import FeatureSectionList from "../../components/FeatureSectionList";
import FeatureSectionImage from "../../components/FeatureSectionImage";
import FullWidthSection from "../../components/FullWidthSection";
import Contact from "../../components/Contact";
import FeatureSectionImageCard from "../../components/FeatureSectionImageCard";
import KCSPLogoAnimated from "../../components/KCSPLogoAnimated";

import {
  ChatIcon,
  UsersIcon,
  CheckIcon,
  CollectionIcon
} from "@heroicons/react/outline";

import aksImage from "../../assets/images/logos/aks.png";
import antreaImage from "../../assets/images/logos/antrea.svg";
import argoImage from "../../assets/images/logos/argo.svg";
import awsImage from "../../assets/images/logos/aws.svg";
import azureImage from "../../assets/images/logos/azure.png";
import azureDevOpsImage from "../../assets/images/logos/azureDevOps.png";
import calicoImage from "../../assets/images/logos/calico.png";
import cassandraImage from "../../assets/images/logos/cassandra.png";
import certManagerImage from "../../assets/images/logos/certManager.svg";
import ciliumImage from "../../assets/images/logos/cilium.svg";
import dexImage from "../../assets/images/logos/dex.png";
import dynatraceImage from "../../assets/images/logos/dynatrace.png";
import eksImage from "../../assets/images/logos/eks.svg";
import elasticImage from "../../assets/images/logos/elastic.png";
import etcdImage from "../../assets/images/logos/etcd.png";
import fluxImage from "../../assets/images/logos/flux.svg";
import gcpImage from "../../assets/images/logos/gcp.png";
import githubImage from "../../assets/images/logos/github.png";
import gitlabImage from "../../assets/images/logos/gitlab.svg";
import goImage from "../../assets/images/logos/go.svg";
import grafanaImage from "../../assets/images/logos/grafana.svg";
import harborImage from "../../assets/images/logos/harbor.png";
import istioImage from "../../assets/images/logos/istio.svg";
import javaImage from "../../assets/images/logos/java.svg";
import javascriptImage from "../../assets/images/logos/javascript.svg";
import jenkinsImage from "../../assets/images/logos/jenkins.svg";
import k8sImage from "../../assets/images/logos/k8s.png";
import kafkaImage from "../../assets/images/logos/kafka.svg";
import karinaImage from "../../assets/images/logos/karina.png";
import kopsImage from "../../assets/images/logos/kops.svg";
import kubeadmImage from "../../assets/images/logos/kubeadm.png";
import nginxImage from "../../assets/images/logos/nginx.png";
import nsxImage from "../../assets/images/logos/nsx.svg";
import opaImage from "../../assets/images/logos/opa.svg";
import opengitopsImage from "../../assets/images/logos/opengitops.svg";
import openshiftImage from "../../assets/images/logos/openshift.png";
import postgresImage from "../../assets/images/logos/postgres.svg";
import prometheusImage from "../../assets/images/logos/prometheus.svg";
import pythonImage from "../../assets/images/logos/python.svg";
import rancherImage from "../../assets/images/logos/rancher.svg";
import redisImage from "../../assets/images/logos/redis.svg";
import sonobuoyImage from "../../assets/images/logos/sonobuoy.svg";
import springbootImage from "../../assets/images/logos/springboot.svg";
import tanzuImage from "../../assets/images/logos/tanzu.png";
import tektonImage from "../../assets/images/logos/tekton.png";
import terraformImage from "../../assets/images/logos/terraform.png";
import thanosImage from "../../assets/images/logos/thanos.png";
import vaultImage from "../../assets/images/logos/vault.png";
import veleroImage from "../../assets/images/logos/velero.png";
import vsphereImage from "../../assets/images/logos/vsphere.svg";

import ada from "../../assets/images/customers/ada.png";
import discovery from "../../assets/images/customers/discovery.svg";
import bcb from "../../assets/images/customers/bcb.png";
import om from "../../assets/images/customers/old-mutual.png";

import quickstartImage from "../../assets/images/illustrations/quickstart.svg";
import internalPlatformsImage from "../../assets/images/illustrations/internal-platforms.svg";
import platformOperationsImage from "../../assets/images/illustrations/platform-operations.svg";
import cloudDevopsImage from "../../assets/images/illustrations/cloud-devops-acceleration.svg";
import costValueImage from "../../assets/images/illustrations/cost-value.svg";
import resilienceReviewImage from "../../assets/images/illustrations/resilience-review.svg";

import { ReactComponent as OpenGitOpsIcon } from "../../assets/images/logos/opengitops.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/support.svg";
import { ReactComponent as CheckListIcon } from "../../assets/icons/checklist.svg";
import { ReactComponent as OperatorIcon } from "../../assets/icons/operator-support.svg";
import { ReactComponent as PushButtonIcon } from "../../assets/icons/push-button.svg";
import { ReactComponent as MigrateIcon } from "../../assets/icons/migrate.svg";

import { routes } from "../../routes";
import HeaderSimpleCentered from "../../components/HeaderSimpleCentered";
import backgroundImageSrc from "../../assets/images/backgrounds/lighthouse_milkyway_cropped_adjusted_resized.jpg";
import SiteHeader from "../../components/SiteHeader";

export default function Services() {
  return (
    <DefaultLayout headerShowOffset={400}>
      <SiteHeader theme="transparent-dark" className="absolute w-full" />
      <main>
        <div
          className="relative bg-blue-800 overflow-hidden pt-32 pb-24 sm:pb-32"
          style={{
            backgroundImage: `url('${backgroundImageSrc}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "hard-light",
            backgroundColor: "#4b5f77"
          }}
        >
          <div className="mt-8 sm:mt-16">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col-reverse lg:flex-row lg:w-9/12 2xl:w-10/12">
                <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:text-left lg:items-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-4xl xl:text-5xl">
                    <span className="md:block">Flexible, Personalized</span>{" "}
                    <span className="text-blue-400 md:block">
                      Kubernetes services
                    </span>
                  </h1>
                  <div className="mt-3 sm:mt-5">
                    <div className="text-base text-white sm:text-xl lg:text-lg xl:text-xl ">
                      <b>flank</b>source makes it easy to build, manage, and
                      operate a secure, open-source Kubernetes-based platform.
                    </div>

                    <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
                      <LinkButton href={routes.discoveryCTA.path} theme="light">
                        Read the case study
                      </LinkButton>
                      <LinkButton href={routes.contact.path} theme="dark">
                        Get started
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="mb-8 lg:mb-0">
                  <div className="h-full flex justify-center align-middle">
                    <KCSPLogoAnimated className="w-1/3 sm:w-1/5 lg:w-4/6 object-contain max-w-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LogoCloud
          title="Happy Teams"
          srcList={[
            {
              src: ada
            },
            {
              src: discovery
            },
            {
              src: bcb
            },
            {
              src: om
            }
          ]}
          className={"py-20 bg-gray-50 filter grayscale"}
        />

        <FeatureSectionList
          title="Resilient Kubernetes. On your terms"
          subtitle="We use SRE and GitOps principles to optimise pipelines and deliver safe and tested clusters."
          features={[
            {
              title: "Reduce your Kubernetes total cost of ownership",
              icon: <CheckIcon className="w-6 h-6 text-green-500" />
            },
            {
              title: "Increase your resilience against production failures",
              icon: <CheckIcon className="w-6 h-6 text-green-500" />
            },
            {
              title: "Accelerate your delivery",
              icon: <CheckIcon className="w-6 h-6 text-green-500" />
            },
            {
              title: "Improve your team’s knowledge & skills",
              icon: <CheckIcon className="w-6 h-6 text-green-500" />
            },

            {
              title:
                "Access baked-in tools & best practices with known good configuration",
              icon: <CheckIcon className="w-6 h-6 text-green-500" />
            }
          ]}
          className="py-32 lg:py-40"
        />
        <FeatureSectionImage
          title="Seamless Collaboration and Delivery"
          iconClassName="bg-blue-500 text-white"
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
                  We’re available in your chat-rooms
                  <div>(Slack or MS Teams)</div>
                </>
              ),
              icon: <ChatIcon />
            },
            {
              name: "Joint Standups",
              description:
                "We join your standups to keep up-to-date about your environment",

              icon: <UsersIcon />
            },
            {
              name: "Issue Tracking",
              description: (
                <>
                  Assign tasks directly to your extended team directly in the
                  issue tracker of your choice. (Jira, ClickUp, etc)
                </>
              ),
              icon: <CollectionIcon />
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          className="bg-gray-50 pb-8"
        />

        <FeatureSectionList
          title="Kubernetes, Simplified"
          variant="horizontal"
          subtitle={
            <>
              Streamlined, cost-effective platform solutions – customised for
              your business.
            </>
          }
          features={[
            {
              title: (
                <div className="mt-3">
                  GitOps-based Setup and configuration of Kubernetes platforms
                  across the cloud, bare metal, and on-premises
                </div>
              ),
              icon: <OpenGitOpsIcon className="w-12 h-12 mr-4" />
            },
            {
              title: (
                <div className="mt-3">
                  Extended production-grade support for all Kubernetes
                  distributions and select Open Source software
                </div>
              ),
              icon: <SupportIcon className="w-12 h-12 mr-4" />
            },
            {
              title: (
                <div className="mt-3">
                  Kubernetes Operator Development & Support
                </div>
              ),
              icon: <OperatorIcon className="w-12 h-12 mr-4" />
            },
            {
              title: (
                <div className="mt-3">
                  Migrations from on-premise to Cloud, Cloud to Cloud and Cloud
                  to On Premise.
                </div>
              ),
              icon: <MigrateIcon className="w-12 h-12 mr-4" />
            },
            {
              title: (
                <div className="mt-3">
                  Production Readiness & Resilience Assessments
                </div>
              ),
              icon: <CheckListIcon className="w-12 h-12 mr-4" />
            },
            {
              title: (
                <div className="mt-3">
                  Self-service, secure DevOps pipeline setup{" "}
                </div>
              ),
              icon: <PushButtonIcon className="w-12 h-12 mr-4" />
            }
          ]}
          className="py-24 lg:py-32"
        />

        <FullWidthSection
          caption="Customer Story:"
          title="From slowed deployment to a secure on-premise platform"
          description="See how flanksource streamlined and improved the Kubernetes
      infrastructure for a leading insurance and financial services
      company."
          actions={
            // @TODO: fix this to the correct path
            <LinkButton theme="light" href={routes.discoveryCTA.path}>
              Read the case study
            </LinkButton>
          }
          className="mb-16 py-4"
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
          className="py-12 pb-20 lg:pb-28 lg:py-20"
        />

        <FeatureSectionImageCard
          id="quick-start"
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
                  Accelerated, guardrail-driven onboarding of new applications
                  and teams
                </li>
              </ul>
            </>
          }
          imageSrc={quickstartImage}
          actions={
            <div className="flex flex-col items-start md:flex-row space-y-4 md:space-y-0 space-y-0 md:space-x-4">
              <LinkButton href={routes.contact.path}>Get Started</LinkButton>
              <LinkButton
                href="https://github.com/flanksource/karina"
                theme="secondary"
              >
                Meet Karina, our flagship toolkit
              </LinkButton>
            </div>
          }
          className="py-16 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          id="internal-platform-development"
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
              <LinkButton href="https://github.com/flanksource/template-operator-library">
                Browse our template library
              </LinkButton>
            </>
          }
          className="py-16"
          noBorder
          noOverflow
        />
        <FeatureSectionImageCard
          id="managed-services"
          title="Managed Services"
          description={
            <>
              For teams without the capability or capacity for production
              operations, get end-to-end service based on an SRE mindset and
              principles.
              <ul className="py-4 list-disc space-y-2 list-inside">
                <li>24/7/365 availability</li>
                <li>Two-Tier Oncall</li>
              </ul>
              You get a dedicated email address linked to our OpsGenie on-call
              rotation, enabling rapid response. Optionally, we join your
              on-call system.
            </>
          }
          imageSrc={platformOperationsImage}
          actions={
            <div className="space-x-4">
              <LinkButton href={routes.contact.path}>Get Started</LinkButton>
              <LinkButton
                href="https://github.com/flanksource/canary-checker"
                theme="secondary"
              >
                Explore Canary Checker
              </LinkButton>
            </div>
          }
          className="py-16 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          id="migrations"
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
              <LinkButton
                to="/" // @TODO: Change to a correct link
              >
                Get Started
              </LinkButton>
            </>
          }
          className="py-16"
          noBorder
          noOverflow
        />
        <FeatureSectionImageCard
          id="cloud-and-devops"
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
              <LinkButton
                to="/" // @TODO: Change to a correct link
              >
                Get Started
              </LinkButton>
            </>
          }
          className="py-16 bg-gray-50"
          noBorder
          noOverflow
          flipped
        />
        <FeatureSectionImageCard
          id="resilience-assement"
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
            <div className="flex flex-col items-start md:flex-row space-y-2 md:space-y-0 space-y-0 md:space-x-4">
              <LinkButton
                to="/" // @TODO: Change to a correct link
              >
                Get Started
              </LinkButton>
              <LinkButton
                to="/404" // @TODO: Change to a correct link
                theme="secondary"
              >
                Learn about the science behind resilience
              </LinkButton>
            </div>
          }
          className="py-16"
          noBorder
          noOverflow
        />
        <LogoCloud
          title="Technologies we Love"
          srcList={[
            { src: k8sImage, alt: "k8s.png", title: "Kubernetes" },
            { src: kubeadmImage, alt: "kubeadm.png", title: "kubeadm" },
            { src: kopsImage, alt: "kops.svg", title: "kops" },
            { src: aksImage, alt: "aks.png", title: "aks" },
            { src: eksImage, alt: "eks.svg", title: "eks" },
            { src: tanzuImage, alt: "tanzu.png", title: "tanzu" },
            { src: openshiftImage, alt: "openshift.png", title: "openshift" },
            { src: rancherImage, alt: "rancher.png", title: "rancher" },
            { src: awsImage, alt: "aws.svg", title: "aws" },
            { src: gcpImage, alt: "gcp.png", title: "gcp" },
            { src: azureImage, alt: "azure.png", title: "azure" },
            { src: vsphereImage, alt: "vsphere.svg", title: "vsphere" },
            { src: nginxImage, alt: "nginx.png", title: "nginx" },
            { src: calicoImage, alt: "calico.png", title: "calico" },
            { src: antreaImage, alt: "antrea.svg", title: "antrea" },
            { src: ciliumImage, alt: "cilium.svg", title: "cilium" },
            { src: nsxImage, alt: "nsx.svg", title: "nsx" },
            { src: istioImage, alt: "istio.svg", title: "istio" },
            {
              src: certManagerImage,
              alt: "certManager.svg",
              title: "certManager"
            },
            { src: dexImage, alt: "dex.png", title: "dex" },
            { src: vaultImage, alt: "vault.png", title: "vault" },
            { src: opaImage, alt: "opa.svg", title: "opa" },
            { src: dynatraceImage, alt: "dynatrace.png", title: "dynatrace" },
            {
              src: prometheusImage,
              alt: "prometheus.svg",
              title: "prometheus"
            },
            { src: grafanaImage, alt: "grafana.svg", title: "grafana" },
            { src: thanosImage, alt: "thanos.png", title: "thanos" },
            { src: elasticImage, alt: "elastic.png", title: "elastic" },
            {
              src: opengitopsImage,
              alt: "opengitops.svg",
              title: "opengitops"
            },
            { src: fluxImage, alt: "flux.svg", title: "flux" },
            { src: argoImage, alt: "argo.svg", title: "argo" },
            { src: gitlabImage, alt: "gitlab.svg", title: "gitlab" },
            { src: githubImage, alt: "github.png", title: "github" },
            {
              src: azureDevOpsImage,
              alt: "azureDevOps.png",
              title: "azureDevOps"
            },
            { src: tektonImage, alt: "tekton.png", title: "tekton" },
            { src: harborImage, alt: "harbor.png", title: "harbor" },
            { src: jenkinsImage, alt: "jenkins.svg", title: "jenkins" },
            { src: cassandraImage, alt: "cassandra.png", title: "cassandra" },
            { src: kafkaImage, alt: "kafka.svg", title: "kafka" },
            { src: postgresImage, alt: "postgres.svg", title: "postgres" },
            { src: redisImage, alt: "redis.svg", title: "redis" },
            { src: karinaImage, alt: "karina.png", title: "karina" },
            { src: goImage, alt: "go.svg", title: "go" },
            { src: javaImage, alt: "java.svg", title: "java" },
            {
              src: javascriptImage,
              alt: "javascript.svg",
              title: "javascript"
            },
            { src: pythonImage, alt: "python.svg", title: "python" },
            {
              src: springbootImage,
              alt: "springboot.svg",
              title: "springboot"
            },
            { src: terraformImage, alt: "terraform.png", title: "terraform" },
            { src: etcdImage, alt: "etcd.png", title: "etcd" },
            { src: sonobuoyImage, alt: "sonobuoy.png", title: "sonobuoy" },
            { src: veleroImage, alt: "velero.png", title: "velero" }
          ]}
          className="py-20 bg-gray-50"
        />

        <Contact />
      </main>
    </DefaultLayout>
  );
}
