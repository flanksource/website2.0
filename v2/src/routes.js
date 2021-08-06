import TestPage1 from "./pages/TestPage";
import Home from "./pages/Home";
import Services from "./pages/Services";

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
    component: <TestPage1 />
  },
  services: {
    name: "Services",
    exact: true,
    path: `${prefix}/services`,
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
    component: <TestPage1 />
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
