import TestPage1 from "./pages/TestPage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";

const prefix = process.env.NODE_ENV === "production" ? "/v2" : "";

export const routes = {
  home: {
    path: `${prefix}/`,
    exact: true,
    component: <Home />
  },
  about: {
    name: "About",
    exact: true,
    path: `${prefix}/about`,
    component: <About />
  },
  services: {
    name: "Services",
    exact: true,
    path: `${prefix}/kubernetes-services`,
    component: <Services />
  },
  openSource: {
    name: "Open Source",
    exact: true,
    path: `${prefix}/open-source`,
    component: <TestPage1 />
  },
  careers: {
    name: "Careers",
    exact: true,
    path: `${prefix}/careers`,
    component: <Careers />
  },
  blog: {
    name: "Blog",
    exact: true,
    path: `${prefix}/blog`,
    component: <TestPage1 />
  },
  contact: {
    name: "Contact",
    exact: true,
    path: `${prefix}/contact`,
    component: <TestPage1 />
  }
};

export const routeList = Object.keys(routes);
