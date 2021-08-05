import React from "react";
import { useHistory } from "react-router";
import { routes } from "../../routes";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      Home!
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
    </div>
  );
}
