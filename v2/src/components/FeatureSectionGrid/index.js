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
  ...props
}) {
  return (
    <div className={`${className}`}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-6xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">{subtitle}</p>
        <div className="mt-2 lg:mt-4 flex flex-wrap justify-between">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="w-full max-w-none lg:max-w-md xl:max-w-sm pr-4 pt-8"
            >
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-indigo-200">
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
