import Container from "../Container";

export default function HeaderWithBackground({
  title,
  subtitle,
  actions,
  ...props
}) {
  return (
    <div className="relative bg-blue-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className="absolute inset-0 bg-blue-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="relative max-w-7xl mx-auto py-24 sm:py-32">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-md sm:text-xl text-blue-100 max-w-3xl">
            {subtitle}
          </p>
          <div className="mt-10 flex justify-start">{actions}</div>
        </div>
      </Container>
    </div>
  );
}
