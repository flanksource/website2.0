import ResourceCTA from "../../components/ResourceCTA";
import SiteHeader from "../../components/SiteHeader";
import DefaultLayout from "../../layout/DefaultLayout";


import discovery from "../../assets/images/customers/discovery.svg";

export default function DiscoveryCaseStudy() {
  return (
    <DefaultLayout className="bg-gray-50" title="Case Study">
      <ResourceCTA
        title=""
        sub="Learn how flanksource helped Discovery build their vSphere + NSX-T based Kubernetes platform."
        logo={<img src={discovery} className="h-20 pb-10" />}
      />
    </DefaultLayout>
  );
}
