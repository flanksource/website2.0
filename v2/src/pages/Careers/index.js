import Dots from "../../components/Dots";
import DefaultLayout from "../../layout/DefaultLayout";

export default function Careers() {
  return (
    <DefaultLayout className="bg-gray-50 ">
      <div className="relative py-16 bg-gray-50 overflow-hidden">
        <Dots />
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Fully Remote
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Kubernetes Site Reliability Engineer
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {`flanksource is a niche consultancy focusing exclusively on
              Kubernetes and the Cloud Native ecosystem. We help companies
              navigate the CNCF landscape by evaluating and integrating
              technology into an infrastructure continuous delivery pipeline,
              tailored to each customer's particular environment and stack. We
              are looking for thinkers with a bias for action, who love the
              Kubernetes community as much as we do.`}
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h4>Responsibilities</h4>
            <ul>
              <li>
                {" "}
                Develop tooling, tests and automation for an enterprise-grade
                Kubernetes platform using immutable infrastructure and GitOps
                principles.
              </li>
              <li>
                {" "}
                Review code and configuration changes of both colleagues and
                customers.
              </li>
              <li>
                {" "}
                Evaluate and integrate cloud-native technologies, contributing
                features and bug-fixes back upstream when necessary.
              </li>
              <li>
                Be part of an on-call rotation (paid) and work to reduce both
                the number and MTTR of incidents.
              </li>
            </ul>

            <h4>Benefits</h4>
            <ul>
              <li>Remote first culture - work from anywhere in the world.</li>
              <li>
                Flexible working hours - Choose both when and how much you work,
                we accommodate full-time employees/contractors, part-timers and
                weekend warriors.
              </li>
              <li>
                Paid contribution to open-source projects in and around the
                kubernetes eco-system.
              </li>
              <li>
                Annual development budget to spend on conferences, books,
                courses, etc..
              </li>
            </ul>

            <h4> Job requirements</h4>
            <ul>
              <li>
                {" "}
                Deep understanding of kubernetes and containers. (i.e. be a
                Certified Kubernetes Administrator (CKA) or working towards it)
              </li>
              <li>Experience writing Go, or a desire to learn.</li>
              <li>
                Experience designing, operating or building distributed systems.
              </li>
              <li>Strong Linux and networking fundamentals.</li>
              <li>Some knowledge of DevOps principles and tools.</li>
              <li>
                Some knowledge of public or private cloud infrastructure (AWS,
                Azure, GCP, vSphere).
              </li>
              <li>
                Be able to empathize with enterprise application developers
                using Spring Boot/Weblogic.
              </li>
            </ul>

            <h4>Bonus Points for</h4>
            <ul>
              <li> Contributions and/or a passion for open source.</li>
              <li>Kubernetes operator and controller development.</li>
            </ul>
            <a
              type="button"
              href="https://flanksource1.recruitee.com/o/kubernetes-site-reliability-engineer"
              style={{ color: 'white' }}
              className="inline-flex  no-underline items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
