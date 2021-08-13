import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import Contact from "../../components/Contact";

export function Blog({ name, publishString, backgroundImgSrc, children }) {
  return (
    <>
      <SiteHeader />
      <div
        className="relative bg-blue-800 overflow-hidden pt-12 pb-24 sm:pb-32"
        style={{
          backgroundImage: `url('${backgroundImgSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "hard-light",
          backgroundColor: "#4b5f77"
        }}
      >
        <div className="mt-8 sm:mt-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:text-left lg:items-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-4xl xl:text-5xl">
                  <span className="md:block">{name}</span>{" "}
                </h1>
                <div className="mt-3 sm:mt-5">
                  <div className="text-base text-white sm:text-xl lg:text-lg xl:text-xl ">
                    {publishString}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto py-16">{children}</div>
      </main>
      <Contact />
      <SiteFooter />
    </>
  );
}
