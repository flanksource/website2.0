// Example srcList:
//
// const srcListExample = [
//   {
//     src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
//     alt: "Tuple"
//   },
//   ...
// ];

export default function LogoCloud({ srcList, title, ...props }) {
  return (
    <div className="bg-white py-12" {...props}>
      <div className="flex justify-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap">
          {srcList.map((item, index) => {
            const isLast = index + 1 === srcList.length;
            return (
              <div
                className={`px-6 py-6 flex justify-center md:col-span-2 lg:col-span-1`}
              >
                <img className="h-12" src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
