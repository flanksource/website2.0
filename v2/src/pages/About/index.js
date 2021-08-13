import DefaultLayout from "../../layout/DefaultLayout";

import Team from "../../components/Team";

const advisors = [
  {
    name: "Josef Langerman",
    imageUrl: "/team/josef.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Pierre Meyer",
    imageUrl: "/team/pierre.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  }
];
const people = [
  {
    name: "Brendan Galloway",
    role: "Sr Site Reliability Engineer",
    imageUrl: "/team/brendan.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "John Goh Rengwu",
    role: "Frontend Engineer",
    imageUrl: "/team/john.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Junaid Ebrahim",
    role: "Sr Site Reliability Engineer",
    imageUrl: "/team/junaid.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Kyle Robbertze",
    role: "Copywriter",
    imageUrl: "/team/kyle.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },

  {
    name: "Frumie Immerman",
    role: "People & Ops",
    imageUrl: "/team/frumie.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Moshe Immerman",
    role: "Founder & CKO",
    imageUrl: "/team/moshe.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Saul Nachman",
    role: "Sr Site Reliability Engineer",
    imageUrl: "/team/saul.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Tarun Khandelwal",
    role: "Site Reliability Engineer",
    imageUrl: "/team/tarun.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Teodor Pripoae",
    role: "Sr Site Reliability Engineer",
    imageUrl: "/team/toni.jpg",
    twitterUrl: "#",
    linkedinUrl: "#"
  }
];

const features = [
  {
    name: "Expertise",
    description: (
      <>
        We’re a proactive group of experienced CKA-certified principal and
        senior site reliability engineers (SREs) with a combined 35 years of
        DevOps under our belts. We’re not afraid of complexity; in fact, we
        embrace it.
      </>
    )
    // icon:
  },
  {
    name: "Collaboration",
    description:
      "We go above and beyond to customize solutions for both small teams and large enterprises. We act as an extension of your team to get the work done."

    // icon: <UsersIcon />
  },
  {
    name: "A GyShiDo work ethic",
    description: (
      <>
        We’re powered by relentless focus and an aversion to agenda-less
        meetings. We zero in on a single task, embrace boring consistency, and
        see projects through to completion.
      </>
    )
    // icon: <GyshidoIcon />
  }
];

export default function About() {
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-500"></p>
        </div>
      </div>

      {/*
      <div
        className="relative bg-blue-800 overflow-hidden pt-12 pb-24 sm:pb-32"
        style={{
          backgroundImage: `url('${backgroundImageSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "hard-light",
          backgroundColor: "#4b5f77"
        }}
      >
        <div className="mt-8 sm:mt-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col-reverse lg:flex-row lg:w-9/12 2xl:w-10/12">
              <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:text-left lg:items-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-4xl xl:text-5xl">
                  <span className="md:block">About Us</span>{" "}
                </h1>
              </div></div>
          </div></div></div> */}

      <div className="bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Values.
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-500">
                We value diversity and the ability to get stuff done.
              </p>
            </div>
            <Team people={people} />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Advisors
              </h2>
              <p className="text-xl text-gray-500">
                {/* We value diversity and the ability to get stuff done. */}
              </p>
            </div>
            <Team people={advisors} />
          </div>
        </div>
      </div>
      {/* <Contact /> */}

      <div className="relative py-16 bg-white">
        <div
          className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Want to Join the Flanksource Team? We’re Hiring!
                </h2>
                <p className="text-lg text-white">
                  {/* Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                  dui laoreet diam sed lacus, fames. */}
                </p>
                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href="/careers"
                >
                  Explore open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
