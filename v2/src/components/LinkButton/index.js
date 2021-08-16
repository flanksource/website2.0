import { Link } from "react-router-dom";

export default function LinkButton({
  href,
  to,
  size,
  theme,
  shadow,
  children,
  className
}) {
  // @TODO: implement size prop

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
      themeClass = "text-blue-900 bg-gray-100 hover:bg-blue-100 shadow";
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
    <div
      className={`rounded-md ${
        shadow ? "shadow" : ""
      } ${themeClass} ${sizeClass} ${className} inline-block cursor-pointer`}
    >
      {to && (
        <Link
          to={to}
          className={`whitespace-nowrap border border-transparent rounded-md`}
        >
          {children}
        </Link>
      )}

      {href && (
        <a
          href={href}
          className={`whitespace-nowrap border border-transparent rounded-md`}
        >
          {children}
        </a>
      )}
    </div>
  );
}
