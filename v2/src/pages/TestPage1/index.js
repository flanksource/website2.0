import React from "react";
import { useHistory } from "react-router";

export default function TestPage1() {
  const history = useHistory();

  return (
    <div>
      test page one
      <div>
        <button
          onClick={() => {
            console.log("going page 2");
            history.push("/v2/reactTest2");
          }}
        >
          go to page 2
        </button>
      </div>
    </div>
  );
}
