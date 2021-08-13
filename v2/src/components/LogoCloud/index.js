// Example srcList:
//
// const srcListExample = [
//   {
//     src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
//     alt: "Tuple"
//   },
//   ...
// ];

export default function LogoCloud({ srcList, title, className, ...props }) {
  return (
    <div className={className} {...props}>
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap">
          {srcList.map((item, index) => {
            return (
              <div
                className={`px-3 py-3 flex justify-center md:col-span-2 lg:col-span-1`}
              >
                <img
                  className="h-12"
                  src={item.src}
                  alt={item.alt}
                  title={item.title ? item.title : ""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
