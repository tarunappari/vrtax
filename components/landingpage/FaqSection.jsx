"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/landingpage/faq/accordion";
import Link from "next/link";
import styles from '@/styles/landingpage/Faq.module.scss'

export default function FAQSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "How long does the tax filing process take?",
      answer:
        "Once you upload your documents, we typically deliver your tax draft within 48 hours. Final filing timelines may vary depending on document completeness and review approval.",
    },
    {
      id: "item-2",
      question: "Is my financial information secure?",
      answer:
        "Yes. We use encrypted document submission and secure systems to protect your data. Your information is handled confidentially and in compliance with industry security standards.",
    },
    {
      id: "item-3",
      question: "Do you handle both individual and business taxes?",
      answer:
        "Absolutely. We prepare tax returns for individuals, freelancers, LLCs, corporations, and growing businesses across the United States.",
    },
    {
      id: "item-4",
      question: "Do you provide support in case of an IRS audit?",
      answer:
        "Yes. We offer audit assistance and ongoing support to help you respond to IRS notices, resolve disputes, and maintain compliance.",
    },
    {
      id: "item-5",
      question: "Can I file taxes entirely online?",
      answer:
        "Yes. Our platform allows you to upload documents, track progress, review drafts, and communicate with your assigned tax professional — all 100% online.",
    },
  ];

  return (
    <section className={`${styles.container}`}>
      <div className={styles.faqcontainer}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className={`${styles.endP} text-muted-foreground mt-6 px-8`}>
            Can't find what you're looking for? Contact our{" "}
            <Link href="#" className="text-primary font-bold text-white hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
