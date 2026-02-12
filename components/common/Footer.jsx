import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import styles from "@/styles/Footer.module.scss";

const defaultSections = [
  {
    title: "Quick Links",
    links: [
      { name: "About", href: "#" },
      { name: "Services", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  // {
  //   title: "Individual Services",
  //   links: [
  //     { name: "Tax Return Services", href: "#" },
  //     { name: "ITIN Processing", href: "#" },
  //     { name: "Tax Preparation Services", href: "#" },
  //     { name: "FBAR & FATCA Processing", href: "#" },
  //     { name: "Extension Filing Services", href: "#" },
  //     { name: "Tax Planning & Advisory", href: "#" },
  //     { name: "Tax Consultant Services", href: "#" },
  //     { name: "Audit Representation", href: "#" },
  //   ],
  // },
  // {
  //   title: "Business Services",
  //   links: [
  //     { name: "Business Tax Filing", href: "#" },
  //     { name: "Franchise Tax Filing", href: "#" },
  //     { name: "Annual Reports Filing", href: "#" },
  //     { name: "Estimated Tax Filing", href: "#" },
  //     { name: "Business Dissolution", href: "#" },
  //     { name: "BOI-R Filing", href: "#" },
  //     { name: "Business Reinstatement", href: "#" },
  //     { name: "Federal & State Assistance", href: "#" },
  //   ],
  // },
];

const defaultSocialLinks = [
  {
    icon: <IconBrandInstagram className="size-5" />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <IconBrandFacebook className="size-5" />,
    href: "#",
    label: "Facebook",
  },
  { icon: <IconBrandX className="size-5" />, href: "#", label: "Twitter" },
  {
    icon: <IconBrandLinkedin className="size-5" />,
    href: "#",
    label: "LinkedIn",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "VR Tax Filing",
  },
  sections = defaultSections,
  description = "Stress free tax filing for businesses and individuals",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 vrtaxfiling. All rights reserved.",
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <section className={styles.container}>
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-15 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-2xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-50">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
