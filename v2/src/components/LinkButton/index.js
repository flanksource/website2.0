import { Link } from "react-router-dom";

export default function LinkButton({
  href,
  size,
  theme,
  shadow,
  children,
  className
}) {
  // @TODO: implement size prop

  // @TODO: expand on primary, secondary classes
  let themeClass = "";
  switch (theme) {
    case "light":
      themeClass =
        "text-blue-800 hover:text-blue-900  bg-gray-100 hover:bg-blue-100";
      break;
    case "dark":
      themeClass = "text-white bg-blue-700 hover:bg-blue-800";
      break;
    case "primary":
      themeClass = "text-white bg-blue-700 hover:bg-blue-800";
      break;
    case "secondary":
      themeClass = "text-blue-900 bg-gray-100 hover:bg-blue-100";
      break;
    default:
      themeClass = "text-white bg-blue-700 hover:bg-blue-800"; // primary
      break;
  }

  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "text-sm font-medium px-3 py-1 md:py-2 md:text-sm";
      break;
    case "medium":
      sizeClass = "font-medium px-3 py-2 md:py-2 md:text-md md:px-4";
      break;
    case "large":
      sizeClass = "font-medium px-3 py-3 md:py-4 md:text-lg md:px-8";
      break;
    default:
      sizeClass = "font-medium px-3 py-2 md:py-2 md:text-md md:px-4"; // medium
      break;
  }

  return (
    <div className={`rounded-md ${shadow ? "shadow" : ""} ${className}`}>
      <Link
        to={href}
        className={`${themeClass} ${sizeClass} w-full flex whitespace-nowrap items-center justify-center border border-transparent rounded-md`}
      >
        {children}
      </Link>
    </div>
  );
}
