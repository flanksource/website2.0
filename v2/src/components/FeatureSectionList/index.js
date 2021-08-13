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

export default function FeatureSectionList({
  features,
  caption,
  title,
  subtitle,
  className,
  variant,
  dark,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <div
        className={`${
          variant === "horizontal"
            ? "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
        }`}
      >
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
            } ${variant === "horizontal" ? " text-center" : ""}`}
          >
            {title}
          </p>
          <p
            className={`mt-4 text-lg ${
              dark ? "text-gray-200" : "text-gray-500"
            } ${variant === "horizontal" ? " text-center" : ""}`}
          >
            {subtitle}
          </p>
        </div>
        <div
          className={`${
            variant === "horizontal"
              ? "mt-12 flex justify-center"
              : "mt-12 lg:mt-0 "
          } lg:col-span-2`}
        >
          <div
            className={`${
              variant === "horizontal" ? "max-w-4xl" : ""
            } flex flex-col space-y-6`}
          >
            {features.map((feature) => (
              <div key={feature.name} className="relative ml-0 lg:ml-16">
                <div className="flex">
                  <div aria-hidden="true">{feature.icon}</div>
                  <p
                    className={`ml-4 text-lg leading-6 font-medium ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>

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
