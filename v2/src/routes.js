import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import Home from "./pages/Home";

const prefix = process.env.NODE_ENV === "production" ? "/v2" : "";

export const routes = {
  home: {
    path: `${prefix}/`,
    exact: true,
    component: <Home />
  },
  testOne: {
    path: `${prefix}/testOne`,
    exact: true,
    component: <TestPage1 />
  },
  testTwo: {
    path: `${prefix}/testTwo`,
    exact: true,
    component: <TestPage2 />
  }
};

export const routeList = Object.keys(routes);
