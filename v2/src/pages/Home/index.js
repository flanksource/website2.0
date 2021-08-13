import React from "react";
import SiteFooter from "../../components/SiteFooter"
import SiteHeader from "../../components/SiteHeader"

export default function Home() {

  return (
    <>
      <SiteHeader />
      <header class="header text-center text-white  h-fullscreen " style={{ backgroundImage: "url(../assets/img/milkway3.jpg)" }}
        data-overlay="5">
        <canvas class="constellation" data-radius="0"></canvas>
        <div class="container">
          <div class="row align-items-center h-100">

            <div class="col-lg-6">
              <h1>Kubernetes at Full Speed</h1>
              <p class="mt-5 mb-6">We help teams build and operationalise Kubernetes based platforms enabling faster,
                more resilient value delivery to customers at <i><u>lower</u></i> cost.</p>
              <p class="gap-xy">
                <a class="btn btn-round btn-light mw-150" href="/contact.html">Get in touch</a>
              </p>
            </div>

            <div class="col-lg-5 ml-auto mb-6">
              <img src="/assets/img/rocket.webp" style={{ zIndex: "100" }} alt="img" />
            </div>

          </div>
        </div>
      </header>
      <main class="main-content">
        <section class="section">
          <div class="container">
            <div class="row gap-y">
              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"> <img class="mt-5 h-80px" src="../assets/img/resilience-review_80px.png" alt="img" /></p>
                  <h5>Resilience Review</h5>
                  <p>Not sure what you need to be production-ready? We can help with a fault-domain analysis and a customized checklist.</p>
                  <p><a class="small-3 fw-600" href="/services.html#resilience-review">Learn more <i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"><img class="mt-5  h-80px" src="../assets/img/platform-operations_80px.png" alt="img" /></p>
                  <h5>SRE driven Platform Operations</h5>
                  <p>Don't have a team of Certified Kubernetes Administrators on-call? We can help with augmented or fully managed operations.</p>
                  <p><a class="small-3 fw-600" href="/services.html#platform-operations">Learn more <i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"><img class="mt-5  h-80px" src="../assets/img/quickstart.svg" alt="img" /></p>
                  <h5>Kubernetes Quickstart</h5>
                  <p>Beginning your journey? We can get you production-ready in just 60 days<sup>*</sup>.
                    <br /><sub>* T & C's Apply</sub></p>
                  <p><a class="small-3 fw-600" href="#get-in-touch">Get In Touch<i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"><img class="mt-5  h-80px" src="../assets/img/cost-value_80px.png" alt="img" /></p>
                  <h5>Strategy & Value Optimisation</h5>
                  <p>Kubernetes or OpenShift, Cloud or On-Prem - we will give you actionable recommendations to get the most bang for your buck.</p>
                  <p><a class="small-3 fw-600" href="/services.html#cost-optimisation">Learn more <i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"><img class="mt-5  h-80px" src="../assets/img/training_small.svg" alt="img" /></p>
                  <h5>SRE focused Training</h5>
                  <p>We conduct both classroom based training and more hands-on SRE focused game days practicing incident response. </p>
                  <p><a class="small-3 fw-600" href="#get-in-touch">Get In Touch <i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-body border text-center">
                  <p class="my-5"><img class="mt-5  h-80px" src="../assets/img/cicd_80px.png" alt="img" /></p>
                  <h5>Infrastructure Continuous Delivery </h5>
                  <p>Are your environments more like pets than cattle? We can help with pipelines that deliver <i>safe</i> and tested clusters - continuously.</p>
                  <p><a class="small-3 fw-600" href="/services.html#infrastructure-cicd">Learn more <i class="fa fa-angle-right small-5 pl-1"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="bg-gray p-5">

          <section class="section">
            <div class="container text-center">
              <h1 class="display-4" id="get-in-touch" >Get In Touch</h1>
            </div>
            <div class="container">
              <div class="row">
                <form class="col-lg-6 mx-auto  rounded" netlify>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input class="form-control form-control-lg" type="text" name="name" placeholder="Your Name" />
                    </div>

                    <div class="form-group col-md-6">
                      <input class="form-control form-control-lg" type="email" name="email" placeholder="Your Email Address" />
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control form-control-lg" rows="4" placeholder="Your Message"
                      name="message"></textarea>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-lg btn-primary" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
              <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8 mx-auto">
                  <p class="lead-2 mt-6">Or via email: <i class="fa fa-envelope-o"></i> <a href="mailto:hi@flanksource.com">hi@flanksource.com</a>, or <i class="fa fa-slack"></i> <a href="https://join.slack.com/t/flanksource/shared_invite/zt-dvh61tg5-w8XOfrGWtCetGXYk48RKnw">flanksource.slack.com</a>
                  </p>
                </div>
              </div>
            </div>

          </section>
        </div>

      </main >
      < SiteFooter />
    </>
  );
}
