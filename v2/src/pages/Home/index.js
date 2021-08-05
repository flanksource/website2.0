import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

export default function Home() {
  const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      Home!
      <div>env: {env}</div>
    </DefaultLayout>
  );
}
