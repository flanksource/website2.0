import { Blog } from "../../components/Blog";

export function BlogOne() {
  const props = {
    name: "Embracing Failure: Lessons learned from 50 post-mortems",
    publishString:
      "Published Feb 10, 2020 by Moshe Immerman, Reading time: 4min",
    backgroundImgSrc: "/assets/img/control-loop-hero.jpg"
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
              Henning Jacob of Zalando fame has started compiling an awesome
              list of failure stories at
              <a target="_blank" href="https://k8s.af/" rel="noreferrer">
                k8s.af
              </a>{" "}
              (And yes failure stories are awesome!)
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              With 42 incidents and counting it is starting to provide a good
              dataset for identifying common contributing factors to outages.
            </p>
            <p>
              Note that we use contributing factors and not root cause. Decades
              of resilience engineering research has{" "}
              <a
                target="_blank"
                href="https://github.com/lorin/resilience-engineering/blob/master/intro.md"
                rel="noreferrer"
              >
                found
              </a>{" "}
              that linear causality in complex adaptive systems is a widely held
              fallacy.
            </p>
            <h2 id="contributing-factors">Contributing Factors</h2>
            <img src="/assets/img/pubchart.png" />
            <br />
            <p>
              <a
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1zCqaQWHu21zDCniuIb3GW8KJTvgPdCbzH2imxnXFuyw"
                rel="noreferrer"
              >
                Raw data
              </a>{" "}
              (skewed slightly by the large number of Zalando outages reported)
            </p>
            <h2 id="resource-exhaustion">Resource Exhaustion</h2>
            <p>
              Resources are the most contributing factor in bringing down
              kubernetes clusters.
              <ul>
                <li>
                  Increase the number of fault-domains to limit the amount of
                  over-provisioning that is required{" "}
                </li>
                <li>
                  {`Use nodeAffinity and/or tainting to ensure your node pool's
                  have enough capacity`}
                </li>
                <li>
                  Enforce Resource Quotas to restrict both the total CPU/Memory
                  and the number of Pods, LoadBalancers that each namespace can
                  create.{" "}
                </li>
                <li>
                  Monitor CronJobs and/or isolate them into their own
                  namespaces. If not configured correctly they can quickly
                  runaway and consume all available POD resources.{" "}
                </li>
                <li>
                  When running in the cloud be wary of API Rate Limiting on
                  dependencies such as IAM and Container Registries
                </li>
              </ul>
            </p>
            <h2 id="overprovisioning-nodes">Overprovisioning Nodes</h2>
            <p>
              {`If you don't specify any requests than Kubernetes will schedule
              potentially more PODs than it has resources for, triggering
              OutOfMemory errors and/or CPU exhaustion. When this happens, the
              kubelet will also potentially start reporting unhealthy,
              triggering kubernetes to evict all pods and reschedule on
              different nodes, causing a cascading failure than can bring down
              the entire cluster.`}
              <ul>
                <li>Always use CPU / Memory requests</li>
                <li>{`Don't over-provision memory`}</li>
                <li>
                  Consider skipping CPU limits as they come with an overhead due
                  to kernel based throttling{" "}
                </li>
              </ul>
              <blockquote className="twitter-tweet" data-conversation="none">
                <p lang="en" dir="ltr">
                  This is why I always advise:
                  <br />
                  <br />
                  1) Always set memory limit == request
                  <br />
                  2) Never set CPU limit
                  <br />
                  <br />
                  (for locally adjusted values of &quot;always&quot; and
                  &quot;never&quot;)
                </p>
                &mdash; Tim Hockin (@thockin){" "}
                <a
                  target="_blank"
                  href="https://twitter.com/thockin/status/1134193838841401345?ref_src=twsrc%5Etfw"
                  rel="noreferrer"
                >
                  May 30, 2019
                </a>
              </blockquote>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </p>
            <h2 id="dns">DNS</h2>
            <p>
              As the central component used in service discovery, DNS issues can
              affect the entire cluster
              <ul>
                <li>
                  Be wary of the{" "}
                  <a
                    target="_blank"
                    href="https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jan-2019-dns-outage.md"
                    rel="noreferrer"
                  >
                    ndots:5{" "}
                  </a>
                  issue - it is easy to DDoS yourself{" "}
                </li>
                <li> Random 2 – 5s latencies are often DNS related </li>
                <li>
                  {" "}
                  Give CoreDNS extra CPU and Memory, and increase the number of
                  replicas as needed{" "}
                </li>
                <li>
                  {" "}
                  Consider{" "}
                  <a
                    target="_blank"
                    href="https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/"
                    rel="noreferrer"
                  >
                    Node Local DNS{" "}
                  </a>
                  for DNS caching and reducing conntrack usage{" "}
                </li>
              </ul>
            </p>
            <h2 id="upgrades">Upgrades</h2>
            <p>
              Outages that occur during or after upgrades feature regularly - In
              particular to note{" "}
              <a
                target="_blank"
                href="https://community.monzo.com/t/resolved-current-account-payments-may-fail-major-outage-27-10-2017/26296/95"
                rel="noreferrer"
              >
                time-bombs
              </a>{" "}
              can be introduced during an upgrade that only present them at the
              worst possible moment (restarting your infrastructure in an
              attempt to mitigate a partial outage, triggering a full outage)
              <ul>
                <li>
                  Be wary of long running pods and services, consider
                  implementing a policy of terminating pods after a set period{" "}
                </li>
                <li>
                  Test both new deployments and upgrades from previous versions{" "}
                </li>
              </ul>
            </p>
            <h2 id="network-ingress">Networking/Ingress</h2>
            <p>
              <ul>
                <li>
                  Understand{" "}
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=0o5C12kzEDI&list=PL90QotVRoDrhRnSwLYJDrR-Ptqjh2a4xR&index=109"
                    rel="noreferrer"
                  >
                    zero-down time deployments
                  </a>{" "}
                  (it is not as easy as you may think){" "}
                </li>
                <li>
                  Monitor your network control plane, especially for resource
                  exhaustion and capacity limits{" "}
                </li>
              </ul>
            </p>
            <h2 id="applications">Application</h2>
            <p>
              Incorrectly configured applications can quickly lead to issues
              that cascade into cluster-wide failure.
              <ul>
                <li>
                  Use policies to limit developer defined configuration to
                  sensible values (see{" "}
                  <a
                    target="_blank"
                    href="https://github.com/lorin/resilience-engineering/blob/master/intro.md"
                    rel="noreferrer"
                  >
                    OPA
                  </a>
                  )
                </li>
                <li>Enforce the use of liveness and readiness probes</li>
                <li>
                  Restrict replicas, and constrain deployment strategies budgets
                  for{" "}
                </li>
                <li>{`Ensure CronJob's are correctly configured`}</li>
                <li>Avoid custom scheduling using node taints</li>
                <li>{`Apply default podAntiAffinity's`}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Blog>
  );
}
