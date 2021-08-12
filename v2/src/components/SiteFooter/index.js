import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/flanksource-white.svg";
import { FaSlack, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function SiteFooter() {

  const footerNavigation = {
    kubernetes: [
      { name: 'Quickstart', href: '/kubernetes-services#quick-start' },
      { name: 'Managed Services', href: '/kubernetes-services#managed-services' },
      { name: 'Operator Development', href: '/kubernetes-services#operators' },
      { name: 'Internal Platforms', href: '/kubernetes-services#internal-platform-development' },
      { name: 'Strategy', href: '/kubernetes-services#cloud-and-devops' },
      { name: 'Resilience Reviews', href: '/kubernetes-services#resilience-assessment' },
    ],

    devops: [
      { name: 'Quickstart', href: '/kubernetes-services#quick-start' },
      { name: 'Managed Services', href: '/kubernetes-services#managed-services' },
    ],

    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    opensource: [
      { name: 'Karina', href: 'https://www.github.com/flanksource/karina' },
      { name: 'Canary Checker', href: 'https://www.github.com/flanksource/canary-checker' },
      { name: 'Template Operator', href: 'https://www.github.com/flanksource/template-operator' },
      { name: 'Git Operator', href: 'https://www.github.com/flanksource/git-operator' },
      { name: 'Platform Operator', href: 'https://www.github.com/flanksource/platform-operator' },
      { name: 'kommons', href: 'https://www.github.com/flanksource/kommons' },
      { name: 'konfigadm', href: 'https://www.github.com/flanksource/konfigadm' },
    ],


    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blogs' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [


      {
        name: 'GitHub',
        href: 'https://www.github.com/flanksource',
        icon: FaGithub
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/flanksource",
        icon: FaLinkedin,
      }

    ],
  }



  //   const navigation = {
  //     main: [
  //       { name: "About", href: routes.about.path },
  //       { name: "Services", href: routes.services.path },
  //       { name: "Open Source", href: routes.openSource.path },
  //       { name: "Careers", href: routes.careers.path },
  //       { name: "Blog", href: routes.blog.path },
  //       { name: "Contact", href: routes.contact.path }
  //     ],

  //     ]
  // };

  return (

    <footer className="bg-warm-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="space-y-8 xl:col-span-4">
            <Logo />

            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4"> */}

          <div className=" md:gap-8  xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Kubernetes</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.kubernetes.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" md:gap-8  xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Cloud & DevOps</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.devops.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="md:gap-8  xl:col-span-2">
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Open Source</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.opensource.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>




          <div className=" md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* </div> */}

        </div>

      </div>
    </footer >
  );
}
