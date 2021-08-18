import { ReactComponent as Logo } from "../../assets/images/flanksource-white.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { routes } from "../../routes";

export default function SiteFooter() {
  const social = [
    {
      name: "GitHub",
      href: "https://www.github.com/flanksource",
      icon: FaGithub
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/flanksource",
      icon: FaLinkedin
    }
  ];
  const footerNavigation = {
    kubernetes: {
      title: "Kubernetes",
      links: [
        {
          name: "Quickstart",
          href: `${routes.services.path}#quick-start`
        },
        {
          name: "Managed Services",
          href: `${routes.services.path}#managed-services`
        },
        {
          name: "Migrations",
          href: `${routes.services.path}#migrations`
        },
        {
          name: "Internal Platforms",
          href: `${routes.services.path}#internal-platform-development`
        },
        { name: "Strategy", href: `${routes.services.path}#cloud-and-devops` },
        {
          name: "Resilience Reviews",
          href: `${routes.services.path}#resilience-assessment`
        }
      ]
    },
    devops: {
      title: "Cloud & Devops",
      links: [
        { name: "Quickstart", href: `${routes.services.path}#quick-start` },
        {
          name: "Managed Services",
          href: `${routes.services.path}#managed-services`
        }
      ]
    },
    // support: {
    //   title: "Support",
    //   links: [
    //     { name: "Pricing", href: "#" },
    //     { name: "Documentation", href: "#" },
    //     { name: "Guides", href: "#" },
    //     { name: "API Status", href: "#" }
    //   ]
    // },
    opensource: {
      title: "Open Source",
      links: [
        { name: "Karina", href: "https://www.github.com/flanksource/karina" },
        {
          name: "Canary Checker",
          href: "https://www.github.com/flanksource/canary-checker"
        },
        {
          name: "Template Operator",
          href: "https://www.github.com/flanksource/template-operator"
        },
        {
          name: "Git Operator",
          href: "https://www.github.com/flanksource/git-operator"
        },
        {
          name: "Platform Operator",
          href: "https://www.github.com/flanksource/platform-operator"
        },
        { name: "kommons", href: "https://www.github.com/flanksource/kommons" },
        {
          name: "konfigadm",
          href: "https://www.github.com/flanksource/konfigadm"
        }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About", href: `${routes.about.path}` },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: `${routes.contact.path}?utm_content=footer` }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" }
      ]
    }
  };

  return (
    <footer className="bg-warm-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start mb-12 lg:mr-24 ">
            <Logo />
            <div className="mt-4 ml-1 flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-warm-gray-400 hover:text-warm-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-between md:flex-row lg:mt-2">
            {Object.keys(footerNavigation).map((key) => {
              const column = footerNavigation[key];
              return (
                <div
                  key={column.title}
                  className="flex flex-grow ml-8 sm:ml-16 md:ml-0 mb-14 md:mb-0"
                >
                  <div className="md:mt-0">
                    <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">
                      {column.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {column.links.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-warm-gray-400 hover:text-warm-gray-300"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
