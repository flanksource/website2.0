import { Blog } from "../../components/Blog";

export function BlogTwo() {
  const props = {
    name: "Kubernetes is NOT a container orchestrator",
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
              It is a common misconception that Kubernetes is a container
              orchestrator, after-all the website describes it as:
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <blockquote>
              <p>
                open-source system for automating deployment, scaling, and
                management of <strong>containerized</strong> applications
              </p>
            </blockquote>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              While this description may be correct, it fails to capture
              Kubernetes’ true essence.
            </p>

            <p>
              Kubernetes’ ascension can be more readily explained by the amazing
              and passionate community that has developed, not for its container
              orchestration prowess, but for some of the following reasons:
            </p>
            <h2 id="shared-language">Shared Language</h2>
            <p>
              Kubernetes decouples <em>the definition</em> of an application,
              from <em>how</em> it is deployed. Never before have developers had
              this common language to describe their applications that is
              portable to different teams, companies and even clouds.
            </p>
            <p>
              20 years from now, we may not be using the Kubernetes codebase,
              but we will almost certainly be using its declarative model for
              defining applications.
            </p>
            <h2 id="commoditizing-control-theory">
              Commoditizing Control Theory
            </h2>
            <p></p>
            <twitter-widget
              class="twitter-tweet twitter-tweet-rendered"
              id="twitter-widget-0"
              style={{
                position: "static",
                visibility: "visible",
                display: "block",
                transform: "rotate(0deg)",
                maxWidth: "100%",
                width: "500px",
                minWidth: "220px",
                marginTop: "10px",
                marginBottom: "10px"
              }}
              data-tweet-id="935252923721793536"
            ></twitter-widget>
            <script
              async=""
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <p></p>
            <p>
              At it’s core Kubernetes is an enterprise-ready, programmable{" "}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Hierarchical_control_system"
                rel="noreferrer"
              >
                hierarchical control system
              </a>{" "}
              that consists of dozens of{" "}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Control_theory#Open-loop_and_closed-loop_(feedback)_control"
                rel="noreferrer"
              >
                closed feedback loops
              </a>
              . These work together to create a system that, while complex at
              first glance, is transparent, consistent and elegantly simple once
              you understand the underlying theory.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span>
                      <ul>
                        <li>
                          Builtin and{" "}
                          <a
                            target="_blank"
                            href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
                            rel="noreferrer"
                          >
                            custom
                          </a>{" "}
                          resources define the desired state declaratively
                        </li>
                        <li>
                          Controllers reconcile the observed state into desired
                          state
                        </li>
                        <li>
                          Each control loop can be reasoned about independently
                        </li>
                      </ul>
                    </span>
                  </td>
                  <td>
                    <img src="/assets/img/control-loop.png" />
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <a
                target="_blank"
                href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"
                rel="noreferrer"
              >
                Operators
              </a>{" "}
              and custom resources have commoditized building control loops for
              anything from{" "}
              <a target="_blank" href="https://kubevirt.io/" rel="noreferrer">
                virtual machines
              </a>{" "}
              to
              <a
                target="_blank"
                href="https://youtu.be/7g4da6-JXfE"
                rel="noreferrer"
              >
                video encoding and transmission systems
              </a>
              .
            </p>

            <p>To learn more about control theory see:</p>

            <ul>
              <li>
                Colm MacCárthaigh’s talk on{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=3AxSwCC7I4s"
                  rel="noreferrer"
                >
                  PID Loops and the Art of Keeping Systems Stable
                </a>
              </li>
              <li>
                Marc Brookers{" "}
                <a
                  target="_blank"
                  href="https://brooker.co.za/blog/"
                  rel="noreferrer"
                >
                  blog
                </a>
              </li>
            </ul>
            <p>
              Kubernetes is perhaps one of the few truly open systems. Where
              else do you get all the major cloud providers, vendors and
              end-users all collaborating together for a common purpose?
            </p>

            <p>
              Linux is the next closest <em>open</em> system. However, while
              there is a lot of collaboration upstream, most of the value is
              delivered in forked kernels that are maintained by each vendor.
            </p>

            <p>
              This makes compatibility between vendors possible, not{" "}
              <em>guaranteed</em> in the way Kubernetes is with
              <em>free</em> conformance tests.
            </p>
            <h2 id="governance">Governance</h2>

            <p>
              Governance is usually a synonym for red-tape that slows things
              down, while not adding much value. The{" "}
              <a
                target="_blank"
                href="https://github.com/kubernetes/community/blob/master/governance.md"
                rel="noreferrer"
              >
                Kubernetes Governance Model{" "}
              </a>
              is refreshingly different. It’s designed to respect Conway’s Law,
              pushing decision making down to the people with the most
              knowledge, while at the same time providing democratically elected
              steering that keeps the massive ship sailing in the right
              direction.
            </p>

            <div className="centered">
              <img src="/assets/img/k8s-governance.png" />
            </div>

            <p>
              As Kubernetes matures, the governance model has adapted to its
              current form, in which it heavily encourages de-coupling of new
              work into sub-projects owned by Special Interest Groups (SIGs).
            </p>

            <p>
              Members of the Kubernetes{" "}
              <a
                target="_blank"
                href="https://github.com/kubernetes/community/blob/master/community-membership.md"
                rel="noreferrer"
              >
                community
              </a>{" "}
              have a hierarchy with each level providing different rights -
              predominantly, the differences lie in who can approve code for
              merging.
            </p>

            <p>
              Promotion in the hierarchy is based not on seniority or vendor
              affiliation, but rather on a democratic process of rewarding
              people for <em>chopping wood and carrying water</em> - doing the
              jobs that need doing, not just the
              <em>fun</em> work.
            </p>

            <h2 id="communications">Communications</h2>

            <p>
              With the scale at which Kubernetes operates, it is amazing to see
              the level and quality of communication that prevails. Kubernetes
              certainly didn’t invent any of these techniques, but it certainly
              has done a fantastic job of implementing them.
            </p>

            <h3 id="everything-as-a-pr">Everything as a PR</h3>

            <p>
              The first thing you notice about the kubernetes communication
              model is that everything is a pull request or an issue:
            </p>

            <ul>
              <li>Joining the organization</li>
              <li>Promoting contributors</li>
              <li>Changing policies</li>
              <li>Blog posts</li>
              <li>KEPs (More on this below)</li>
            </ul>

            <h3 id="slack">#Slack</h3>

            <p>
              The <code>#kubernetes-users</code> slack channel has close to 90k
              members, making it one of the largest if not the largest channel
              in the world. Does your company have a slack channel for everyone?
            </p>

            <h3 id="office-hours">Office Hours</h3>

            <p>
              There are dozens of scheduled{" "}
              <a
                target="_blank"
                href="https://github.com/kubernetes/community/blob/master/sig-list.md"
                rel="noreferrer"
              >
                meetings
              </a>{" "}
              across all the SIGs and Working Groups (WG) every month. What
              makes these meetings unique is that they are open to anyone,
              recorded and published to YouTube with concise minutes that are
              shared in a public Google doc.
            </p>

            <h3 id="request-for-proposals">Request for Proposals</h3>

            <p>
              As projects grow, RFP’s become essential to maintaining stability,
              consistency and speed. Kubernetes Enhancements Proposals (
              <a
                target="_blank"
                href="https://github.com/kubernetes/enhancements/tree/master/keps"
                rel="noreferrer"
              >
                KEP
              </a>
              s) have been great at communicating and coordination change, with
              them even being adopted by projects like{" "}
              <a
                target="_blank"
                href="https://cwiki.apache.org/confluence/display/KAFKA/Kafka+Improvement+Proposals"
                rel="noreferrer"
              >
                kafka
              </a>
              .
            </p>

            <h2 id="a-new-definition">A New Definition</h2>

            <blockquote className="blockquote">
              <p>
                Kubernetes is a community solving distributed problems, both
                technical and procedural
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Blog>
  );
}
