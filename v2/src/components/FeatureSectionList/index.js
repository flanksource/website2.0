// Example features:
//
// [
//   {
//     title: "Invite team members",
//     description:
//       "You can manage phone, email and chat conversations all from a single mailbox."
//   },
//   {
//     title: "List view",
//     description:
//       "You can manage phone, email and chat conversations all from a single mailbox."
//   },
//   {
//     title: "Keyboard shortcuts",
//     description:
//       "You can manage phone, email and chat conversations all from a single mailbox."
//   },
//   {
//     title: "Calendars",
//     description:
//       "You can manage phone, email and chat conversations all from a single mailbox."
//   }
// ];

import { CheckIcon } from "@heroicons/react/outline";

export default function FeatureSectionList({
  features,
  caption,
  title,
  subtitle,
  className,
  dark,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          {caption && (
            <h2
              className={`text-base font-semibold uppercase tracking-wide ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {caption}
            </h2>
          )}
          <p
            className={`text-3xl font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </p>
          <p
            className={`mt-4 text-lg ${
              dark ? "text-gray-200" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div className="mt-12 lg:mt-2 lg:col-span-2">
          <div className="flex flex-col space-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative ml-0 lg:ml-16">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p
                    className={`ml-9 text-lg leading-6 font-medium ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </p>
                </dt>
                {feature.description && (
                  <dd className="mt-2 ml-9 text-base text-gray-500">
                    {feature.description}
                  </dd>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
