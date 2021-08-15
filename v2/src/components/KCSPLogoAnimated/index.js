import KCSPWheel from "../../assets/icons/kcsp-wheel.svg";
import KCSP from "../../assets/icons/kcsp-no-wheel.svg";

export default function KCSPLogoAnimated({ className, ...props }) {
  return (
    <div className={`${className} flex justify-center items-center`} {...props}>
      <div
        className="w-full relative flex justify-center items-center"
        style={{ animation: "5s fadeIn normal" }}
      >
        <div
          className=" w-2/6 h-2/6 absolute"
          style={{ transform: "translateY(-56%)" }}
        >
          <img
            style={{ animation: "6.5s rotateThree normal" }}
            src={KCSPWheel}
            alt="Kubernetes Certified Service Provider"
          />
        </div>
        <img src={KCSP} alt="Kubernetes Certified Service Provider" />
      </div>
    </div>
  );
}
