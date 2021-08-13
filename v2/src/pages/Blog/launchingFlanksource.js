import { Blog } from "../../components/Blog";
import { Link } from "react-router-dom";

export function BlogThree() {
  const props = {
    name: "Launching Flanksource",
    publishString:
      "Flanksource launched in January 2020 as a lean-first company focusing on Kubernetes",
    backgroundImgSrc: "/assets/img/lighthouse_milkyway.jpg"
  };

  return (
    <Blog {...props}>
      <div className="relative overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {props.name}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Flanksource launched in January 2020 as a lean-first company
              focusing exclusively on Kubernetes.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2 id="behind-the-name">Behind the Name</h2>
            <p>
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Flank_speed"
                rel="noreferrer"
              >
                flank speed
              </a>{" "}
              is a nautical term referring to a ship’s true maximum speed i.e.
              Flanksource is the engine that enables companies to reach their
              true potential.
            </p>
            <h2 id="vision">Vision</h2>
            <p>
              Flanksource’s vision is to see the large number of companies
              adopting Kubernetes realize its true value through high
              penetration into their legacy on-premise application stacks - not
              just the green-fields cloud-native applications where Kubernetes
              finds most of its success today.
            </p>
            <h2 id="chief-kubernetes-officer-cko">
              Chief Kubernetes Officer (CKO)
            </h2>
            <p>
              One of the many tasks required when starting a company is choosing
              what title to put on your business card. I chose
              <em>CKO</em> - in part as a play on words on{" "}
              <a
                target="_blank"
                href="https://www.cncf.io/certification/cka/"
                rel="noreferrer"
              >
                CKA
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/"
                rel="noreferrer"
              >
                Helmsman
              </a>{" "}
              - but more importantly as a signal of the deep-seated aspiration
              we at Flanksource have for CKOs to become as common as Chief
              Digital Officers are today.
            </p>

            <p>
              You might wonder how you could possibly compare a lowly container
              orchestrator to a full-blown digital transformation. If Kubernetes
              was just a container orchestrator, you would be right - but
              Kubernetes is so much more - to see why read{" "}
              <Link to="../blog/kubernetes-is-not-a-container-orchestrator">
                Kubernetes is NOT a Container Orchestrator
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Blog>
  );
}
