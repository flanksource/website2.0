import { Blog } from "../../components/Blog";
import { blogRoutes } from "../../routes";
import { Link } from "react-router-dom";

import lighthouseImg from "../../assets/images/backgrounds/lighthouse_milkyway_cropped_adjusted_resized.jpg";

export function BlogIndex() {
  const props = {
    name: "Contributing factors to failure",
    publishString: "A lean-first company focusing on Kubernetes.",
    backgroundImgSrc: lighthouseImg
  };

  return (
    <Blog {...props}>
      {Object.entries(blogRoutes).map(([, value]) => {
        return (
          <>
            <article className="bg-gray-50 overflow-hidden min-w-full">
              <div className="px-4 py-5 sm:p-6">
                <div className="bg-white overflow-hidden shadow sm:rounded-lg flex flex-wrap">
                  <img
                    className="object-cover h-64 w-64 max-w-lg md:flex-grow"
                    alt=""
                    src={value.imgSrc}
                  />
                  <div className="px-4 py-5 sm:p-6 flex-grow max-w-lg flex flex-col">
                    <section className="flex-grow">
                      <h2 className="text-2xl text-gray-900">
                        <Link to={value.path}>{value.name}</Link>
                      </h2>
                      <p>{value.desc}</p>
                    </section>
                    <Link to={value.path} class="text-blue-400">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </Blog>
  );
}
