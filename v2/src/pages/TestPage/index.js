import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Container from "../../components/Container";

export default function TestPage() {
  // eslint-disable-next-line no-undef
  const env = process.env.NODE_ENV;

  return (
    <DefaultLayout>
      <Container>
        <div className="mt-12">
          <div className="text-3xl font-extrabold text-gray-900">Test Page</div>
          <div>env: {env}</div>
        </div>
      </Container>
    </DefaultLayout>
  );
}
