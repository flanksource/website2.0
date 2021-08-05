import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

export default function TestPage() {
  const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      Test Page!
      <div>env: {env}</div>
    </DefaultLayout>
  );
}
