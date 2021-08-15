export default function CardSection({
  bgColorClass,
  caption,
  title,
  description,
  actions,
  className
}) {
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-lg shadow-xl overflow-hidden ${
            bgColorClass ? "" : "bg-blue-700"
          }`}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <span className="block uppercase text-white font-bold">
                {caption}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                <span className="block">{title}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                {description}
              </p>
              {actions && <>{actions}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
