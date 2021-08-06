export default function LinkButton({ href, size, theme, shadow, children }) {
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
      themeClass = "text-white bg-blue-700 hover:bg-blue-800";
      break;
  }

  return (
    <div className={`${shadow ? "shadow" : ""}rounded-md`}>
      <a
        href={href}
        className={`${themeClass} w-full flex whitespace-nowrap items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md  md:py-4 md:text-lg md:px-10`}
      >
        {children}
      </a>
    </div>
  );
}
