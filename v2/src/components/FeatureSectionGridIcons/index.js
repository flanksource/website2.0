// const features = [
//   {
//     name: "Push to Deploy",
//     icon: CloudUploadIcon,
//     description:
//       "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
//   },
//   {
//     name: "Push to Deploy",
//     icon: CloudUploadIcon,
//     description:
//       "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
//   },
//   {
//     name: "Push to Deploy",
//     icon: CloudUploadIcon,
//     description:
//       "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
//   },
//   {
//     name: "Push to Deploy",
//     icon: CloudUploadIcon,
//     description:
//       "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
//   }
// ];

export default function FeatureSectionGridIcons({
  caption,
  title,
  description,
  features,
  className,
  ...props
}) {
  return (
    <div className={`relative py-16 sm:py-24 lg:py-32 ${className}`} {...props}>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl">
        {caption && (
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            {caption}
          </h2>
        )}
        {title && (
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {title}
          </p>
        )}
        {description && (
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {description}
          </p>
        )}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gray-500 rounded-md shadow-lg">
                        <img
                          src={feature.icon}
                          alt={feature.name}
                          className="h-12 w-12 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                    <div className="mt-6">{feature.actions}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
