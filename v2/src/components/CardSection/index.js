export default function CardSection({ bgColorClass, ...props }) {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-lg shadow-xl overflow-hidden ${
            bgColorClass ? "" : "bg-blue-700"
          }`}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <span className="block uppercase text-white font-bold">
                Customer Story:
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                <span className="block">
                  From slowed deployment to a secure on-premise platform
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                See how flanksource streamlined and improved the Kubernetes
                infrastructure for a leading insurance and financial services
                company.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-indigo-50"
              >
                Read the case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
