export default function FeatureSectionImageCard({
  icon,
  title,
  id,
  description,
  actions,
  imageSrc,
  imageAlt,
  flipped,
  noBorder,
  noOverflow,
  className,
  ...props
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} id={id}>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div
            className={`mt-12 mb-16 lg:mb-0 sm:mt-16 lg:mt-0 ${
              flipped ? "col-start-2" : ""
            } ${noOverflow ? "flex justify-center lg:block" : ""}`}
          >
            <div
              className={`lg:px-0 lg:m-0 lg:relative lg:h-full flex flex-col justify-center ${
                noOverflow
                  ? "px-4 sm:px-8 max-w-xl lg:max-w-none w-full"
                  : "pl-4 sm:pl-6 -mr-48  md:-mr-16"
              }`}
            >
              <img
                className={`w-full p-10 ${
                  flipped ? "lg:right-0" : "lg:left-0"
                } ${
                  noBorder
                    ? ""
                    : "rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                }`}
                src={imageSrc}
                alt={imageAlt ? imageAlt : "Section Image"}
              />
            </div>
          </div>
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-8 lg:max-w-none lg:mx-0 lg:px-0 flex flex-col justify-center">
            {icon && (
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <div className="h-6 w-6 text-white" aria-hidden="true">
                    {icon}
                  </div>
                </span>
              </div>
            )}

            <div className="pt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
              {actions && <div className="mt-6">{actions}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
