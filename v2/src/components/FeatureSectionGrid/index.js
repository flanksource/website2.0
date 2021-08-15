// Example features:
//
// const features = [
//   {
//     name: "Unlimited Inboxes",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: InboxIcon
//   },
//   {
//     name: "Manage Team Members",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: UsersIcon
//   },
//   {
//     name: "Spam Report",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: TrashIcon
//   }
// ];

export default function FeatureSectionGrid({
  features,
  title,
  subtitle,
  className,
  dark,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
        <h2
          className={`text-3xl font-extrabold tracking-tight flex justify-center text-center ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-lg text-center ${
            dark ? "text-indigo-200 " : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
        <div className="mt-4 lg:mt-8 flex flex-wrap justify-center">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="w-full max-w-xs pt-8 pb-4 md:mb-6 md:pr-6 "
            >
              <div className="flex justify-center">
                <span
                  className={`flex items-center justify-center h-14 w-14 rounded-md bg-opacity-10 ${
                    dark ? "bg-white" : "bg-gray-500"
                  }`}
                >
                  {feature.icon}
                </span>
              </div>
              <div className="mt-4 text-center">
                <h3
                  className={`text-lg font-medium ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.name}
                </h3>
                <p
                  className={`mt-1 text-base ${
                    dark ? "text-indigo-200" : "text-gray-900"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
