import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import { BlogIndex } from "./pages/Blog";
import { BlogOne } from "./pages/Blog/contributingFactorsToFailure";
import { BlogTwo } from "./pages/Blog/kubernetesIsNotAContainerOrchestrator";
import { BlogThree } from "./pages/Blog/launchingFlanksource";
import DiscoveryCaseStudy from "./pages/CaseStudy";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import UnderConstruction from "./pages/UnderConstruction";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions";

import controlLoopHeroImg from "./assets/images/illustrations/control-loop-hero.jpg";
import lighthouseImg from "./assets/images/backgrounds/lighthouse_milkyway.jpg";

export const blogRoutes = {
  blogOne: {
    name: "Contributing factors to failure",
    exact: true,
    path: `/blog/contributing-factors-to-failure`,
    component: <BlogOne />,
    imgSrc: controlLoopHeroImg,
    desc: "Investigating a dataset for common contributing factors to outages."
  },
  blogTwo: {
    name: "Kubernetes is NOT a container orchestrator",
    exact: true,
    path: `/blog/kubernetes-is-not-a-container-orchestrator`,
    component: <BlogTwo />,
    imgSrc: controlLoopHeroImg,
    desc: "It is a common misconception that Kubernetes is just a container orchestrator, it is so much more."
  },
  blogThree: {
    name: "Launching flanksource",
    exact: true,
    path: `/blog/launching-flanksource`,
    component: <BlogThree />,
    imgSrc: lighthouseImg,
    desc: "Flanksource launched in January 2020 as a lean-first company focusing exclusively on Kubernetes."
  }
};

export const routes = {
  home: {
    path: `/`,
    exact: true,
    component: <Home />
  },
  about: {
    name: "About",
    exact: true,
    path: `/about`,
    component: <About />
  },
  services: {
    name: "Services",
    exact: true,
    path: `/kubernetes-services`,
    component: <Services />
  },
  // is this page still needed?
  openSource: {
    name: "Open Source",
    exact: true,
    path: `/open-source`,
    component: <UnderConstruction /> // @TODO: update this when open source page is ready
  },
  careers: {
    name: "Careers",
    exact: true,
    path: `/careers`,
    component: <Careers />
  },
  privacy: {
    name: "Privacy",
    exact: true,
    path: `/privacy`,
    component: <Privacy />
  },
  termsAndConditions: {
    name: "Terms And Conditions",
    exact: true,
    path: `/terms`,
    component: <TermsAndConditions />
  },
  blog: {
    name: "Blog",
    exact: true,
    path: `/blog`,
    component: <BlogIndex />
  },
  ...blogRoutes,
  contact: {
    name: "Contact",
    exact: true,
    path: `/contact`,
    component: <ContactPage />
  },
  discoveryCTA: {
    name: "Discovery Case Study",
    exact: true,
    path: `/case-study/discovery`,
    component: <DiscoveryCaseStudy />
  },
  UnderConstruction: {
    name: "Page not Found",
    path: "*",
    component: <UnderConstruction />
  },
  noMatch: {
    name: "Page not Found",
    path: "*",
    component: <NotFoundPage />
  }
};

export const routeList = Object.keys(routes);
