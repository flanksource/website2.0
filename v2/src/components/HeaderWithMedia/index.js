/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/

export default function HeaderWithMedia({
  title,
  content,
  actions,
  media,
  style,
  ...props
}) {
  return (
    <div
      className="relative bg-blue-800 overflow-hidden pt-12 pb-24 sm:pb-32"
      style={style}
    >
      <main className="mt-8 sm:mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-5xl xl:text-6xl">
                  {title}
                </h1>
                <div className="mt-3 sm:mt-5">{content}</div>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">{media}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
