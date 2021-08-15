import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { FaSlack } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { routes } from "../../routes";


export function ContactForm({
  submit = "Submit"
}) {
  return (
    <div className="max-w-lg mx-auto lg:max-w-none">
      <form className="grid grid-cols-1 gap-y-6" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="full-name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="name"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify float-right py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {submit}
          </button>
        </div>
      </form>
    </div>
  )
}
export default function Contact() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <dl className="mt-8 text-base text-gray-500">
              <div className="space-y-2">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    <ReactCountryFlag
                      className="mr-1"
                      countryCode="US"
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em"
                      }}
                    />

                    <a href="tel:+1 559 206 3928">+1 559 206 3928</a>
                  </span>
                </dd>
                <dd className="flex">
                  <span className="ml-9">
                    <ReactCountryFlag
                      className="mr-1"
                      countryCode="ZA"
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em"
                      }}
                    />
                    <a href="tel:+27 72 482 1895">+27 72 482 1895</a>
                  </span>
                </dd>
                <dd className="flex">
                  <span className="ml-9">
                    <ReactCountryFlag
                      className="mr-1"
                      countryCode="EU"
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em"
                      }}
                    />
                    <a href="tel: +44 33 0058 0206"> +44 33 0058 0206</a>
                  </span>
                </dd>
              </div>
              <div className="mt-4">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />

                  <a className="ml-3" href="mailto:hi@flanksource.com">
                    hi@flanksource.com
                  </a>
                </dd>
              </div>

              <div className="mt-4">
                <dt className="sr-only">Slack</dt>
                <dd className="flex">
                  <FaSlack
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />

                  <a
                    className="ml-3"
                    href="https://join.slack.com/t/flanksource/shared_invite/zt-dvh61tg5-w8XOfrGWtCetGXYk48RKnw"
                  >
                    flanksource.slack.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{" "}
              <a
                href={routes.careers.path}
                className="font-medium text-gray-700 underline"
              >
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
