export default function HeaderSimpleCentered({
  caption,
  title,
  description,
  className
}) {
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {caption && (
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              {caption}
            </h2>
          )}
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            {title}
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
