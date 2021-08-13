import rocketImg from "../../assets/images/illustrations/rocket.webp";

export default function HeroSectionRocket({
  title,
  subtitle,
  gradients,
  actions
}) {
  return (
    <div
      className="min-h-screen flex h-full"
      style={{ backgroundColor: "#03151f" }}
    >
      <div className="h-full w-full pt-16 px-4 sm:px-6 py-12 lg:py-24 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center z-10 ">
        <div className="w-full mt-12 lg:mt-0">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            {title}
          </div>
          <div className="mt-8 text-base sm:text-xl lg:text-lg xl:text-xl  text-white">
            {subtitle}
          </div>
          <div className="flex flex-col sm:flex-row mt-8">{actions}</div>
        </div>
        <div className="w-full flex justify-center">
          <img alt="Flanksource Rocket" src={rocketImg} style={{}}></img>
        </div>
      </div>
      {gradients && (
        <div className="absolute h-full w-full flex justify-center items-center overflow-hidden">
          <div
            className="filter opacity-30 brightness-75 absolute"
            style={{
              borderRadius: "14% 86% 83% 17% / 47% 81% 19% 53% ",
              background:
                "linear-gradient(263deg, rgb(246 85 255) 0%, rgb(20 141 245) 100%)",
              transform: "translate(-49%, -30%)",
              width: "30%",
              height: "45%",
              filter: "blur(116px)"
            }}
          ></div>
          <div
            className="filter opacity-40 brightness-75 absolute"
            style={{
              borderRadius: "29% 71% 22% 78% / 33% 78% 22% 67%",
              background:
                "linear-gradient(263deg, rgb(19, 49, 165) 0%, rgb(181 10 10) 100%)",
              transform: "translate(79%, 29%)",
              width: "40%",
              height: "50%",
              filter: "blur(116px)"
            }}
          ></div>
          <div
            className="filter opacity-20 brightness-75 absolute"
            style={{
              transform: "translate(-100%, 100%)",
              width: "50%",
              height: "50%",
              filter: "blur(156px)",
              borderRadius: "42% 58% / 62% 41% 59% 38%",
              background:
                "linear-gradient(155deg, rgb(164 183 255) 0%, rgb(144 144 144) 100%)"
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
