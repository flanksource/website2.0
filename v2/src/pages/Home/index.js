import React from "react";
import { useHistory } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import { routes } from "../../routes";

export default function Home() {
  const history = useHistory();

  const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      Home!
      <div>env: {env}</div>
      <div>
        <button
          onClick={() => {
            console.log("going page 2");
            history.push(routes.testTwo.path);
          }}
        >
          go to page 2
        </button>
      </div>
    </DefaultLayout>
  );
}
