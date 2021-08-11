// Example features:
//
// const features = [
//   {
//     name: "Unlimited Inboxes",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//   },
//   {
//     name: "Manage Team Members",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//   },
//   {
//     name: "Spam Report",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//   }
// ];

export default function FeatureSectionImage({
  features,
  title,
  subtitle,
  className,
  dark,
  imageSrc,
  ...props
}) {
  return (
    <div className={`relative ${className}`} {...props}>
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-6 sm:py-10 sm:px-8 md:py-20">
        <div className="max-w-2xl mx-auto md:max-w-none md:mr-0 md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mt-6 md:mt-0  text-3xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
          <div className="mt-8 overflow-hidden">
            <div className="-mx-8 -mt-8 flex flex-wrap flex-col">
              {features.map((item) => {
                return (
                  <div key={item.name} className="flex flex-row px-8 pt-8">
                    {item.icon ? (
                      <div className="mr-4 mt-1 flex flex-shrink-0 items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <div className="h-6 w-6">{item.icon}</div>
                      </div>
                    ) : null}
                    <div>
                      <div className="order-1 text-lg font-bold">
                        {item.name}
                      </div>
                      <div className="order-2 text-base font-medium text-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
